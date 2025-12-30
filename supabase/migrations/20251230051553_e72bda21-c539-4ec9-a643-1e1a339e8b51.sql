-- Convert accessible_restroom from text to boolean
ALTER TABLE public.survey_responses 
ALTER COLUMN accessible_restroom TYPE boolean 
USING CASE 
  WHEN accessible_restroom = 'true' THEN true 
  WHEN accessible_restroom = 'false' THEN false 
  ELSE NULL 
END;