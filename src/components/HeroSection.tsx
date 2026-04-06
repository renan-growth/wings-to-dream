import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Avião sobrevoando ilhas tropicais"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-hero md:text-hero-lg text-primary-foreground max-w-4xl mx-auto mb-6"
        >
          Transforme Seus Sonhos em Experiências{" "}
          <span className="text-gradient">Inesquecíveis</span> pelo Mundo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans"
        >
          Aéreos, Hospedagens, Ingressos, Viagens personalizadas e Roteiros estratégicos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contato">
            <Button className="bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Planeje Sua Viagem
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center gap-8 md:gap-16"
        >
          {[
            { value: "300+ ", label: "Clientes satisfeitos" },
            { value: "2024", label: "Fundação" },
            { value: "100%", label: "Personalizado" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
              <p className="font-body text-sm text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
