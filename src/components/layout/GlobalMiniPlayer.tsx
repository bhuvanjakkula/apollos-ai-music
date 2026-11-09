import { motion, AnimatePresence } from "framer-motion";
import { X, Share2, Film, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePlayer } from "@/contexts/PlayerContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const GlobalMiniPlayer = () => {
  const { activeTrack, closePlayer } = usePlayer();
  const navigate = useNavigate();

  if (!activeTrack) return null;

  const isAlbum = activeTrack.spotifyUrl.includes("/album/");
  const embedType = isAlbum ? "album" : "track";

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/music?track=${encodeURIComponent(activeTrack.title)}`;
    const shareText = `Listen to "${activeTrack.title}" by ${activeTrack.label} (Dr. Bhuvan Jakkula) on Apollo's AI Music!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${activeTrack.title} | Apollo's AI Music`,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    toast.success("Track link copied! Share it on WhatsApp, X, or Instagram.");
  };

  const handleLicense = () => {
    navigate(`/film-licensing?track=${encodeURIComponent(activeTrack.title)}`);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/30 bg-background/95 backdrop-blur-xl shadow-2xl"
      >
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  Global Player
                </span>
                <span className="text-xs text-muted-foreground">• {activeTrack.genre}</span>
              </div>
              <h4 className="font-display font-bold text-sm text-foreground">
                {activeTrack.title}{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  by {activeTrack.label}
                </span>
              </h4>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <Button size="icon" variant="ghost" onClick={handleShare} title="Share Track">
                <Share2 size={16} />
              </Button>
              <Button size="icon" variant="ghost" onClick={closePlayer} title="Close Player">
                <X size={16} />
              </Button>
            </div>
          </div>

          <div className="w-full md:max-w-md lg:max-w-lg">
            {activeTrack.spotifyEmbedId ? (
              <iframe
                src={`https://open.spotify.com/embed/${embedType}/${activeTrack.spotifyEmbedId}?utm_source=generator&theme=0`}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            ) : (
              <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-secondary/60 border border-border">
                <span className="text-xs text-muted-foreground">
                  Full stream available on Spotify
                </span>
                <a
                  href={activeTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  Open on Spotify <ExternalLink size={12} />
                </a>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={handleShare} className="gap-1.5">
              <Share2 size={14} /> Share
            </Button>
            <Button size="sm" className="gap-1.5 glow-neon" onClick={handleLicense}>
              <Film size={14} /> License Track
            </Button>
            <Button size="icon" variant="ghost" onClick={closePlayer} title="Close Player">
              <X size={18} />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GlobalMiniPlayer;
