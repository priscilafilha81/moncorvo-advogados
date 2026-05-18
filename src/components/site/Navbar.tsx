import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#processo", label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3" aria-label="Moncorvo Advogados Associados">
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gold text-gold font-display text-lg">
            M
          </span>
          <span className={`font-display text-base sm:text-lg leading-tight ${scrolled ? "text-primary" : "text-primary"}`}>
            Moncorvo
            <span className="block text-[10px] tracking-[0.3em] uppercase text-gold font-sans">
              Advogados Associados
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/80 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gold transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-soft"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com Especialista
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-6 py-6 flex flex-col gap-4" aria-label="Navegação móvel">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink hover:text-primary py-2 border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com Especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
