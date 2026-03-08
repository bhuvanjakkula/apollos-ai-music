import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Trash2, Eye, EyeOff, ArrowLeft, Inbox } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiry_type: string | null;
  is_read: boolean | null;
  created_at: string;
}

const AdminContacts = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) fetchSubmissions();
  }, [user]);

  const fetchSubmissions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error("Failed to load submissions");
    } else {
      setSubmissions(data || []);
    }
  };

  const markAsRead = async (id: string, currentStatus: boolean | null) => {
    const { error } = await supabase
      .from("contact_submissions")
      .update({ is_read: !currentStatus })
      .eq("id", id);
    if (error) {
      toast.error("Failed to update");
    } else {
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, is_read: !currentStatus } : s))
      );
      if (selected?.id === id) {
        setSelected({ ...selected, is_read: !currentStatus });
      }
    }
  };

  const deleteSubmission = async (id: string) => {
    const { error } = await supabase
      .from("contact_submissions")
      .delete()
      .eq("id", id);
    if (error) {
      toast.error("Failed to delete");
    } else {
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selected?.id === id) setSelected(null);
      toast.success("Submission deleted");
    }
  };

  if (authLoading || !user) return null;

  const unreadCount = submissions.filter((s) => !s.is_read).length;

  return (
    <Layout>
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-2">
              <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
                <ArrowLeft size={16} className="mr-1" /> Dashboard
              </Button>
            </div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Contact Submissions
                </h1>
                <p className="text-muted-foreground mt-1">
                  {submissions.length} total • {unreadCount} unread
                </p>
              </div>
              <Button variant="outline" onClick={fetchSubmissions} disabled={loading}>
                {loading ? "Loading..." : "Refresh"}
              </Button>
            </div>

            {submissions.length === 0 && !loading ? (
              <div className="card-cinematic p-16 text-center">
                <Inbox size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">No contact submissions yet</p>
                <p className="text-sm text-muted-foreground mt-1">
                  When someone submits the contact form, their message will appear here.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {/* List */}
                <div className="md:col-span-1 space-y-2 max-h-[70vh] overflow-y-auto pr-2">
                  {submissions.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setSelected(sub);
                        if (!sub.is_read) markAsRead(sub.id, sub.is_read);
                      }}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selected?.id === sub.id
                          ? "border-primary bg-primary/5"
                          : "border-border bg-secondary/30 hover:border-muted-foreground"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            {!sub.is_read && (
                              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                            )}
                            <p className={`font-display font-semibold text-sm truncate ${!sub.is_read ? "text-foreground" : "text-muted-foreground"}`}>
                              {sub.name}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground truncate mt-1">{sub.subject}</p>
                          <p className="text-[11px] text-muted-foreground mt-1">
                            {new Date(sub.created_at).toLocaleDateString()} • {new Date(sub.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Detail */}
                <div className="md:col-span-2">
                  {selected ? (
                    <div className="card-cinematic p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className="text-xl font-display font-bold text-foreground">{selected.subject}</h2>
                          <p className="text-sm text-muted-foreground mt-1">
                            From <span className="text-foreground font-medium">{selected.name}</span>
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => markAsRead(selected.id, selected.is_read)}
                            title={selected.is_read ? "Mark as unread" : "Mark as read"}
                          >
                            {selected.is_read ? <EyeOff size={14} /> : <Eye size={14} />}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteSubmission(selected.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
                          <Mail size={16} className="text-primary shrink-0" />
                          <a
                            href={`mailto:${selected.email}`}
                            className="text-sm text-primary hover:underline"
                          >
                            {selected.email}
                          </a>
                        </div>

                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Received: {new Date(selected.created_at).toLocaleString()}</span>
                          {selected.inquiry_type && <span>Type: {selected.inquiry_type}</span>}
                        </div>

                        <div className="mt-6 p-6 rounded-lg bg-secondary/30 border border-border">
                          <p className="text-foreground leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                        </div>

                        <div className="mt-6">
                          <Button asChild className="glow-neon gap-2">
                            <a href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}>
                              <Mail size={16} /> Reply via Email
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="card-cinematic p-16 text-center">
                      <Mail size={48} className="text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Select a submission to view details</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminContacts;
