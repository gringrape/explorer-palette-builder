-- Rename accessible_restroom column to has_accessible_restroom
ALTER TABLE public.survey_responses 
RENAME COLUMN accessible_restroom TO has_accessible_restroom;