import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact-bg.jpg";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="relative py-20 md:py-28 overflow-hidden">
      <img
        src={contactBg}
        alt="Destino de viagem"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para Viajar?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg">
            Comece sua aventura aqui. Preencha o formulário e entraremos em contato.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto glass rounded-2xl p-8 space-y-4"
        >
          <Input
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body"
          />
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body"
          />
          <Input
            type="tel"
            placeholder="Seu telefone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body"
          />
          <Textarea
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body resize-none"
          />
          <Button
            type="submit"
            className="w-full bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold rounded-full py-6 text-lg transition-all hover:scale-[1.02]"
          >
            Quero Viajar! ✈
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
