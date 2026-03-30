import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-primary-foreground">
            ✈ Asas Pelo Mundo
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="hidden md:block">
          <Button className="bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold rounded-full px-6">
            Solicite seu Orçamento
          </Button>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-lg"
          >
            <nav className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contato" onClick={() => setIsOpen(false)}>
                <Button className="bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold rounded-full w-full mt-2">
                  Solicite seu Orçamento
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
