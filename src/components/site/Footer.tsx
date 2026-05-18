import { MapPin, Phone, Mail, Instagram, Clock, MessageCircle } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/contact";
import logo from "@/assets/moncorvo-logo.png";

const quickLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#processo", label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

const areas = [
  "Direito Trabalhista",
  "Direito Previdenciário",
  "Direito do Consumidor",
  "Direito Bancário",
];

export function Footer() {
  const mapsUrl =
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Avenida ACM, Edf. Cidadela Center II, Itaigara, Salvador, BA") +
    "&output=embed";

  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center">
              <img
                src={logo}
                alt="Moncorvo Advogados Associados"
                className="h-14 sm:h-16 w-auto object-contain select-none drop-shadow-[0_2px_12px_rgba(200,162,93,0.15)]"
                draggable={false}
              />
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Advocacia estratégica, humanizada e especializada em Salvador / BA. Atuação ética e
              técnica em defesa dos seus direitos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gold text-gold-foreground px-5 py-3 rounded-full text-sm font-semibold hover:bg-gold/90 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Navegação</p>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Atuação</p>
            <ul className="space-y-3">
              {areas.map((a) => (
                <li key={a} className="text-sm text-primary-foreground/70">
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Contato</p>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  {CONTACT.addressLine1}
                  <br />
                  {CONTACT.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <a href={`tel:+55${CONTACT.phone.replace(/\D/g, "")}`} className="hover:text-gold transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Instagram className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {CONTACT.instagram}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16 rounded-xl overflow-hidden border border-primary-foreground/10">
          <iframe
            src={mapsUrl}
            title="Localização do escritório Moncorvo Advogados Associados"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Moncorvo Advogados Associados. Todos os direitos reservados.</p>
          <p>Salvador / Bahia — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
