-- Rename column from can_use_restroom to accessible_restroom
ALTER TABLE public.survey_responses 
RENAME COLUMN can_use_restroom TO accessible_restroom;

-- Update values to true/false
UPDATE public.survey_responses 
SET accessible_restroom = CASE 
  WHEN accessible_restroom = '사용할 수 있어!' THEN 'true'
  WHEN accessible_restroom = '사용 못해' THEN 'false'
  WHEN accessible_restroom = 'yes' THEN 'true'
  WHEN accessible_restroom = 'no' THEN 'false'
  ELSE accessible_restroom
END
WHERE accessible_restroom IS NOT NULL;