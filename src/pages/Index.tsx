import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Music, Film, Sparkles, ArrowRight, Mail, ExternalLink, Globe, Share2, Cpu, BookOpen, Github } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePlayer } from "@/contexts/PlayerContext";
import { supabase } from "@/integrations/supabase/client";
import { SOFTWARE_PROJECTS, PUBLISHED_BOOKS, AUTHOR_LINKS } from "@/data/portfolioData";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const featuredReleases = [
  { id: 14, title: "Kiss Me Tonight", label: "Apollo's AI Music", genre: "Cinematic Pop", image: album1, spotifyUrl: "https://open.spotify.com/track/5wbQJIgoYp6WRM1xVqJzsh", spotifyEmbedId: "5wbQJIgoYp6WRM1xVqJzsh" },
  { id: 1, title: "Forever in Your Love", label: "Bhuvanaai Music", genre: "Cinematic Pop", image: album3, spotifyUrl: "https://open.spotify.com/track/6W4HPydyZmd5Hzmo4XNcGy", spotifyEmbedId: "6W4HPydyZmd5Hzmo4XNcGy" },
  { id: 2, title: "Oh My Divine", label: "Bhuvanaai Music", genre: "Emotional", image: album4, spotifyUrl: "https://open.spotify.com/track/4mSyvWzuVSgEbM9eAuYVrK", spotifyEmbedId: "4mSyvWzuVSgEbM9eAuYVrK" },
  { id: 4, title: "A Thousand Echoes", label: "Bhuvanaai Music", genre: "Cinematic Pop", image: album2, spotifyUrl: "https://open.spotify.com/track/5RqaYjVkeaLs4KSSTBskMf", spotifyEmbedId: "5RqaYjVkeaLs4KSSTBskMf" },
];

const globalHubs = [
  { region: "North America", hubs: "Los Angeles • New York • Toronto", focus: "Feature Films, Theatrical Trailers & Streaming Originals" },
  { region: "Europe & UK", hubs: "London • Paris • Berlin", focus: "Luxury Brand Campaigns, Indie Cinema & Orchestral Sync" },
  { region: "India & South Asia", hubs: "Mumbai • Hyderabad • Chennai", focus: "Pan-India Cinema, Tollywood/Bollywood Crossover & OTT" },
  { region: "Asia-Pacific & MENA", hubs: "Tokyo • Seoul • Dubai", focus: "Interactive Gaming, Anime/Sci-Fi Soundscapes & Global Events" },
];

const Index = () => {
  const { t } = useLanguage();
  const { playTrack } = usePlayer();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [submittingNewsletter, setSubmittingNewsletter] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setSubmittingNewsletter(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: "Global Newsletter Subscriber",
      email: newsletterEmail.trim(),
      subject: "Global Newsletter Subscription",
      message: `Subscribed to Apollo's AI Music Global Updates (${newsletterEmail.trim()})`,
      inquiry_type: "newsletter",
    });
    setSubmittingNewsletter(false);

    if (error) {
      toast.error("Subscription failed. Please try again.");
    } else {
      toast.success("Welcome to the Apollo's AI Music global community!");
      setNewsletterEmail("");
    }
  };

  const handleShareTrack = async (title: string, label: string) => {
    const shareUrl = `${window.location.origin}/music?track=${encodeURIComponent(title)}`;
    const text = `Listen to "${title}" by ${label} (Dr. Bhuvan Jakkula) on Apollo's AI Music!`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl });
        return;
      } catch {
        // Fallback
      }
    }
    await navigator.clipboard.writeText(`${text} ${shareUrl}`);
    toast.success(`Link to "${title}" copied to clipboard!`);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
        {/* Vibrant Golden, Magenta & Cyan Ambient Orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-amber-500/25 blur-[130px] animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full bg-pink-500/25 blur-[130px] animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-cyan-400/20 blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full gold-pill text-xs tracking-[0.25em] uppercase text-amber-300 font-semibold mb-6"
            >
              <Globe size={14} className="text-amber-400" />
              <span>{t("hero.badge", "Human Creativity × Artificial Intelligence")}</span>
            </motion.div>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.95] mb-6 drop-shadow-[0_8px_30px_rgba(245,158,11,0.3)]"
            >
              <span className="text-gradient-gold">{t("hero.title1", "Apollo's AI")}</span>
              <br />
              <span className="text-gradient-neon">{t("hero.title2", "Music")}</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-amber-100/85 max-w-2xl mx-auto mb-10 font-light"
            >
              {t("hero.subtitle", "Cinematic Music for Films, Stories, and the Future of Sound.")}
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild size="lg" className="glow-neon">
                <Link to="/software">
                  <Cpu size={18} className="mr-2" />
                  31+ AI Software Projects
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-amber-400/60 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25 hover:text-amber-100">
                <Link to="/music">
                  <Play size={18} className="mr-2 text-amber-400" />
                  {t("hero.cta.explore", "Explore 190+ Tracks")}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cyan-400/50 bg-cyan-500/15 text-cyan-200 hover:bg-cyan-500/25">
                <Link to="/books">
                  <BookOpen size={18} className="mr-2 text-cyan-400" />
                  10+ Published Books
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THREE DISTINCT SEGMENTS: 1. SOFTWARE, 2. MUSIC, 3. BOOKS */}
      <section className="py-24 relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm tracking-[0.35em] uppercase text-amber-400 font-semibold mb-3">
              Dr. Bhuvan Jakkula — Three Global Pillars
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">
              <span className="text-gradient-gold">Software</span> •{" "}
              <span className="text-gradient-neon">Music</span> •{" "}
              <span className="text-cyan-400">Books</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Explore three distinct worlds of innovation — Enterprise AI Software Platforms, 190+ Original Cinematic Songs, and International Published Books — each with dedicated portals and live links.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* SEGMENT 1: ENTERPRISE AI SOFTWARE PROJECTS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-cinematic p-8 flex flex-col justify-between border-amber-400/50 bg-gradient-to-br from-amber-500/15 via-background/90 to-pink-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-background shadow-[0_0_25px_rgba(245,158,11,0.5)]">
                    <Cpu size={28} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/40">
                    Pillar 01 • 31+ Platforms
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gradient-gold mb-3">
                  1. AI Software Projects
                </h3>
                <p className="text-sm text-amber-100/80 leading-relaxed mb-6">
                  Production-grade Enterprise AI operating systems built by Dr. Bhuvan Jakkula — spanning Autonomous Revenue AI (<strong>RevNexus</strong>), Post-Quantum Security (<strong>C2C Rescue</strong>, <strong>PQC Assurance</strong>, <strong>NullMesh</strong>), Healthcare AI (<strong>CuraHealth OS</strong>, <strong>MedRecover AI</strong>, <strong>ClaimOS</strong>), and Institutional FinTech (<strong>AI Finance OS</strong>, <strong>AtlasPay</strong>, <strong>LedgerTrace</strong>, <strong>RiskPulse</strong>).
                </p>

                {/* Quick Direct Software Links */}
                <div className="space-y-2 mb-8">
                  <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                    Direct Live Software Links:
                  </p>
                  {[
                    { name: "RevNexus AI (Revenue Engine)", url: "https://rev-nexus-pi.vercel.app" },
                    { name: "CuraHealth OS (Clinical AI)", url: "https://cura-health-os.vercel.app" },
                    { name: "AI Finance OS (FinTech)", url: "https://ai-finance-os-drab.vercel.app" },
                    { name: "AtlasPay (Global Payments)", url: "https://atlas-pay-flax.vercel.app" },
                    { name: "NullMesh Defense (Cyber AI)", url: "https://nullmesh-defense99.vercel.app" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-secondary/70 hover:bg-amber-500/20 border border-amber-400/25 text-xs text-foreground hover:text-amber-300 transition-all"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ExternalLink size={13} className="text-amber-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-amber-400/25">
                <Button asChild className="w-full glow-neon gap-2">
                  <Link to="/software">
                    <Cpu size={16} /> Open Full Software Hub (31+ Apps) <ArrowRight size={15} />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-amber-400/40 text-amber-200 hover:bg-amber-500/20 gap-2">
                  <a href={AUTHOR_LINKS.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub (@bhuvanjakkula) <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* SEGMENT 2: APOLLO'S AI MUSIC & BHUVANAAI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-cinematic p-8 flex flex-col justify-between border-pink-400/50 bg-gradient-to-br from-pink-500/15 via-background/90 to-purple-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-[0_0_25px_rgba(236,72,153,0.5)]">
                    <Music size={28} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-500/20 text-pink-300 border border-pink-400/40">
                    Pillar 02 • 190+ Songs
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gradient-neon mb-3">
                  2. AI Music &amp; Film Studio
                </h3>
                <p className="text-sm text-pink-100/80 leading-relaxed mb-6">
                  Next-generation global music production studio releasing <strong>190+ original songs</strong> across two international labels — <strong>Apollo's AI Music (140 songs)</strong> and <strong>Bhuvanaai Music (50 songs)</strong>. Crafted for feature films, trailers, OTT series, and global streaming across 180+ countries.
                </p>

                {/* Quick Direct Music Links */}
                <div className="space-y-2 mb-8">
                  <p className="text-xs uppercase tracking-wider text-pink-300 font-semibold mb-2">
                    Direct Streaming &amp; Licensing Links:
                  </p>
                  {[
                    { name: "Spotify — Apollo's AI Music (140 Songs)", url: AUTHOR_LINKS.spotifyApollos },
                    { name: "Spotify — Bhuvanaai Artist Profile (50 Songs)", url: AUTHOR_LINKS.spotifyBhuvanaai },
                    { name: "Kiss Me Tonight — Featured Single", url: "https://open.spotify.com/track/5wbQJIgoYp6WRM1xVqJzsh" },
                    { name: "Forever in Your Love — Cinematic Pop", url: "https://open.spotify.com/track/6W4HPydyZmd5Hzmo4XNcGy" },
                    { name: "Oh My Divine — Emotional Score", url: "https://open.spotify.com/track/4mSyvWzuVSgEbM9eAuYVrK" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-secondary/70 hover:bg-pink-500/20 border border-pink-400/25 text-xs text-foreground hover:text-pink-300 transition-all"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ExternalLink size={13} className="text-pink-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-pink-400/25">
                <Button asChild className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold hover:opacity-95 gap-2">
                  <Link to="/music">
                    <Play size={16} /> Open Full Music Catalog (190+ Songs) <ArrowRight size={15} />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-pink-400/40 text-pink-200 hover:bg-pink-500/20 gap-2">
                  <Link to="/film-licensing">
                    <Film size={16} /> Film &amp; Media Sync Licensing <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* SEGMENT 3: PUBLISHED BOOKS & LITERATURE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-cinematic p-8 flex flex-col justify-between border-cyan-400/50 bg-gradient-to-br from-cyan-500/15 via-background/90 to-emerald-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-600 flex items-center justify-center text-background shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                    <BookOpen size={28} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                    Pillar 03 • 10+ Books
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-cyan-300 mb-3">
                  3. Published Books
                </h3>
                <p className="text-sm text-cyan-100/80 leading-relaxed mb-6">
                  Multidisciplinary books by <strong>Dr. Bhuvan Jakkula</strong> published globally on Amazon — bridging AI &amp; Global Defense (<em>AGI and Global Security</em>), Quantitative Finance (<em>When the Screen Turns Against You</em>), Music Romance (<em>Where Our Hearts Become Music</em>), and Espionage Thrillers (<em>The Meridian Protocol</em>).
                </p>

                {/* Quick Direct Book Links */}
                <div className="space-y-2 mb-8">
                  <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold mb-2">
                    Featured Books &amp; Author Links:
                  </p>
                  {[
                    { name: "Where Our Hearts Become Music (AI & Music Novel)", url: AUTHOR_LINKS.amazon },
                    { name: "AGI and Global Security (AI & Defense)", url: AUTHOR_LINKS.amazon },
                    { name: "Architecture Choice in Intelligence Analysis", url: AUTHOR_LINKS.amazon },
                    { name: "When the Screen Turns Against You (Finance)", url: AUTHOR_LINKS.amazon },
                    { name: "The Meridian Protocol (Espionage Thriller)", url: AUTHOR_LINKS.amazon },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-secondary/70 hover:bg-cyan-500/20 border border-cyan-400/25 text-xs text-foreground hover:text-cyan-300 transition-all"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ExternalLink size={13} className="text-cyan-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-cyan-400/25">
                <Button asChild className="w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-background font-bold hover:opacity-95 gap-2">
                  <Link to="/books">
                    <BookOpen size={16} /> Open Full Books Library (10+ Titles) <ArrowRight size={15} />
                  </Link>
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/20 gap-1.5 text-xs">
                    <a href={AUTHOR_LINKS.amazon} target="_blank" rel="noopener noreferrer">
                      Amazon Store <ExternalLink size={12} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/20 gap-1.5 text-xs">
                    <a href={AUTHOR_LINKS.blog} target="_blank" rel="noopener noreferrer">
                      Author Blog <ExternalLink size={12} />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Releases */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">
              {t("featured.badge", "Global Releases")}
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              {t("featured.title", "Featured Music")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredReleases.map((release, i) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group card-cinematic p-3"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => playTrack(release)}
                      title="Play in Global Mini-Player"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center glow-neon hover:scale-105 transition-transform"
                    >
                      <Play size={22} className="text-primary-foreground" />
                    </button>
                    <button
                      onClick={() => handleShareTrack(release.title, release.label)}
                      title="Share Track"
                      className="w-10 h-10 rounded-full border border-foreground/40 bg-background/60 flex items-center justify-center text-foreground hover:border-primary"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{release.title}</h3>
                    <p className="text-sm text-muted-foreground">{release.label}</p>
                  </div>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary p-1"
                    title="Open on Spotify"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/music">
                {t("featured.viewAll", "View Full 190+ Catalog")} <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Spotify Featured Player */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3 text-center">Now Playing Worldwide</p>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-8 text-center">Kiss Me Tonight</h2>
            <div className="card-cinematic p-4">
              <iframe
                src="https://open.spotify.com/embed/track/5wbQJIgoYp6WRM1xVqJzsh?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Studio */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">
                {t("studio.badge", "The Global Studio")}
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                {t("studio.title1", "Where AI Meets")}
                <br />
                <span className="text-gradient-neon">{t("studio.title2", "Human Imagination")}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "studio.desc",
                  "Apollo's AI Music is a next-generation music production studio founded by Dr. Bhuvan Jakkula. We explore the creative frontier between artificial intelligence and human imagination, producing cinematic pop music, orchestral soundscapes, and film-ready compositions."
                )}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/15 to-transparent border border-amber-400/30">
                  <p className="text-3xl font-display font-extrabold text-gradient-gold">190+</p>
                  <p className="text-xs text-amber-200/80">{t("stats.songs", "Original Songs")}</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/15 to-transparent border border-pink-400/30">
                  <p className="text-3xl font-display font-extrabold text-pink-400">19+</p>
                  <p className="text-xs text-pink-200/80">AI Software Platforms</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/15 to-transparent border border-cyan-400/30">
                  <p className="text-3xl font-display font-extrabold text-cyan-400">180+</p>
                  <p className="text-xs text-cyan-200/80">{t("stats.countries", "Countries Reached")}</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/15 to-transparent border border-purple-400/30">
                  <p className="text-3xl font-display font-extrabold text-purple-400">10+</p>
                  <p className="text-xs text-purple-200/80">Published Books</p>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">Learn More <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card-cinematic p-8 space-y-6">
                {[
                  { icon: Music, title: "Cinematic Pop & Global Anthems", desc: "Emotionally powerful pop compositions streamed across continents" },
                  { icon: Sparkles, title: "AI × Human Collaboration", desc: "Visionary songwriting by Dr. Bhuvan Jakkula amplified by next-gen AI" },
                  { icon: Film, title: "Worldwide Film & OTT Scoring", desc: "One-stop cleared music for movies, trailers, games & global media" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Sync & Cinema Hubs */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Worldwide Reach</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Built for Global Cinema & Creators
            </h2>
            <p className="text-muted-foreground">
              From Hollywood trailers and European indie cinema to Indian pan-world blockbusters and Tokyo gaming studios, our 190+ song catalog is ready for instant global sync licensing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {globalHubs.map((hub, i) => (
              <motion.div
                key={hub.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-cinematic p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                    <Globe size={14} />
                    <span>{hub.region}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{hub.hubs}</h3>
                  <p className="text-sm text-muted-foreground">{hub.focus}</p>
                </div>
                <Link
                  to="/film-licensing"
                  className="mt-6 text-xs text-primary hover:underline inline-flex items-center gap-1"
                >
                  Request Regional License <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise AI Software Projects & Published Books */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">
                Dr. Bhuvan Jakkula — Global Innovation Ecosystem
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Enterprise AI Software &amp; <span className="text-gradient-neon">Books</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                Explore 19+ production AI software platforms (FinTech, Revenue AI, Clinical Healthcare, Post-Quantum Security) and 10+ published books by Dr. Bhuvan Jakkula.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="glow-neon gap-2">
                <Link to="/innovations">
                  <Cpu size={16} /> View All 19+ Software Projects
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href={AUTHOR_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Featured Software Projects Grid */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
              <Cpu size={20} className="text-primary" /> Featured Software Platforms
            </h3>
            <Link to="/innovations" className="text-xs text-primary hover:underline flex items-center gap-1">
              See all {SOFTWARE_PROJECTS.length} platforms <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {SOFTWARE_PROJECTS.slice(0, 6).map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card-cinematic p-6 flex flex-col justify-between hover:border-primary/60 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {proj.category}
                    </span>
                    {proj.badge && (
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-primary/40 text-primary">
                        {proj.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display font-bold text-lg text-foreground mb-1">{proj.name}</h4>
                  <p className="text-xs text-primary/90 font-medium mb-2">{proj.tagline}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-border/50">
                  {proj.liveUrl && (
                    <Button asChild size="sm" className="glow-neon flex-1 gap-1.5 text-xs">
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={13} /> Live App
                      </a>
                    </Button>
                  )}
                  <Button asChild size="sm" variant="outline" className={`${proj.liveUrl ? "" : "flex-1"} gap-1.5 text-xs`}>
                    <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={13} /> Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Published Books Row */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
              <BookOpen size={20} className="text-primary" /> Published Books by Dr. Bhuvan Jakkula
            </h3>
            <a
              href={AUTHOR_LINKS.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              Amazon Author Store <ExternalLink size={12} />
            </a>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {PUBLISHED_BOOKS.slice(0, 4).map((book, i) => (
              <motion.a
                key={book.id}
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-cinematic p-5 flex flex-col justify-between hover:border-primary/60 transition-all group"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-primary font-semibold block mb-2">
                    {book.genre}
                  </span>
                  <h4 className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors mb-1">
                    {book.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{book.subtitle}</p>
                </div>
                <span className="text-xs text-primary font-medium inline-flex items-center gap-1 mt-2">
                  Read on Amazon <ExternalLink size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">
              {t("streaming.badge", "Available Worldwide")}
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              {t("streaming.title", "Stream Our Music Globally")}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb"
                target="_blank"
                rel="noopener noreferrer"
                className="card-cinematic px-8 py-4 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 flex items-center gap-2"
              >
                <Music size={18} />
                <span className="font-display font-medium">Spotify — Apollo's AI</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="https://open.spotify.com/artist/6FAynluV2cSNgytAi6TZhW"
                target="_blank"
                rel="noopener noreferrer"
                className="card-cinematic px-8 py-4 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 flex items-center gap-2"
              >
                <Music size={18} />
                <span className="font-display font-medium">Spotify — Bhuvanaai</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="https://music.apple.com/us/search?term=Bhuvanaai"
                target="_blank"
                rel="noopener noreferrer"
                className="card-cinematic px-8 py-4 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 flex items-center gap-2"
              >
                <span className="font-display font-medium">Apple Music</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="https://www.youtube.com/results?search_query=Bhuvanaai+Apollo%27s+AI+Music"
                target="_blank"
                rel="noopener noreferrer"
                className="card-cinematic px-8 py-4 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 flex items-center gap-2"
              >
                <span className="font-display font-medium">YouTube Music</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-cinematic p-12 md:p-16 text-center max-w-3xl mx-auto"
          >
            <Mail size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              {t("newsletter.title", "Join Our Global Listener & Filmmaker Community")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                "newsletter.desc",
                "Get exclusive updates on new worldwide releases, sync licensing catalogs, film projects, and partnership opportunities."
              )}
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t("newsletter.placeholder", "Enter your email address")}
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="glow-neon" disabled={submittingNewsletter}>
                {submittingNewsletter ? "..." : t("newsletter.button", "Subscribe")}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
