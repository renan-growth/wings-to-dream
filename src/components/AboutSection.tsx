import { motion } from "framer-motion";
import { Globe, Plane, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Globe, title: "Destinos Globais", desc: "Roteiros para os melhores destinos ao redor do mundo." },
  { icon: Plane, title: "Atendimento Personalizado", desc: "Cada viagem é planejada de acordo com seu perfil e desejos." },
  { icon: CheckCircle2, title: "Confiança & Segurança", desc: "Sua viagem dos sonhos com suporte completo do início ao fim." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28" style={{ backgroundColor: 'hsl(215, 28%, 13%)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Sobre a Asas Pelo Mundo
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg">
            Agência especializada em transformar sonhos de viagem em experiências reais com soluções estratégicas, oferencendo as melhores oportunidades. Fundada por Fran Carrillo, especialista em milhas aéreas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3">{feature.title}</h3>
              <p className="font-body text-primary-foreground/60">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
