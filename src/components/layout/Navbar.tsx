import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogIn, Globe, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage, LANGUAGES } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { language, setLanguage, t, currentLangOption } = useLanguage();

  const navLinks = [
    { to: "/", label: t("nav.home", "Home") },
    { to: "/software", label: t("nav.software", "AI Software") },
    { to: "/music", label: t("nav.music", "Music") },
    { to: "/books", label: t("nav.books", "Books") },
    { to: "/artist", label: t("nav.artist", "Artist") },
    { to: "/film-licensing", label: t("nav.licensing", "Film & Media") },
    { to: "/partnerships", label: t("nav.partnerships", "Partnerships") },
    { to: "/contact", label: t("nav.contact", "Contact") },
  ];

  const handleGlobalShare = async () => {
    const shareData = {
      title: "Apollo's AI Music & Film Production | Dr. Bhuvan Jakkula",
      text: "Explore 190+ cinematic AI-human original songs by Dr. Bhuvan Jakkula (Apollo's AI Music & Bhuvanaai).",
      url: window.location.origin,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback
      }
    }
    await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
    toast.success("Website link copied! Share Apollo's AI Music with the world.");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 bg-background/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(245,158,11,0.12)]">
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-400 via-pink-500 to-cyan-400" />
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-300 via-amber-500 to-pink-500 flex items-center justify-center text-background font-display font-extrabold text-lg shadow-[0_0_20px_rgba(245,158,11,0.5)] group-hover:scale-105 transition-transform">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-display font-bold tracking-wider text-gradient-gold">
              APOLLO'S AI
            </span>
            <span className="text-[10px] tracking-[0.28em] text-amber-300/80 uppercase font-medium">
              Music • AI Software • Books
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wide transition-colors duration-300 hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Global Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-primary">
                <Globe size={15} className="text-primary" />
                <span className="text-xs font-medium uppercase">{currentLangOption.code}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44 bg-card border-border">
              {LANGUAGES.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center justify-between cursor-pointer ${
                    language === lang.code ? "text-primary font-semibold" : ""
                  }`}
                >
                  <span>
                    {lang.flag} {lang.nativeName}
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase">{lang.code}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleGlobalShare}
            title="Share Website Globally"
            className="text-muted-foreground hover:text-primary"
          >
            <Share2 size={16} />
          </Button>

          {user ? (
            <Button asChild size="sm" variant="outline" className="gap-2">
              <Link to="/dashboard">
                <User size={14} /> {t("nav.dashboard", "Dashboard")}
              </Link>
            </Button>
          ) : (
            <Button asChild size="sm" className="gap-2 glow-neon">
              <Link to="/login">
                <LogIn size={14} /> {t("nav.signin", "Sign In")}
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 px-2">
                <Globe size={16} className="text-primary" />
                <span className="text-xs uppercase">{currentLangOption.code}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-card border-border">
              {LANGUAGES.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? "text-primary font-semibold" : ""}
                >
                  {lang.flag} {lang.nativeName}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-wide py-2 transition-colors ${
                    location.pathname === link.to
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleGlobalShare();
                }}
                className="flex items-center gap-2 text-sm tracking-wide py-2 text-muted-foreground hover:text-primary text-left"
              >
                <Share2 size={15} /> Share Apollo's AI Music
              </button>
              {user ? (
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-wide py-2 text-primary font-medium"
                >
                  {t("nav.dashboard", "Dashboard")}
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-wide py-2 text-primary font-medium"
                >
                  {t("nav.signin", "Sign In")}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
