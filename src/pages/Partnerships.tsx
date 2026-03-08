import { motion } from "framer-motion";
import { Building2, Music2, MonitorPlay, Palette, Cpu } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const partners = [
  { icon: Building2, title: "Film Production Houses", desc: "Custom scores and soundtracks for your productions" },
  { icon: Music2, title: "Music Labels", desc: "Distribution and co-production opportunities" },
  { icon: MonitorPlay, title: "Streaming Platforms", desc: "Content partnerships and exclusive releases" },
  { icon: Palette, title: "Creative Studios", desc: "Cross-disciplinary creative collaborations" },
  { icon: Cpu, title: "Technology Companies", desc: "AI music innovation and technology partnerships" },
];

const Partnerships = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Partnership inquiry submitted! We'll be in touch.");
    setForm({ name: "", email: "", company: "", type: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Collaborate</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Industry Partnerships</h1>
            <p className="text-muted-foreground text-lg">
              Partner with Apollo's AI Music to create the future of cinematic sound.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {partners.map(({ icon: Icon, title, desc }, i) => (
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 max-w-2xl"
          >
            <h2 className="text-3xl font-display font-bold mb-8">Partner with Apollo's AI Music</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <input type="text" placeholder="Company / Organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Partnership Type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea placeholder="Describe your partnership vision..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              <Button type="submit" size="lg" className="glow-neon">Submit Partnership Inquiry</Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerships;
