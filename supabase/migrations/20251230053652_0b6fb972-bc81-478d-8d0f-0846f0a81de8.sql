-- Drop the enum type if it was partially created
DROP TYPE IF EXISTS public.door_type_enum;

-- Create door_type enum
CREATE TYPE public.door_type_enum AS ENUM (
  'swing_door',
  'sliding_door',
  'automatic_door',
  'accordion_door',
  'folding_door'
);

-- Change door_type column to use the enum type with data conversion
ALTER TABLE public.survey_responses 
ALTER COLUMN door_type TYPE public.door_type_enum 
USING CASE door_type
  WHEN '앞으로 여는 문' THEN 'swing_door'::public.door_type_enum
  WHEN '옆으로 미는 문' THEN 'sliding_door'::public.door_type_enum
  WHEN '자동문(버튼)' THEN 'automatic_door'::public.door_type_enum
  WHEN '접는문(아코디언)' THEN 'accordion_door'::public.door_type_enum
  WHEN '폴딩도어' THEN 'folding_door'::public.door_type_enum
  ELSE NULL
END;