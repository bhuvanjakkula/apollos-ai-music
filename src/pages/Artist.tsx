import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import artistImg from "@/assets/artist-bhuvanaai.png";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";

const Artist = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Artist</p>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Bhuvanaai</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bhuvanaai is the artistic identity of Dr. Bhuvan Jakkula — a visionary creator 
                who blends human emotion with artificial intelligence to produce music that 
                transcends traditional boundaries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With 50 songs released under the Bhuvanaai Music label, the artist explores 
                cinematic pop, orchestral fusion, and emotionally-driven compositions that 
                tell stories through sound.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The creative vision is to push the limits of what music can be when human 
                artistry is amplified by technology — creating soundscapes for the future 
                of cinema and storytelling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
                <img
                  src={artistImg}
                  alt="Bhuvanaai - AI Music Artist"
                  className="relative w-80 h-80 object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Releases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-3xl font-display font-bold mb-8">Selected Releases</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Neural Symphony", image: album3 },
                { title: "Aurora Dreams", image: album4 },
                { title: "Celestial Echoes", image: album3 },
                { title: "Digital Soul", image: album4 },
              ].map((release) => (
                <div key={release.title} className="group cursor-pointer">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3">
                    <img
                      src={release.image}
                      alt={release.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground">{release.title}</h3>
                  <p className="text-xs text-muted-foreground">Bhuvanaai Music</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Artist;
