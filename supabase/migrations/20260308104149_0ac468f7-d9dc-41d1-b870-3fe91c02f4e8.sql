-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create purchased_music table
CREATE TABLE public.purchased_music (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  track_title TEXT NOT NULL,
  album_name TEXT,
  artist_name TEXT DEFAULT 'Bhuvanaai',
  purchase_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  download_url TEXT,
  price DECIMAL(10,2)
);

ALTER TABLE public.purchased_music ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own purchases" ON public.purchased_music FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own purchases" ON public.purchased_music FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Saved tracks table
CREATE TABLE public.saved_tracks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  track_title TEXT NOT NULL,
  album_name TEXT,
  artist_name TEXT DEFAULT 'Bhuvanaai',
  saved_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, track_title)
);

ALTER TABLE public.saved_tracks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their saved tracks" ON public.saved_tracks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can save tracks" ON public.saved_tracks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can unsave tracks" ON public.saved_tracks FOR DELETE USING (auth.uid() = user_id);