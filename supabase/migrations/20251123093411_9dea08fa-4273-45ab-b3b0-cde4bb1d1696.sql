-- Create survey_responses table to store team survey data
CREATE TABLE public.survey_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Team information
  team_name TEXT NOT NULL,
  team_members TEXT[] NOT NULL,
  
  -- Location information
  building TEXT,
  floor TEXT,
  gender TEXT,
  
  -- Restroom condition
  dream_school TEXT,
  can_use_restroom TEXT,
  why_not_use TEXT[],
  
  -- Door survey
  door_type TEXT,
  
  -- Size survey
  width TEXT,
  height TEXT,
  
  -- Photos (stored as base64 or URLs)
  photos TEXT[],
  
  -- Handrail survey
  handrail_types TEXT[],
  
  -- Sink survey
  has_sink TEXT,
  can_wash TEXT,
  sink_height TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.survey_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert survey responses (public survey)
CREATE POLICY "Anyone can insert survey responses"
ON public.survey_responses
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anyone to read survey responses
CREATE POLICY "Anyone can read survey responses"
ON public.survey_responses
FOR SELECT
TO anon, authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_survey_responses_updated_at
BEFORE UPDATE ON public.survey_responses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();