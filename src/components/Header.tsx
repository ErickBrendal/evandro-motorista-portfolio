import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS, whatsappLink } from "../lib/site";
import { WhatsAppIcon } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = NAV_ITEMS.map(i => document.querySelector(i.href)).filter(
      (el): el is Element => el !== null
    );
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/5 bg-ink/85 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label="Evandro Jorge — início"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 font-display text-sm font-bold text-gold transition group-hover:bg-gold group-hover:text-ink">
            EJ
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-bone">
              Evandro Jorge
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.28em] text-gold uppercase">
              Motorista Executivo
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    active === item.href
                      ? "text-gold"
                      : "text-bone/70 hover:text-bone"
                  }`}
                >
                  {item.label}
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-gold"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold tracking-wider text-ink uppercase transition hover:bg-gold-light sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-bone lg:hidden"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu móvel"
            className="h-[calc(100dvh-4.25rem)] overflow-y-auto lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="container-x flex flex-col gap-1 pt-8 pb-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/5 py-4 font-display text-2xl text-bone"
                  >
                    {item.label}
                    <span className="text-sm text-gold">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-8">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
