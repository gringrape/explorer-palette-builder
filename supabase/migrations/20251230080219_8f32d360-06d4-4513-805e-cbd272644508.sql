-- Create basin_height_type enum
CREATE TYPE public.basin_height_type_enum AS ENUM (
  'standard',
  'high',
  'low'
);

-- Rename columns
ALTER TABLE public.survey_responses RENAME COLUMN has_sink TO has_basin;
ALTER TABLE public.survey_responses RENAME COLUMN can_wash TO is_usable;
ALTER TABLE public.survey_responses RENAME COLUMN sink_height TO basin_height_type;

-- Change has_basin to boolean
ALTER TABLE public.survey_responses 
ALTER COLUMN has_basin TYPE boolean 
USING CASE 
  WHEN has_basin = 'yes' THEN true
  WHEN has_basin = 'no' THEN false
  ELSE NULL
END;

-- Change is_usable to boolean
ALTER TABLE public.survey_responses 
ALTER COLUMN is_usable TYPE boolean 
USING CASE 
  WHEN is_usable = 'yes' THEN true
  WHEN is_usable = 'no' THEN false
  ELSE NULL
END;

-- Change basin_height_type to enum
ALTER TABLE public.survey_responses 
ALTER COLUMN basin_height_type TYPE public.basin_height_type_enum 
USING CASE basin_height_type
  WHEN 'good' THEN 'standard'::public.basin_height_type_enum
  WHEN 'high' THEN 'high'::public.basin_height_type_enum
  WHEN 'low' THEN 'low'::public.basin_height_type_enum
  ELSE NULL
END;