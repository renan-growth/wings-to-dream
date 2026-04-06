import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[hsl(215,28%,13%)] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Asas Pelo Mundo" className="h-14 w-14 rounded-full object-cover" />
              <h3 className="font-heading text-xl font-bold text-primary-foreground">
                Asas Pelo Mundo
              </h3>
            </div>
            <p className="font-body text-primary-foreground/70 text-sm mb-4">
              Transformando sonhos em viagens inesquecíveis, com excelência, exclusividade e atenção a cada detalhe.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/voeasaspelomundo?igsh=ZXk1OTBoMHZwem5y&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1CSKGyJwkY/?mibextid=wwXIfr"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {["Sobre", "Serviços", "Como Funciona", "Depoimentos", "Contato"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <p className="font-body text-sm text-primary-foreground/60">
                  R. Professor Tibério Justo da Silva, 475, Sala 02<br />
                  Jardim Florida – São Roque/SP · CEP 18.133-000
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:1124287118" className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  (11) 2428-7118
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:atendimento@asaspelomundo.com" className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  atendimento@asaspelomundo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-body text-xs text-primary-foreground/40">
                Francine Aparecida Carrillo · CNPJ: 13.953.006/0001-25
              </p>
              <p className="font-body text-xs text-primary-foreground/40">
                Asas Pelo Mundo · Agência de Viagens · CNAE 79.11-2-00
              </p>
            </div>
            <p className="font-body text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Asas Pelo Mundo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/551124287118"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;