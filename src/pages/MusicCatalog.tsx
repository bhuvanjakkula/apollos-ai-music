import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ExternalLink, Search, Music, Share2, Heart, Film } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePlayer } from "@/contexts/PlayerContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";

const SPOTIFY_ARTIST_BHUVANAAI = "https://open.spotify.com/artist/6FAynluV2cSNgytAi6TZhW";
const SPOTIFY_ARTIST_APOLLOS_AI = "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb";

export interface Track {
  id: number;
  title: string;
  label: string;
  genre: string;
  image: string;
  spotifyUrl: string;
  spotifyEmbedId: string;
  duration: string;
  year: string;
}

export const allTracks: Track[] = [
  // Bhuvanaai Music tracks
  { id: 1, title: "Forever in Your Love", label: "Bhuvanaai Music", genre: "Cinematic Pop", image: album3, spotifyUrl: "https://open.spotify.com/track/6W4HPydyZmd5Hzmo4XNcGy", spotifyEmbedId: "6W4HPydyZmd5Hzmo4XNcGy", duration: "3:46", year: "2025" },
  { id: 2, title: "Oh My Divine", label: "Bhuvanaai Music", genre: "Emotional", image: album4, spotifyUrl: "https://open.spotify.com/track/4mSyvWzuVSgEbM9eAuYVrK", spotifyEmbedId: "4mSyvWzuVSgEbM9eAuYVrK", duration: "3:59", year: "2025" },
  { id: 3, title: "Oceans Deep", label: "Bhuvanaai Music", genre: "Orchestral", image: album3, spotifyUrl: "https://open.spotify.com/track/0aPJO33b73TsEO9QU42cc2", spotifyEmbedId: "0aPJO33b73TsEO9QU42cc2", duration: "3:59", year: "2025" },
  { id: 4, title: "A Thousand Echoes", label: "Bhuvanaai Music", genre: "Cinematic Pop", image: album4, spotifyUrl: "https://open.spotify.com/track/5RqaYjVkeaLs4KSSTBskMf", spotifyEmbedId: "5RqaYjVkeaLs4KSSTBskMf", duration: "3:59", year: "2025" },
  { id: 5, title: "We Move as One", label: "Bhuvanaai Music", genre: "Emotional", image: album3, spotifyUrl: "https://open.spotify.com/track/6QtS6xIrqAV5xWOnDHbdOH", spotifyEmbedId: "6QtS6xIrqAV5xWOnDHbdOH", duration: "3:59", year: "2025" },
  { id: 6, title: "Light of Love", label: "Bhuvanaai Music", genre: "Cinematic Pop", image: album4, spotifyUrl: "https://open.spotify.com/album/5ne2TCU7o1RCpxxxidTciH", spotifyEmbedId: "5ne2TCU7o1RCpxxxidTciH", duration: "3:59", year: "2025" },
  { id: 7, title: "Bondage No More", label: "Bhuvanaai Music", genre: "AI Fusion", image: album3, spotifyUrl: "https://open.spotify.com/album/0BsWLXcCDsA4qRG6FdcxK8", spotifyEmbedId: "0BsWLXcCDsA4qRG6FdcxK8", duration: "3:59", year: "2025" },
  { id: 8, title: "Chasing Sunlight", label: "Bhuvanaai Music", genre: "Cinematic Pop", image: album4, spotifyUrl: "https://open.spotify.com/album/1e9gZUvLE7SxG7PXtkS0nU", spotifyEmbedId: "1e9gZUvLE7SxG7PXtkS0nU", duration: "3:59", year: "2025" },
  { id: 9, title: "Come Back to Me", label: "Bhuvanaai Music", genre: "Emotional", image: album3, spotifyUrl: "https://open.spotify.com/album/50hdOs9crKsrQLAFyfZLNC", spotifyEmbedId: "50hdOs9crKsrQLAFyfZLNC", duration: "3:59", year: "2025" },
  { id: 10, title: "Echo of My Heart", label: "Bhuvanaai Music", genre: "Orchestral", image: album4, spotifyUrl: "https://open.spotify.com/album/4zh2dgenZZbS9qk2dnCKzH", spotifyEmbedId: "4zh2dgenZZbS9qk2dnCKzH", duration: "3:59", year: "2025" },
  { id: 11, title: "Eternal Love", label: "Bhuvanaai Music", genre: "Cinematic Pop", image: album3, spotifyUrl: "https://open.spotify.com/album/265SpQSRgxyVOIvlEu4kWP", spotifyEmbedId: "265SpQSRgxyVOIvlEu4kWP", duration: "3:59", year: "2025" },
  { id: 12, title: "Face the Music of Pain", label: "Bhuvanaai Music", genre: "Film Score", image: album4, spotifyUrl: "https://open.spotify.com/album/3nR6iQA6g9pLbiSVPF8qdr", spotifyEmbedId: "3nR6iQA6g9pLbiSVPF8qdr", duration: "3:59", year: "2025" },
  { id: 13, title: "I Was Waiting for You", label: "Bhuvanaai Music", genre: "Emotional", image: album3, spotifyUrl: "https://open.spotify.com/album/1onE19u4zQ9kmKbYI0yqDm", spotifyEmbedId: "1onE19u4zQ9kmKbYI0yqDm", duration: "3:59", year: "2025" },

  // Apollo's AI Music tracks
  { id: 14, title: "Kiss Me Tonight", label: "Apollo's AI Music", genre: "Cinematic Pop", image: album1, spotifyUrl: "https://open.spotify.com/track/5wbQJIgoYp6WRM1xVqJzsh", spotifyEmbedId: "5wbQJIgoYp6WRM1xVqJzsh", duration: "3:59", year: "2025" },
  { id: 15, title: "Digital Horizons", label: "Apollo's AI Music", genre: "AI Fusion", image: album2, spotifyUrl: "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb", spotifyEmbedId: "5wbQJIgoYp6WRM1xVqJzsh", duration: "3:45", year: "2025" },
  { id: 16, title: "Stellar Frequencies", label: "Apollo's AI Music", genre: "Film Score", image: album1, spotifyUrl: "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb", spotifyEmbedId: "5wbQJIgoYp6WRM1xVqJzsh", duration: "4:12", year: "2025" },
  { id: 17, title: "Midnight Algorithm", label: "Apollo's AI Music", genre: "Orchestral", image: album2, spotifyUrl: "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb", spotifyEmbedId: "5wbQJIgoYp6WRM1xVqJzsh", duration: "3:33", year: "2025" },
  { id: 18, title: "Orchestral Cosmos", label: "Apollo's AI Music", genre: "Orchestral", image: album1, spotifyUrl: "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb", spotifyEmbedId: "5wbQJIgoYp6WRM1xVqJzsh", duration: "4:20", year: "2025" },
  { id: 19, title: "Celestial Waves", label: "Apollo's AI Music", genre: "Cinematic Pop", image: album2, spotifyUrl: "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb", spotifyEmbedId: "5wbQJIgoYp6WRM1xVqJzsh", duration: "3:50", year: "2025" },
  { id: 20, title: "Neural Pathways", label: "Apollo's AI Music", genre: "AI Fusion", image: album1, spotifyUrl: "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb", spotifyEmbedId: "5wbQJIgoYp6WRM1xVqJzsh", duration: "3:28", year: "2025" },
];

const filters = ["All", "Apollo's AI Music", "Bhuvanaai Music"];
const genres = ["All Genres", "Cinematic Pop", "Orchestral", "Film Score", "AI Fusion", "Emotional"];

const MusicCatalog = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { playTrack } = usePlayer();
  const { user } = useAuth();

  const [activeFilter, setActiveFilter] = useState("All");
  const [activeGenre, setActiveGenre] = useState("All Genres");
  const [search, setSearch] = useState(searchParams.get("track") || "");
  const [savedTitles, setSavedTitles] = useState<string[]>([]);

  useEffect(() => {
    const qTrack = searchParams.get("track");
    if (qTrack) {
      setSearch(qTrack);
      const found = allTracks.find(
        (tr) => tr.title.toLowerCase() === qTrack.toLowerCase()
      );
      if (found) {
        playTrack(found);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (user) {
      supabase
        .from("saved_tracks")
        .select("track_title")
        .eq("user_id", user.id)
        .then(({ data }) => {
          if (data) setSavedTitles(data.map((d) => d.track_title));
        });
    }
  }, [user]);

  const handleSaveTrack = async (track: Track) => {
    if (!user) {
      toast.info("Sign in to save tracks to your personal library!");
      navigate("/login");
      return;
    }

    if (savedTitles.includes(track.title)) {
      toast.info(`"${track.title}" is already in your Saved Tracks.`);
      return;
    }

    const { error } = await supabase.from("saved_tracks").insert({
      user_id: user.id,
      track_title: track.title,
      artist_name: track.label,
      album_name: track.genre,
    });

    if (error) {
      toast.error("Could not save track. Please try again.");
    } else {
      setSavedTitles((prev) => [...prev, track.title]);
      toast.success(`Saved "${track.title}" to your Dashboard!`);
    }
  };

  const handleShareTrack = async (track: Track) => {
    const shareUrl = `${window.location.origin}/music?track=${encodeURIComponent(track.title)}`;
    const shareText = `Listen to "${track.title}" (${track.genre}) by ${track.label} — Apollo's AI Music!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${track.title} | Apollo's AI Music`,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    toast.success(`Copied direct link to "${track.title}"!`);
  };

  const filtered = allTracks.filter((track) => {
    const matchLabel = activeFilter === "All" || track.label === activeFilter;
    const matchGenre = activeGenre === "All Genres" || track.genre === activeGenre;
    const matchSearch =
      track.title.toLowerCase().includes(search.toLowerCase()) ||
      track.genre.toLowerCase().includes(search.toLowerCase()) ||
      track.label.toLowerCase().includes(search.toLowerCase());
    return matchLabel && matchGenre && matchSearch;
  });

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">
              {t("catalog.badge", "Global Sync & Streaming Catalog")}
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              {t("catalog.title", "Music Collection")}
            </h1>
            <p className="text-muted-foreground mb-6">
              {t("catalog.subtitle", "190+ original songs across two labels")}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={SPOTIFY_ARTIST_APOLLOS_AI}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(141,73%,42%)] text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Music size={16} /> Apollo's AI on Spotify
              </a>
              <a
                href={SPOTIFY_ARTIST_BHUVANAAI}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(141,73%,42%)] text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Music size={16} /> Bhuvanaai on Spotify
              </a>
            </div>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground glow-neon"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGenre(g)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all border ${
                  activeGenre === g
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:border-muted-foreground"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative mb-12 max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("catalog.search", "Search tracks...")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filtered.map((track, i) => {
              const isSaved = savedTitles.includes(track.title);
              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group card-cinematic p-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => playTrack(track)}
                          title={t("catalog.play", "Play Preview")}
                          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center glow-neon hover:scale-105 transition-transform"
                        >
                          <Play size={18} className="text-primary-foreground" />
                        </button>
                        <button
                          onClick={() => handleSaveTrack(track)}
                          title={t("catalog.save", "Save Track")}
                          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                            isSaved
                              ? "border-primary bg-primary/20 text-primary"
                              : "border-foreground/30 text-foreground hover:border-primary"
                          }`}
                        >
                          <Heart size={15} fill={isSaved ? "currentColor" : "none"} />
                        </button>
                        <button
                          onClick={() => handleShareTrack(track)}
                          title={t("catalog.share", "Share Track")}
                          className="w-9 h-9 rounded-full border border-foreground/30 flex items-center justify-center hover:border-primary transition-colors text-foreground"
                        >
                          <Share2 size={15} />
                        </button>
                        <a
                          href={track.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open on Spotify"
                          className="w-9 h-9 rounded-full border border-foreground/30 flex items-center justify-center hover:border-primary transition-colors text-foreground"
                        >
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>
                    <h3 className="font-display font-semibold text-sm text-foreground truncate">
                      {track.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {track.label} • {track.duration}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[10px] text-primary font-medium">{track.genre}</span>
                    <button
                      onClick={() =>
                        navigate(`/film-licensing?track=${encodeURIComponent(track.title)}`)
                      }
                      className="text-[11px] text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                    >
                      <Film size={12} /> {t("catalog.license", "License")}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Full Artist Embeds */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 space-y-8"
          >
            <h2 className="text-3xl font-display font-bold text-foreground">Listen on Spotify</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-cinematic p-4">
                <p className="text-sm text-muted-foreground mb-3 font-display">Bhuvanaai</p>
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
              <div className="card-cinematic p-4">
                <p className="text-sm text-muted-foreground mb-3 font-display">Apollo's AI</p>
                <iframe
                  src="https://open.spotify.com/embed/artist/5RjIU1skmvuGIRpDE6h8Vb?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MusicCatalog;
