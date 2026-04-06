import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const WHATSAPP_NUMBER = "5511924287118";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Asas pelo Mundo. ✈️");

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
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
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para Viajar?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-8">
            Comece a sua aventura aqui! Vamos planejar sua viagem, Clique no botão abaixo e entraremos em contato.
          </p>
          <Button
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-heading font-semibold rounded-full py-6 px-10 text-lg transition-all hover:scale-[1.02] inline-flex items-center gap-3"
          >
            <MessageCircle size={24} />
            Falar pelo WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
