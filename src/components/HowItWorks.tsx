import { CalendarCheck, CarFront, MessageSquareText } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const STEPS = [
  {
    icon: MessageSquareText,
    title: "Envie seu trajeto",
    text: "Informe origem, destino, data e horário pelo formulário ou direto no WhatsApp.",
  },
  {
    icon: CalendarCheck,
    title: "Receba o orçamento",
    text: "Respondo rapidamente com o valor e confirmo o agendamento com você.",
  },
  {
    icon: CarFront,
    title: "Embarque tranquilo",
    text: "No horário combinado, estou à sua espera. É só entrar e aproveitar a viagem.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Como funciona"
          title={
            <>
              Agendar é simples.{" "}
              <span className="text-gold-gradient">Em 3 passos.</span>
            </>
          }
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden
            className="gold-line absolute top-8 right-[16%] left-[16%] hidden h-px opacity-50 md:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={0.12 * i}>
              <li className="relative flex flex-col items-center text-center">
                <span className="relative grid h-16 w-16 place-items-center rounded-full border border-gold/50 bg-ink text-gold shadow-[0_0_40px_-8px_rgba(201,162,74,0.6)]">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-gold text-xs font-bold text-ink">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs leading-relaxed text-mist">
                  {s.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
