-- Rename columns in survey_responses table
ALTER TABLE public.survey_responses 
  RENAME COLUMN is_usable TO is_basin_usable;

ALTER TABLE public.survey_responses 
  RENAME COLUMN height TO depth;

ALTER TABLE public.survey_responses 
  RENAME COLUMN gender TO restroom_gender;

ALTER TABLE public.survey_responses 
  RENAME COLUMN handrail_types TO grab_bar_type;