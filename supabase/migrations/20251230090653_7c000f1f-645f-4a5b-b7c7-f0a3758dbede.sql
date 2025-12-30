-- Change grab_bar_type column from grab_bar_type_enum[] to grab_bar_type_enum (single value)
ALTER TABLE public.survey_responses
ALTER COLUMN grab_bar_type TYPE grab_bar_type_enum
USING (grab_bar_type[1]);