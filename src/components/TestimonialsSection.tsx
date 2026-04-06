import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Carla M.",
    text: "A Fran transformou nossas milhas em uma viagem dos sonhos para Paris! Atendimento impecável e tudo saiu perfeito.",
    location: "São Paulo, SP",
  },
  {
    name: "Ricardo S.",
    text: "Nunca imaginei que poderia viajar de executiva usando milhas. A consultoria da Asas Pelo Mundo mudou minha forma de viajar.",
    location: "Campinas, SP",
  },
  {
    name: "Ana Paula L.",
    text: "Planejamento completo, do voo ao hotel. A equipe foi atenciosa e nos deu dicas incríveis. Super recomendo!",
    location: "Rio de Janeiro, RJ",
  },
  {
    name: "Marcos T.",
    text: "Excelente atendimento! A Fran conseguiu economizar muito nas nossas passagens usando estratégias com milhas. Voltaremos a viajar com a Asas!",
    location: "Belo Horizonte, MG",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[hsl(215,28%,13%)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-primary-foreground/90 mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-heading text-sm font-semibold text-accent">{t.name}</p>
                  <p className="font-body text-xs text-primary-foreground/50">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
