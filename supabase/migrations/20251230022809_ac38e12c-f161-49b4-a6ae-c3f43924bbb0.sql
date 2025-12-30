-- Convert floor column from text to integer by extracting only digits
ALTER TABLE public.survey_responses 
ALTER COLUMN floor TYPE integer USING NULLIF(regexp_replace(floor, '[^0-9]', '', 'g'), '')::integer;