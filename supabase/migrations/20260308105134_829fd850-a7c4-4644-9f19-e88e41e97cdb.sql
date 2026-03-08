-- Tighten UPDATE and DELETE policies to require specific admin email
-- Drop overly permissive policies
DROP POLICY "Authenticated users can update submissions" ON public.contact_submissions;
DROP POLICY "Authenticated users can delete submissions" ON public.contact_submissions;

-- Recreate with check against auth.email()
CREATE POLICY "Admin can update submissions"
  ON public.contact_submissions FOR UPDATE
  TO authenticated
  USING (auth.email() = 'bjtmusic12@gmail.com');

CREATE POLICY "Admin can delete submissions"
  ON public.contact_submissions FOR DELETE
  TO authenticated
  USING (auth.email() = 'bjtmusic12@gmail.com');