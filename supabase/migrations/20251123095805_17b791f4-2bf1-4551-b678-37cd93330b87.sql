-- Create storage bucket for survey photos
insert into storage.buckets (id, name, public)
values ('survey-photos', 'survey-photos', true);

-- Allow anyone to upload photos
create policy "Anyone can upload survey photos"
on storage.objects
for insert
with check (bucket_id = 'survey-photos');

-- Allow anyone to read photos
create policy "Anyone can view survey photos"
on storage.objects
for select
using (bucket_id = 'survey-photos');