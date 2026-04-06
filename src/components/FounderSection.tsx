import { motion } from "framer-motion";
import { Star } from "lucide-react";
import franPhoto from "@/assets/fran-carrillo.png";

const FounderSection = () => {
  return (
    <section id="fundadora" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent text-accent text-sm font-body mb-4">
            Sobre a Fundadora
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            Conheça a <span className="text-destructive">Fran Carrillo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={franPhoto}
                alt="Fran Carrillo - Fundadora da Asas Pelo Mundo"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <a href="https://www.instagram.com/francarrillooficial?igsh=MTZoZnMyeXJ4cnJ5Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-5 py-3 flex items-center gap-3 shadow-lg hover:scale-105 transition-transform">
              <div className="w-9 h-9 rounded-full bg-destructive/10 flex items-center justify-center">
                <Star className="text-destructive" size={18} fill="currentColor" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">Especialista em Milhas</p>
                <p className="font-body text-xs text-muted-foreground">5M+ acumuladas</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
              A mente por trás da{" "}
              <span className="text-accent">Asas Pelo Mundo</span>
            </h3>

            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Fundadora da Asas Pelo Mundo, <strong className="text-primary-foreground">Fran Carrillo</strong> é referência no universo das milhas, com mais de{" "}
              <strong className="text-accent">5 milhões de milhas acumuladas</strong> e dezenas de viagens realizadas com estratégias inteligentes.
            </p>

            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Desde 2020, se dedica a ensinar e aplicar na prática o poder das milhas, ajudando seus clientes a viajarem mais, com conforto e economia.
            </p>

            <p className="font-body text-primary-foreground/80 leading-relaxed">
              É conhecida por seu <strong className="text-accent">cuidado com o cliente</strong>, sua energia acolhedora e seu olhar estratégico — com governança, magia e amor em tudo que faz.
            </p>

            <blockquote className="border-l-4 border-accent bg-accent/10 rounded-r-xl p-5 mt-6">
              <p className="font-body italic text-primary-foreground/90 leading-relaxed">
                "Cada viagem é uma oportunidade de criar memórias inesquecíveis. Minha missão é tornar esses sonhos acessíveis através da inteligência e estrategias direcionadas para cada cliente."
              </p>
              <footer className="font-heading font-semibold text-primary-foreground mt-3 text-sm">
                — Fran Carrillo
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
