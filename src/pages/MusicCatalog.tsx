import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";

const allTracks = [
  { id: 1, title: "Digital Horizons", label: "Apollo's AI Music", genre: "Cinematic Pop", image: album1 },
  { id: 2, title: "Orchestral Cosmos", label: "Apollo's AI Music", genre: "Orchestral", image: album2 },
  { id: 3, title: "Neural Symphony", label: "Bhuvanaai Music", genre: "AI Fusion", image: album3 },
  { id: 4, title: "Aurora Dreams", label: "Bhuvanaai Music", genre: "Emotional", image: album4 },
  { id: 5, title: "Stellar Frequencies", label: "Apollo's AI Music", genre: "Cinematic Pop", image: album1 },
  { id: 6, title: "Midnight Algorithm", label: "Apollo's AI Music", genre: "Film Score", image: album2 },
  { id: 7, title: "Echoes of Tomorrow", label: "Bhuvanaai Music", genre: "Orchestral", image: album3 },
  { id: 8, title: "Celestial Waves", label: "Bhuvanaai Music", genre: "Cinematic Pop", image: album4 },
];

const filters = ["All", "Apollo's AI Music", "Bhuvanaai Music"];
const genres = ["All Genres", "Cinematic Pop", "Orchestral", "Film Score", "AI Fusion", "Emotional"];

const MusicCatalog = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeGenre, setActiveGenre] = useState("All Genres");
  const [search, setSearch] = useState("");

  const filtered = allTracks.filter((track) => {
    const matchLabel = activeFilter === "All" || track.label === activeFilter;
    const matchGenre = activeGenre === "All Genres" || track.genre === activeGenre;
    const matchSearch = track.title.toLowerCase().includes(search.toLowerCase());
    return matchLabel && matchGenre && matchSearch;
  });

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Catalog</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Music Collection</h1>
            <p className="text-muted-foreground mb-12">
              190+ original songs across two labels
            </p>
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
              placeholder="Search tracks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filtered.map((track, i) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center glow-neon">
                      <Play size={18} className="text-primary-foreground" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:border-primary transition-colors">
                      <ExternalLink size={16} className="text-foreground" />
                    </button>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground">{track.title}</h3>
                <p className="text-xs text-muted-foreground">{track.label}</p>
                <span className="text-[10px] text-primary">{track.genre}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MusicCatalog;
