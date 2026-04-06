import { motion } from "framer-motion";
import { Globe, PlaneTakeoff, CheckCircle2, MapPinned, BedDouble, Route } from "lucide-react";

const services = [
  { icon: Globe, title: "Cruzeiros", desc: "Viva dias inesquecíveis em alto-mar com um cruzeiro planejado especialmente para o seu perfil." },
  { icon: MapPinned, title: "Planejamento de Roteiros", desc: "Roteiros personalizados com base no seu perfil." },
  { icon: CheckCircle2, title: "Consultoria Personalizada", desc: "Atendimento dedicado para cada detalhe da sua viagem." },
  { icon: PlaneTakeoff, title: "Passagens Aéreas", desc: "Emissão inteligente buscando melhores oportunidades e promoções exclusivas.." },
  { icon: BedDouble, title: "Hospedagem", desc: "Acomodações selecionadas nas melhores localizações e de acordo com o pefil de cada cliente." },
  { icon: Route, title: "Experiências Exclusivas", desc: "​Sua viagem, do seu jeito, com experiências exclusivas e atendimento totalmente personalizado" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-primary/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-heading text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Cada destino conta uma história
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg">
            Da emissão com milhas aos roteiros mais exclusivos, oferecemos soluções completas para tornar sua viagem perfeita.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 group-hover:bg-accent/30 flex items-center justify-center mb-5 transition-colors">
                <service.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">{service.title}</h3>
              <p className="font-body text-primary-foreground/60 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
