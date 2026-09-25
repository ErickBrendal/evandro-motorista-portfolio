import {
  ArrowUpRight,
  Briefcase,
  Music,
  Plane,
  Route,
  Star,
} from "lucide-react";
import { whatsappLink } from "../lib/site";
import { Reveal, SectionHeading } from "./ui";

export const SERVICES = [
  {
    icon: Plane,
    title: "Traslado para aeroportos",
    text: "Guarulhos, Congonhas e demais aeroportos. Embarque e desembarque sem estresse e sem correria.",
    message: "Olá Evandro! Preciso de um traslado para o aeroporto.",
  },
  {
    icon: Briefcase,
    title: "Executivo e corporativo",
    text: "Reuniões, visitas a clientes e agendas com vários compromissos no mesmo dia.",
    message: "Olá Evandro! Gostaria de um orçamento para transporte executivo.",
  },
  {
    icon: Music,
    title: "Shows e eventos",
    text: "Shows, festas e celebrações: chegue e saia com tranquilidade, sem se preocupar com estacionamento.",
    message: "Olá Evandro! Gostaria de um orçamento para ir a um show/evento.",
  },
  {
    icon: Route,
    title: "Viagens curtas e longas",
    text: "Deslocamentos dentro de São Paulo ou para outras cidades, com a mesma qualidade.",
    message:
      "Olá Evandro! Gostaria de um orçamento para uma viagem intermunicipal.",
  },
  {
    icon: Star,
    title: "Experiência Uber Black",
    text: "Serviço premium de ponta a ponta: cordialidade, conforto e atenção a cada detalhe.",
    message: "Olá Evandro! Gostaria de um orçamento para o serviço premium.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-coal py-24 sm:py-32">
      <div className="gold-line absolute inset-x-0 top-0 h-px opacity-40" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              Transporte sob medida{" "}
              <span className="text-gold-gradient">para cada ocasião</span>
            </>
          }
          subtitle="Do voo das 5h da manhã ao jantar de negócios: você escolhe o destino, eu cuido de todo o resto."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={0.06 * i} className="h-full">
              <a
                href={whatsappLink(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="card group relative flex h-full flex-col overflow-hidden p-7 transition duration-500 hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition duration-700 group-hover:bg-gold/20" />
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-ink">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm text-mist/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-2xl font-bold text-bone">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-mist">
                  {s.text}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Solicitar orçamento
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.3} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-gold-light via-gold to-gold-deep p-7 text-ink">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase opacity-70">
                  Outro trajeto?
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight font-bold">
                  Me conte para onde você vai.
                </h3>
                <p className="mt-3 leading-relaxed text-ink/75">
                  Monto um orçamento personalizado para o seu trajeto, sem
                  compromisso.
                </p>
              </div>
              <a
                href="#orcamento"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold tracking-wide text-gold uppercase transition hover:bg-coal"
              >
                Montar orçamento
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
