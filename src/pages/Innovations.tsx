import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  BookOpen,
  ExternalLink,
  Github,
  Search,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Stethoscope,
  Globe,
  Code2,
  Copy,
  Check,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  SOFTWARE_PROJECTS,
  PUBLISHED_BOOKS,
  AUTHOR_LINKS,
  type SoftwareProject,
} from "@/data/portfolioData";

const SOFTWARE_CATEGORIES = [
  "All Platforms",
  "Enterprise AI & Revenue",
  "FinTech & Risk Intelligence",
  "Cybersecurity & Post-Quantum",
  "Healthcare & Clinical AI",
  "Global Media & Developer Tools",
] as const;

const BOOK_GENRES = [
  "All Books",
  "Music & Romance Fiction",
  "AI, Defense & Intelligence",
  "Finance & Risk",
  "Thriller & Literary Fiction",
] as const;

const getCategoryIcon = (category: SoftwareProject["category"]) => {
  switch (category) {
    case "Enterprise AI & Revenue":
      return Sparkles;
    case "FinTech & Risk Intelligence":
      return TrendingUp;
    case "Cybersecurity & Post-Quantum":
      return ShieldCheck;
    case "Healthcare & Clinical AI":
      return Stethoscope;
    default:
      return Globe;
  }
};

const Innovations = () => {
  const location = useLocation();
  const initialTab =
    location.pathname === "/books" || location.search.includes("tab=books")
      ? "books"
      : "software";
  const [activeTab, setActiveTab] = useState<"software" | "books">(initialTab);
  const [softwareCategory, setSoftwareCategory] = useState<string>("All Platforms");
  const [bookGenre, setBookGenre] = useState<string>("All Books");
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyAllProjects = async () => {
    const softwareText = SOFTWARE_PROJECTS.map(
      (p, idx) =>
        `${idx + 1}. ${p.name} (${p.category})\n   • URL: ${p.liveUrl || p.repoUrl}\n   • Description: ${p.description}`
    ).join("\n\n");

    const booksText = PUBLISHED_BOOKS.map(
      (b, idx) =>
        `${idx + 1}. ${b.title} — ${b.subtitle} (${b.genre})\n   • Amazon: ${b.amazonUrl}\n   • Description: ${b.description}`
    ).join("\n\n");

    const fullDirectory = `DR. BHUVAN JAKKULA — COMPLETE GLOBAL AI SOFTWARE (${SOFTWARE_PROJECTS.length} PLATFORMS) & PUBLISHED BOOKS (${PUBLISHED_BOOKS.length} TITLES)\nMain Portal: https://apollos-ai-music.vercel.app\n\n=== ENTERPRISE AI SOFTWARE PLATFORMS ===\n\n${softwareText}\n\n=== PUBLISHED BOOKS ===\n\n${booksText}`;

    await navigator.clipboard.writeText(fullDirectory);
    setCopied(true);
    toast.success("Copied all 31 Software Projects & 10 Books with URLs and descriptions!");
    setTimeout(() => setCopied(false), 3000);
  };

  useEffect(() => {
    if (location.pathname === "/books" || location.search.includes("tab=books")) {
      setActiveTab("books");
    } else if (location.pathname === "/software" || location.search.includes("tab=software")) {
      setActiveTab("software");
    }
  }, [location.pathname, location.search]);

  const filteredSoftware = SOFTWARE_PROJECTS.filter((project) => {
    const matchCategory =
      softwareCategory === "All Platforms" || project.category === softwareCategory;
    const matchSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const filteredBooks = PUBLISHED_BOOKS.filter((book) => {
    const matchGenre = bookGenre === "All Books" || book.genre === bookGenre;
    const matchSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGenre && matchSearch;
  });

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs uppercase tracking-[0.25em] text-primary mb-4">
              <Code2 size={14} />
              <span>Dr. Bhuvan Jakkula — Global Innovation Ecosystem</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Enterprise AI Software &amp;{" "}
              <span className="text-gradient-neon">Published Books</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Beyond 190+ original songs under Apollo's AI Music &amp; Bhuvanaai, Dr. Bhuvan Jakkula
              architects production-grade AI operating systems, FinTech &amp; Post-Quantum security
              platforms, Clinical Healthcare AI, and international books spanning AI security,
              quantitative finance, and cinematic fiction.
            </p>

            {/* Quick External Links */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild className="glow-neon gap-2">
                <a href={AUTHOR_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github size={17} /> GitHub (@bhuvanjakkula)
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href={AUTHOR_LINKS.amazon} target="_blank" rel="noopener noreferrer">
                  <BookOpen size={17} /> Amazon Author Store
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href={AUTHOR_LINKS.blog} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={17} /> Literary &amp; Research Blog
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={handleCopyAllProjects}
                className="gap-2 border-amber-400/50 text-amber-200 hover:bg-amber-500/20"
              >
                {copied ? <Check size={17} className="text-emerald-400" /> : <Copy size={17} className="text-amber-400" />}
                {copied ? "Copied Complete Directory!" : "Copy All 31+ Projects & URLs"}
              </Button>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            <div className="card-cinematic p-6 border-amber-400/40 bg-gradient-to-br from-amber-500/15 via-transparent to-transparent">
              <p className="text-4xl font-display font-extrabold text-gradient-gold">31+</p>
              <p className="text-xs text-amber-200/80 mt-1 font-medium">
                Enterprise AI &amp; SaaS Platforms
              </p>
            </div>
            <div className="card-cinematic p-6 border-pink-400/40 bg-gradient-to-br from-pink-500/15 via-transparent to-transparent">
              <p className="text-4xl font-display font-extrabold text-pink-400">31</p>
              <p className="text-xs text-pink-200/80 mt-1 font-medium">
                Live Global Vercel Deployments
              </p>
            </div>
            <div className="card-cinematic p-6 border-cyan-400/40 bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent">
              <p className="text-4xl font-display font-extrabold text-cyan-400">10+</p>
              <p className="text-xs text-cyan-200/80 mt-1 font-medium">
                Published Books on Amazon
              </p>
            </div>
            <div className="card-cinematic p-6 border-purple-400/40 bg-gradient-to-br from-purple-500/15 via-transparent to-transparent">
              <p className="text-4xl font-display font-extrabold text-purple-400">190+</p>
              <p className="text-xs text-purple-200/80 mt-1 font-medium">
                Original AI-Human Songs
              </p>
            </div>
          </div>

          {/* Primary Switcher: Software Projects (Main) vs Books */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-border pb-6">
            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab("software")}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm transition-all ${
                  activeTab === "software"
                    ? "bg-primary text-primary-foreground glow-neon"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                <Cpu size={18} />
                Software Projects ({SOFTWARE_PROJECTS.length})
              </button>
              <button
                onClick={() => setActiveTab("books")}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm transition-all ${
                  activeTab === "books"
                    ? "bg-primary text-primary-foreground glow-neon"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                <BookOpen size={18} />
                Published Books ({PUBLISHED_BOOKS.length})
              </button>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder={
                  activeTab === "software"
                    ? "Search software, AI, FinTech, PQC..."
                    : "Search books, thrillers, AI security..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* SOFTWARE PROJECTS SECTION */}
          {activeTab === "software" && (
            <div>
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {SOFTWARE_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSoftwareCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      softwareCategory === cat
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border text-muted-foreground hover:border-muted-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Software Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSoftware.map((proj, i) => {
                  const CategoryIcon = getCategoryIcon(proj.category);
                  return (
                    <motion.div
                      key={proj.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="card-cinematic p-6 flex flex-col justify-between hover:border-primary/60 transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                            <CategoryIcon size={12} />
                            {proj.category}
                          </span>
                          {proj.badge && (
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-primary/40 text-primary">
                              {proj.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                          {proj.name}
                        </h3>
                        <p className="text-xs font-medium text-primary/90 mb-3">
                          {proj.tagline}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                          {proj.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {proj.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                          {proj.liveUrl && (
                            <Button asChild size="sm" className="glow-neon flex-1 gap-1.5">
                              <a
                                href={proj.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink size={14} /> Launch Live App
                              </a>
                            </Button>
                          )}
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className={`${proj.liveUrl ? "" : "flex-1"} gap-1.5`}
                          >
                            <a
                              href={proj.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={14} /> GitHub Source
                            </a>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PUBLISHED BOOKS SECTION */}
          {activeTab === "books" && (
            <div>
              {/* Genre Pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {BOOK_GENRES.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setBookGenre(genre)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      bookGenre === genre
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border text-muted-foreground hover:border-muted-foreground"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>

              {/* Books Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book, i) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="card-cinematic p-6 flex flex-col justify-between hover:border-primary/60 transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          <BookOpen size={12} />
                          {book.genre}
                        </span>
                        {book.highlight && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-primary/40 text-primary">
                            {book.highlight}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {book.title}
                      </h3>
                      <p className="text-xs font-medium text-primary/90 mb-3">
                        {book.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {book.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                      <Button asChild size="sm" className="glow-neon flex-1 gap-1.5">
                        <a
                          href={book.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BookOpen size={14} /> View on Amazon
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="gap-1.5">
                        <a
                          href={AUTHOR_LINKS.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} /> Blog
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Innovations;
