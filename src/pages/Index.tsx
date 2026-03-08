import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Music, Film, Sparkles, ArrowRight, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
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
  { title: "Digital Horizons", label: "Apollo's AI Music", image: album1 },
  { title: "Orchestral Cosmos", label: "Apollo's AI Music", image: album2 },
  { title: "Neural Symphony", label: "Bhuvanaai Music", image: album3 },
  { title: "Aurora Dreams", label: "Bhuvanaai Music", image: album4 },
];

const Index = () => {
  return (
    <Layout>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-sm tracking-[0.4em] uppercase text-primary mb-6"
            >
              Human Creativity × Artificial Intelligence
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6"
            >
              Apollo's AI
              <br />
              <span className="text-gradient-neon">Music</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Cinematic Music for Films, Stories, and the Future of Sound.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild size="lg" className="glow-neon">
                <Link to="/music">
                  <Play size={18} className="mr-2" />
                  Explore Music
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/film-licensing">
                  <Film size={18} className="mr-2" />
                  License for Film
                </Link>
              </Button>
            </motion.div>
          </motion.div>
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
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Latest Releases</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Featured Music</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredReleases.map((release, i) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play size={40} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-foreground">{release.title}</h3>
                <p className="text-sm text-muted-foreground">{release.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/music">
                View Full Catalog <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
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
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">The Studio</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Where AI Meets<br />
                <span className="text-gradient-neon">Human Imagination</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Apollo's AI Music is a next-generation music production studio founded by 
                Dr. Bhuvan Jakkula. We explore the creative frontier between artificial intelligence 
                and human imagination, producing cinematic pop music, orchestral soundscapes, 
                and film-ready compositions.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">190+</p>
                  <p className="text-sm text-muted-foreground">Songs Released</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">2</p>
                  <p className="text-sm text-muted-foreground">Music Labels</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">∞</p>
                  <p className="text-sm text-muted-foreground">Creative Vision</p>
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
                  { icon: Music, title: "Cinematic Pop", desc: "Emotionally powerful pop compositions" },
                  { icon: Sparkles, title: "AI Collaboration", desc: "Human creativity enhanced by AI" },
                  { icon: Film, title: "Film Scoring", desc: "Music for movies, trailers & media" },
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

      {/* Streaming */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Listen Now</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Stream Our Music
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["Spotify", "Apple Music", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="card-cinematic px-8 py-4 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <span className="font-display font-medium">{platform}</span>
                </a>
              ))}
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
              Stay in the Loop
            </h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive updates on new releases, film projects, and partnership opportunities.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="glow-neon">Subscribe</Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
