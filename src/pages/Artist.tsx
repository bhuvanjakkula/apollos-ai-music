import { motion } from "framer-motion";
import { ExternalLink, Music } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import artistImg from "@/assets/artist-bhuvanaai.png";

const SPOTIFY_ARTIST_URL = "https://open.spotify.com/artist/6FAynluV2cSNgytAi6TZhW";

const popularTracks = [
  { title: "Forever in Your Love", url: "https://open.spotify.com/track/6W4HPydyZmd5Hzmo4XNcGy", duration: "3:46" },
  { title: "Oh My Divine", url: "https://open.spotify.com/track/4mSyvWzuVSgEbM9eAuYVrK", duration: "3:59" },
  { title: "Oceans Deep", url: "https://open.spotify.com/track/0aPJO33b73TsEO9QU42cc2", duration: "3:59" },
  { title: "A Thousand Echoes", url: "https://open.spotify.com/track/5RqaYjVkeaLs4KSSTBskMf", duration: "3:59" },
  { title: "We Move as One", url: "https://open.spotify.com/track/6QtS6xIrqAV5xWOnDHbdOH", duration: "3:59" },
];

const discography = [
  { title: "Light of Love", type: "Latest Release • Single", url: "https://open.spotify.com/album/5ne2TCU7o1RCpxxxidTciH" },
  { title: "A Thousand Echoes", type: "2025 • Single", url: "https://open.spotify.com/album/4hevE1Mgb12G0qQBxY5l8h" },
  { title: "Bondage No More", type: "2025 • Single", url: "https://open.spotify.com/album/0BsWLXcCDsA4qRG6FdcxK8" },
  { title: "Chasing Sunlight", type: "2025 • Single", url: "https://open.spotify.com/album/1e9gZUvLE7SxG7PXtkS0nU" },
  { title: "Come Back to Me", type: "2025 • Single", url: "https://open.spotify.com/album/50hdOs9crKsrQLAFyfZLNC" },
  { title: "Echo of My Heart", type: "2025 • Single", url: "https://open.spotify.com/album/4zh2dgenZZbS9qk2dnCKzH" },
  { title: "Eternal Love", type: "2025 • Single", url: "https://open.spotify.com/album/265SpQSRgxyVOIvlEu4kWP" },
  { title: "Face the Music of Pain", type: "2025 • Single", url: "https://open.spotify.com/album/3nR6iQA6g9pLbiSVPF8qdr" },
  { title: "Forever in Your Love", type: "2025 • Single", url: "https://open.spotify.com/album/0j1FH56GHGbbR89iN3uuwV" },
  { title: "I Was Waiting for You", type: "2025 • Single", url: "https://open.spotify.com/album/1onE19u4zQ9kmKbYI0yqDm" },
];

const Artist = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Artist</p>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Bhuvanaai</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bhuvanaai is the artistic identity of Dr. Bhuvan Jakkula — a visionary creator 
                who blends human emotion with artificial intelligence to produce music that 
                transcends traditional boundaries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With 50 songs released under the Bhuvanaai Music label, the artist explores 
                cinematic pop, orchestral fusion, and emotionally-driven compositions that 
                tell stories through sound.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The creative vision is to push the limits of what music can be when human 
                artistry is amplified by technology — creating soundscapes for the future 
                of cinema and storytelling.
              </p>
              <div className="flex gap-4">
                <Button asChild className="glow-neon gap-2">
                  <a href={SPOTIFY_ARTIST_URL} target="_blank" rel="noopener noreferrer">
                    <Music size={16} /> Listen on Spotify
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
                <img
                  src={artistImg}
                  alt="Bhuvanaai - AI Music Artist"
                  className="relative w-80 h-80 object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Spotify Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-3xl font-display font-bold mb-8">Listen Now</h2>
            <div className="card-cinematic p-4 max-w-2xl">
              <iframe
                src="https://open.spotify.com/embed/artist/6FAynluV2cSNgytAi6TZhW?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </motion.div>

          {/* Popular Tracks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-3xl font-display font-bold mb-8">Popular Tracks</h2>
            <div className="space-y-2 max-w-2xl">
              {popularTracks.map((track, i) => (
                <a
                  key={track.title}
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground w-6 text-right">{i + 1}</span>
                    <span className="font-display font-medium text-foreground group-hover:text-primary transition-colors">
                      {track.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{track.duration}</span>
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Discography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-3xl font-display font-bold mb-8">Discography</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {discography.map((release) => (
                <a
                  key={release.title}
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-cinematic p-4 hover:border-primary/50 transition-all group"
                >
                  <div className="aspect-square rounded-md bg-secondary/50 flex items-center justify-center mb-3">
                    <Music size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                    {release.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-1">{release.type}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Artist;
