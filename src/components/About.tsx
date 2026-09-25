import { Clock3, Handshake, ShieldCheck } from "lucide-react";
import { CountUp, STATS } from "./Hero";
import { Reveal } from "./ui";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    text: "Direção defensiva e atenta, respeitando cada regra e cada passageiro.",
  },
  {
    icon: Clock3,
    title: "Pontualidade",
    text: "Chego antes do combinado. Seu compromisso é o meu compromisso.",
  },
  {
    icon: Handshake,
    title: "Discrição",
    text: "Atendimento cordial e reservado, ideal para executivos e ocasiões especiais.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -top-5 -left-5 h-40 w-40 rounded-tl-[2rem] border-t border-l border-gold/50" />
            <div className="absolute -right-5 -bottom-5 h-40 w-40 rounded-br-[2rem] border-r border-b border-gold/50" />
            <img
              src="/evandro.webp"
              width={651}
              height={976}
              loading="lazy"
              alt="Retrato profissional de Evandro Jorge"
              className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-top grayscale-[35%] transition duration-700 hover:grayscale-0"
            />
            <div className="card absolute -bottom-8 -right-10 hidden w-64 items-center gap-4 bg-ink/80 p-5 md:flex">
              <span className="font-display text-5xl font-bold text-gold">
                <CountUp to={10} suffix="+" />
              </span>
              <span className="text-sm leading-snug text-bone/80">
                anos de experiência transportando pessoas com excelência
              </span>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold" />
              Sobre mim
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] font-bold sm:text-5xl">
              Cada cliente é um{" "}
              <span className="text-gold-gradient">convidado especial.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              Sou Evandro, motorista particular com foco em segurança, conforto
              e pontualidade. Há mais de 10 anos atendo aeroportos, shows,
              eventos e viagens executivas, sempre com discrição e
              profissionalismo.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-mist">
              Meu compromisso é que sua viagem seja não apenas segura, mas
              tranquila do começo ao fim. Trabalho no padrão Uber Black: um
              serviço premium que reflete atenção a cada detalhe.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={0.1 * i}
                className="card flex flex-col gap-4 p-5 lg:flex-row lg:items-center"
              >
                <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gold/10 text-gold">
                  <v.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-bone">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats for small screens (desktop shows them in the hero) */}
          <div className="mt-10 grid grid-cols-3 gap-4 md:hidden">
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-gold">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[11px] tracking-wider text-mist uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
