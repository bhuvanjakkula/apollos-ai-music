import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      inquiry_type: "general",
    });
    setLoading(false);

    if (error) {
      toast.error("Failed to send message. Please try again.");
    } else {
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Contact Us</h1>
            <p className="text-muted-foreground text-lg">
              For partnership inquiries, music licensing, or general questions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" maxLength={100} />
              <input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" maxLength={255} />
              <input type="text" placeholder="Subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" maxLength={200} />
              <textarea placeholder="Your Message" rows={6} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" maxLength={2000} />
              <Button type="submit" size="lg" className="glow-neon" disabled={loading}>
                <Send size={18} className="mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card-cinematic p-8">
                <Mail size={28} className="text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:bjtmusic12@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  bjtmusic12@gmail.com
                </a>
              </div>

              <div className="card-cinematic p-8">
                <h3 className="font-display font-semibold text-foreground mb-4">Inquiry Types</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Partnership Inquiries</li>
                  <li>• Music Licensing</li>
                  <li>• Film & Media Projects</li>
                  <li>• General Contact</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
