import { motion } from "framer-motion";
import { Film, Tv, Gamepad2, Clapperboard, MonitorPlay, Megaphone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const useCases = [
  { icon: Film, title: "Films", desc: "Original scores and soundtracks for feature films" },
  { icon: Tv, title: "Documentaries", desc: "Atmospheric compositions for storytelling" },
  { icon: Megaphone, title: "Advertisements", desc: "Impactful music for commercial campaigns" },
  { icon: Gamepad2, title: "Video Games", desc: "Immersive soundscapes for interactive media" },
  { icon: MonitorPlay, title: "Streaming Platforms", desc: "Background and theme music for shows" },
  { icon: Clapperboard, title: "Trailers", desc: "Epic, attention-grabbing compositions" },
];

const FilmLicensing = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", project: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Licensing inquiry submitted! We'll get back to you soon.");
    setForm({ name: "", email: "", company: "", project: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Licensing</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Music for Film, TV & Media
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Apollo's AI provides premium cinematic music ready for licensing across all media formats.
              Every composition is crafted for emotional impact and production excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {useCases.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-cinematic p-6"
              >
                <Icon size={28} className="text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Licensing Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 max-w-2xl"
          >
            <h2 className="text-3xl font-display font-bold mb-8">Request Licensing</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Company / Production House"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Project Type (Film, TV, Ad, etc.)"
                value={form.project}
                onChange={(e) => setForm({ ...form, project: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <Button type="submit" size="lg" className="glow-neon">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FilmLicensing;
