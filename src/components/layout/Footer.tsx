import { Link } from "react-router-dom";
import { Youtube, Instagram, Twitter, Music, Globe } from "lucide-react";
import { useLanguage, LANGUAGES } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-display font-bold tracking-wider text-foreground mb-2">
              APOLLO'S AI MUSIC
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Founded by Dr. Bhuvan Jakkula
            </p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Human Creativity × Artificial Intelligence — Global Film & Media Soundscapes.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-primary">
              <Globe size={14} />
              <span>Streaming in 180+ Countries</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-semibold tracking-wider text-foreground uppercase mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/music", label: "Music Catalog (190+)" },
                { to: "/innovations", label: "AI Software & Books (19+)" },
                { to: "/artist", label: "Artist — Bhuvanaai" },
                { to: "/film-licensing", label: "Film & Sync Licensing" },
                { to: "/partnerships", label: "Global Partnerships" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Global Hubs */}
          <div>
            <h4 className="text-sm font-display font-semibold tracking-wider text-foreground uppercase mb-4">
              Global Licensing & Contact
            </h4>
            <a
              href="mailto:bjtmusic12@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors block mb-3"
            >
              bjtmusic12@gmail.com
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Available for Hollywood, Bollywood, Tollywood, European & Global Streaming Sync Licensing.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-display font-semibold tracking-wider text-foreground uppercase mb-4">
              Listen & Follow Worldwide
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: Music,
                  href: "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb",
                  label: "Spotify (Apollo's AI)",
                },
                {
                  icon: Music,
                  href: "https://open.spotify.com/artist/6FAynluV2cSNgytAi6TZhW",
                  label: "Spotify (Bhuvanaai)",
                },
                {
                  icon: Youtube,
                  href: "https://www.youtube.com/results?search_query=Bhuvanaai+Apollo%27s+AI+Music",
                  label: "YouTube Music",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/",
                  label: "Instagram",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/intent/tweet?text=Listening%20to%20Apollo%27s%20AI%20Music%20by%20Dr.%20Bhuvan%20Jakkula",
                  label: "Share on X",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Quick Language Switcher in Footer */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                Global Editions
              </p>
              <div className="flex flex-wrap gap-1.5">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-[11px] px-2 py-0.5 rounded border transition-colors ${
                      language === lang.code
                        ? "border-primary text-primary bg-primary/10"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Apollo's AI Music & Film Production | Founded by Dr. Bhuvan Jakkula. All rights reserved worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
