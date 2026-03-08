import { Link } from "react-router-dom";
import { Youtube, Instagram, Twitter, Music } from "lucide-react";

const Footer = () => {
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
              Human Creativity × Artificial Intelligence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-semibold tracking-wider text-foreground uppercase mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/music", label: "Music" },
                { to: "/film-licensing", label: "Film Licensing" },
                { to: "/partnerships", label: "Partnerships" },
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-display font-semibold tracking-wider text-foreground uppercase mb-4">
              Contact
            </h4>
            <a
              href="mailto:bjtmusic12@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              bjtmusic12@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-display font-semibold tracking-wider text-foreground uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Music, href: "https://open.spotify.com/artist/6FAynluV2cSNgytAi6TZhW", label: "Spotify (Bhuvanaai)" },
                { icon: Music, href: "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb", label: "Spotify (Apollo's AI)" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "X (Twitter)" },
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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Apollo's AI Music & Film Production. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
