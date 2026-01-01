-- Change grab_bar_type from single enum to array of enum
ALTER TABLE public.survey_responses 
ALTER COLUMN grab_bar_type TYPE grab_bar_type_enum[] 
USING CASE 
  WHEN grab_bar_type IS NULL THEN NULL 
  ELSE ARRAY[grab_bar_type] 
END;