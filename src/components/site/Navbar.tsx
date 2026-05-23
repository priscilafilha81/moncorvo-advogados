import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import logo from "@/assets/moncorvo-logo.png";

const links = [
  { href: "#sobre", label: "O Escritório" },
  { href: "#areas", label: "Especialidades" },
  { href: "#equipe", label: "Equipe" },
  { href: "#consulte-processo", label: "Consulte seu Processo" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-500 ease-out ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(91,0,8,0.12)] border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 flex items-center justify-between transition-[height] duration-500 ${
          scrolled ? "h-16 lg:h-[68px]" : "h-20 lg:h-24"
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center group shrink-0 focus-visible:outline-none"
          aria-label="Moncorvo Advogados Associados"
        >
          <img
            src={logo}
            srcSet={`${logo} 1x, ${logo} 2x`}
            alt="Moncorvo Advogados Associados"
            width={1364}
            height={236}
            decoding="async"
            fetchPriority="high"
            className={`w-auto object-contain select-none transition-all duration-500 group-hover:scale-[1.015] ${
              scrolled
                ? "h-7 sm:h-8 lg:h-9"
                : "h-8 sm:h-9 lg:h-10"
            }`}
            style={{ imageRendering: "auto" }}
            draggable={false}
          />
          <span className="sr-only">Moncorvo Advogados Associados</span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-8 mx-auto"
          aria-label="Navegação principal"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-300 relative group inline-flex items-center ${
                scrolled
                  ? "text-ink/75 hover:text-primary"
                  : "text-primary-foreground/85 hover:text-gold"
              }`}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-px">
                {l.label}
              </span>
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-px bg-gold transition-all duration-500 ease-out" />
              <span className="absolute inset-x-0 -inset-y-2 rounded-lg bg-current opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elev-2 ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
                : "bg-gold text-gold-foreground hover:bg-gold/90 shadow-soft"
            }`}
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            Falar com Especialista
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden relative w-10 h-10 inline-flex items-center justify-center rounded-full transition-colors duration-300 ${
            scrolled
              ? "text-primary hover:bg-primary/5"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <Menu
            className={`w-5 h-5 absolute transition-all duration-300 ${
              open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            className={`w-5 h-5 absolute transition-all duration-300 ${
              open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — premium slide-down */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[calc(100dvh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-xl border-t border-border/60 overflow-y-auto overscroll-contain nav-mobile-scroll max-h-[calc(100dvh-4rem)] [-webkit-overflow-scrolling:touch]">
          <nav
            className="px-6 py-6 sm:py-8 flex flex-col gap-1 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            aria-label="Navegação móvel"
          >
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                className={`group flex items-center justify-between text-[15px] font-medium text-ink/85 hover:text-primary py-3.5 border-b border-border/40 transition-all duration-500 ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                }`}
              >
                <span>{l.label}</span>
                <span className="text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + links.length * 40}ms` : "0ms" }}
              className={`mt-6 inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-5 py-3.5 rounded-full text-sm font-semibold shadow-premium transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Falar com Especialista
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
