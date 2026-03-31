import { motion } from "framer-motion";
import { Search, MessageCircle, Award, Heart } from "lucide-react";

const steps = [
  { icon: Search, title: "Descubra seu destino", desc: "Conte-nos para onde deseja ir e suas preferências." },
  { icon: MessageCircle, title: "Consultoria personalizada", desc: "Nossa equipe cria o plano perfeito para você." },
  { icon: Award, title: "Uso otimizado de milhas", desc: "Maximizamos suas milhas para maior economia." },
  { icon: Heart, title: "Viva sua viagem!", desc: "Aproveite cada momento com total tranquilidade." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Como Funciona
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Em quatro passos simples, transformamos sua vontade de viajar em realidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5 relative">
                <step.icon className="text-accent" size={28} />
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center font-heading text-xs font-bold text-gold-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">{step.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
