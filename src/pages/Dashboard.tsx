import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Music, Heart, Download, Settings, LogOut } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { Tables } from "@/integrations/supabase/types";

type Profile = Tables<"profiles">;
type PurchasedMusic = Tables<"purchased_music">;
type SavedTrack = Tables<"saved_tracks">;

const Dashboard = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [purchases, setPurchases] = useState<PurchasedMusic[]>([]);
  const [savedTracks, setSavedTracks] = useState<SavedTrack[]>([]);
  const [displayName, setDisplayName] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchPurchases();
      fetchSavedTracks();
    }
  }, [user]);

  const fetchProfile = async () => {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", user!.id)
      .single();
    if (data) {
      setProfile(data);
      setDisplayName(data.display_name || "");
    }
  };

  const fetchPurchases = async () => {
    const { data } = await supabase
      .from("purchased_music")
      .select("*")
      .eq("user_id", user!.id)
      .order("purchase_date", { ascending: false });
    if (data) setPurchases(data);
  };

  const fetchSavedTracks = async () => {
    const { data } = await supabase
      .from("saved_tracks")
      .select("*")
      .eq("user_id", user!.id)
      .order("saved_at", { ascending: false });
    if (data) setSavedTracks(data);
  };

  const updateProfile = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: displayName })
      .eq("user_id", user.id);
    setSaving(false);
    if (error) toast.error("Failed to update profile");
    else toast.success("Profile updated!");
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
    toast.success("Signed out successfully");
  };

  if (authLoading || !user) return null;

  return (
    <Layout>
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Welcome, {profile?.display_name || user.email}
                </h1>
                <p className="text-muted-foreground mt-1">Manage your music, downloads, and profile</p>
              </div>
              <Button variant="outline" onClick={handleSignOut} className="gap-2">
                <LogOut size={16} /> Sign Out
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="purchases" className="space-y-8">
              <TabsList className="bg-secondary border border-border">
                <TabsTrigger value="purchases" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Download size={16} /> Purchased
                </TabsTrigger>
                <TabsTrigger value="saved" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Heart size={16} /> Saved
                </TabsTrigger>
                <TabsTrigger value="settings" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Settings size={16} /> Settings
                </TabsTrigger>
              </TabsList>

              {/* Purchased Music */}
              <TabsContent value="purchases">
                <div className="card-cinematic p-6">
                  <h2 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Music size={20} className="text-primary" /> Purchased Music
                  </h2>
                  {purchases.length === 0 ? (
                    <div className="text-center py-12">
                      <Music size={48} className="text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No purchases yet</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Browse our <a href="/music" className="text-primary hover:underline">music catalog</a> to find tracks you love
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {purchases.map((purchase) => (
                        <div
                          key={purchase.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border"
                        >
                          <div>
                            <p className="font-medium text-foreground">{purchase.track_title}</p>
                            <p className="text-sm text-muted-foreground">
                              {purchase.artist_name} {purchase.album_name && `• ${purchase.album_name}`}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">
                              {new Date(purchase.purchase_date).toLocaleDateString()}
                            </span>
                            {purchase.download_url && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={purchase.download_url} download>
                                  <Download size={14} className="mr-1" /> Download
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Saved Tracks */}
              <TabsContent value="saved">
                <div className="card-cinematic p-6">
                  <h2 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Heart size={20} className="text-primary" /> Saved Tracks
                  </h2>
                  {savedTracks.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart size={48} className="text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No saved tracks yet</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Save tracks from our <a href="/music" className="text-primary hover:underline">catalog</a> to find them here
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {savedTracks.map((track) => (
                        <div
                          key={track.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border"
                        >
                          <div>
                            <p className="font-medium text-foreground">{track.track_title}</p>
                            <p className="text-sm text-muted-foreground">
                              {track.artist_name} {track.album_name && `• ${track.album_name}`}
                            </p>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            Saved {new Date(track.saved_at).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Profile Settings */}
              <TabsContent value="settings">
                <div className="card-cinematic p-6 max-w-lg">
                  <h2 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                    <User size={20} className="text-primary" /> Profile Settings
                  </h2>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input value={user.email || ""} disabled className="opacity-60" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input
                        id="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Your display name"
                      />
                    </div>
                    <Button onClick={updateProfile} disabled={saving} className="glow-neon">
                      {saving ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
