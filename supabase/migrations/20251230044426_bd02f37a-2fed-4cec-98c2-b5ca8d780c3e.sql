-- Rename column from why_not_use to unavailable_reason
ALTER TABLE public.survey_responses 
RENAME COLUMN why_not_use TO unavailable_reason;

-- Update array values
UPDATE public.survey_responses 
SET unavailable_reason = ARRAY(
  SELECT CASE 
    WHEN elem = 'cleaning' THEN 'storage'
    WHEN elem = 'student' THEN 'changing_room'
    WHEN elem = 'teacher' THEN 'general_use'
    WHEN elem = 'broken' THEN 'out_of_order'
    ELSE elem
  END
  FROM unnest(unavailable_reason) AS elem
)
WHERE unavailable_reason IS NOT NULL;