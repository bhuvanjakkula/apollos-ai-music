
-- Drop the old permissive SELECT policy that lets anyone view
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;

-- Create new SELECT policy restricted to admin only
CREATE POLICY "Admin can view submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (auth.email() = 'bjtmusic12@gmail.com');
