import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalMiniPlayer from "./GlobalMiniPlayer";

const PAGE_TITLES: Record<string, string> = {
  "/": "Apollo's AI Music & Film Production | Dr. Bhuvan Jakkula (190+ Original Songs)",
  "/about": "About Apollo's AI Music Studio | Dr. Bhuvan Jakkula",
  "/music": "Global Music Catalog (190+ Songs) | Apollo's AI Music & Bhuvanaai",
  "/artist": "Bhuvanaai — AI-Human Music Artist | Dr. Bhuvan Jakkula",
  "/film-licensing": "Global Film, TV & Game Music Sync Licensing | Apollo's AI Music",
  "/partnerships": "Global Industry & Studio Partnerships | Apollo's AI Music",
  "/innovations": "Enterprise AI Software Projects & Published Books | Dr. Bhuvan Jakkula",
  "/software": "19+ Enterprise AI Software Platforms | Dr. Bhuvan Jakkula",
  "/books": "10+ Published Books on Amazon | Dr. Bhuvan Jakkula",
  "/contact": "Contact Apollo's AI Music | Worldwide Sync & Production Inquiries",
  "/dashboard": "Creator & Listener Dashboard | Apollo's AI Music",
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title =
      PAGE_TITLES[pathname] ||
      "Apollo's AI Music & Film Production | Dr. Bhuvan Jakkula";
    document.title = title;
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-[73px] pb-20">{children}</main>
      <Footer />
      <GlobalMiniPlayer />
    </div>
  );
};

export default Layout;
