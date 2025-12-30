-- Create grab_bar_type enum
CREATE TYPE public.grab_bar_type_enum AS ENUM (
  'horizontal-flexible',
  'horizontal-fixed',
  'vertical',
  'other'
);

-- Change grab_bar_type column from TEXT[] to grab_bar_type_enum[]
ALTER TABLE public.survey_responses
ALTER COLUMN grab_bar_type TYPE grab_bar_type_enum[]
USING grab_bar_type::grab_bar_type_enum[];