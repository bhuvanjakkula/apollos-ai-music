import { motion } from "framer-motion";
import { Film, Tv, Gamepad2, Clapperboard, MonitorPlay, Megaphone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const useCases = [
  { icon: Film, title: "Feature Films", desc: "Original scores and soundtracks for global cinema" },
  { icon: Tv, title: "Documentaries & TV", desc: "Atmospheric compositions for worldwide broadcast" },
  { icon: Megaphone, title: "Global Brand Campaigns", desc: "Impactful music for international commercial ads" },
  { icon: Gamepad2, title: "Video Games & XR", desc: "Immersive soundscapes for interactive gaming" },
  { icon: MonitorPlay, title: "Streaming Originals", desc: "Theme & sync music for Netflix, Prime, Apple TV+ & more" },
  { icon: Clapperboard, title: "Theatrical Trailers", desc: "Epic, attention-grabbing hybrid orchestral cues" },
];

const FilmLicensing = () => {
  const [searchParams] = useSearchParams();
  const preselectedTrack = searchParams.get("track") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    project: preselectedTrack ? `Sync License for Track: "${preselectedTrack}"` : "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedTrack) {
      setForm((prev) => ({
        ...prev,
        project: `Sync License Request: "${preselectedTrack}"`,
      }));
    }
  }, [preselectedTrack]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please provide your name and email address.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: `Film Licensing: ${form.project.trim() || "General Sync Inquiry"} (${form.company.trim() || "Independent"})`,
      message: `Company / Studio: ${form.company.trim() || "N/A"}\nProject / Track: ${form.project.trim() || "N/A"}\n\nDetails:\n${form.message.trim()}`,
      inquiry_type: "film_licensing",
    });
    setLoading(false);

    if (error) {
      toast.error("Could not submit inquiry. Please email bjtmusic12@gmail.com directly.");
    } else {
      toast.success("Licensing inquiry saved! Our sync team will respond shortly.");
      setForm({ name: "", email: "", company: "", project: "", message: "" });
    }
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Worldwide Sync Licensing</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Music for Film, TV & Global Media
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Apollo's AI provides 190+ one-stop cleared cinematic tracks ready for immediate global licensing across all media formats.
              Every composition is crafted by Dr. Bhuvan Jakkula for emotional impact and international production standards.
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
            <h2 className="text-3xl font-display font-bold mb-3">Request Global Sync License</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Fast-track clearance for Hollywood, European, Indian, and global streaming productions.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Company / Production House / Country"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Project Type or Track Title (e.g., Feature Film, Trailer, Ad)"
                value={form.project}
                onChange={(e) => setForm({ ...form, project: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Tell us about your project, territory (Worldwide/Regional), and timeline..."
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <Button type="submit" size="lg" className="glow-neon" disabled={loading}>
                {loading ? "Submitting Inquiry..." : "Submit Sync Licensing Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FilmLicensing;
