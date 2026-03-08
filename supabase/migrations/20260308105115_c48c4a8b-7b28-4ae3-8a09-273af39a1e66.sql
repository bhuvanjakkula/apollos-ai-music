-- Contact submissions table (anyone can insert, only authenticated admin can read)
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  inquiry_type TEXT DEFAULT 'general',
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone (even unauthenticated) can submit a contact form
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view submissions (admin access)
CREATE POLICY "Authenticated users can view submissions"
  ON public.contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update (mark as read)
CREATE POLICY "Authenticated users can update submissions"
  ON public.contact_submissions FOR UPDATE
  TO authenticated
  USING (true);

-- Only authenticated users can delete
CREATE POLICY "Authenticated users can delete submissions"
  ON public.contact_submissions FOR DELETE
  TO authenticated
  USING (true);