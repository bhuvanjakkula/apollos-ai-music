import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import artistImg from "@/assets/artist-bhuvanaai.png";

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">The Vision</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
              About Apollo's AI Music
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                Apollo's AI Music is a next-generation music production studio founded by 
                Dr. Bhuvan Jakkula, exploring the creative frontier between artificial 
                intelligence and human imagination.
              </p>
              <p>
                The studio produces cinematic pop music, orchestral soundscapes, and 
                film-ready compositions designed for movies, trailers, and immersive storytelling.
              </p>
              <p>
                With more than 190 original songs released across two labels — 
                <span className="text-foreground font-medium"> Apollo's AI Music (140 songs)</span> and 
                <span className="text-foreground font-medium"> Bhuvanaai Music (50 songs)</span> — 
                the project demonstrates how AI can collaborate with human creativity to 
                produce emotionally powerful music.
              </p>
              <p>
                Our mission is to push the boundaries of what's possible when technology 
                and artistry converge, creating soundscapes that move audiences and 
                define the future of cinematic music.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
                <img
                  src={artistImg}
                  alt="Apollo's AI Music - AI-Human Collaboration"
                  className="relative w-80 h-80 object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Innovation",
                desc: "Pioneering the intersection of AI and music production to create sounds never heard before.",
              },
              {
                title: "Emotion",
                desc: "Every composition is designed to evoke deep emotional responses and tell compelling stories.",
              },
              {
                title: "Excellence",
                desc: "Film-quality production standards ensuring every track is ready for the biggest screens.",
              },
            ].map((value) => (
              <div key={value.title} className="card-cinematic p-8">
                <h3 className="text-xl font-display font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
