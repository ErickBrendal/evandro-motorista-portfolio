import { ArrowUp, Instagram, Phone } from "lucide-react";
import { NAV_ITEMS, SITE, whatsappLink } from "../lib/site";
import { SERVICES } from "./Services";
import { WhatsAppIcon } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 bg-ink pt-20 pb-10">
      <div className="container-x">
        {/* Closing CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-graphite to-ink p-8 text-center sm:p-14">
          <div className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-gold/20 blur-[90px]" />
          <p className="relative font-display text-3xl leading-tight font-bold sm:text-5xl">
            Sua próxima viagem começa{" "}
            <span className="text-gold-gradient">com uma mensagem.</span>
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
            <a href={`tel:${SITE.phoneE164}`} className="btn-ghost">
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-bold">{SITE.name}</p>
            <p className="mt-1 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
              {SITE.role}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              Motorista particular em São Paulo com padrão Uber Black.
              Segurança, conforto e pontualidade em cada trajeto, 24 horas por
              dia.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-bone transition hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-bone transition hover:border-gold hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Rodapé">
            <p className="text-xs font-semibold tracking-[0.25em] text-bone uppercase">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map(i => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    className="text-mist transition hover:text-gold"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-bone uppercase">
              Serviços
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map(s => (
                <li key={s.title}>
                  <a
                    href={whatsappLink(s.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mist transition hover:text-gold"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-mist sm:flex-row">
          <p>
            © {year} {SITE.name} · {SITE.role}. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href={SITE.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold hover:underline"
            >
              @erickalmeida
            </a>
          </p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 transition hover:text-gold"
          >
            Voltar ao topo <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
