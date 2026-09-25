import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { SITE } from "../lib/site";
import { Reveal, SectionHeading } from "./ui";

const TESTIMONIALS = [
  {
    text: "Serviço impecável, cordial e pontual. Sem dúvidas recomendo!",
    author: "Cliente executivo",
  },
  {
    text: "Nosso traslado foi perfeito. Evandro é atencioso e profissional.",
    author: "Cliente VIP",
  },
  {
    text: "Melhor motorista que já conheci. Muito atencioso e seguro.",
    author: "Cliente premium",
  },
  {
    text: "Conforto e segurança garantidos. Voltaria a usar com certeza!",
    author: "Cliente corporativo",
  },
];

export default function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((delta: number) => {
    setState(([i]) => [
      (i + delta + TESTIMONIALS.length) % TESTIMONIALS.length,
      delta,
    ]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(1), 6000);
    return () => window.clearInterval(t);
  }, [go, paused, index]);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-coal py-24 sm:py-32"
    >
      <div className="gold-line absolute inset-x-0 top-0 h-px opacity-40" />
      <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Depoimentos"
          title={
            <>
              Quem viaja comigo{" "}
              <span className="text-gold-gradient">recomenda</span>
            </>
          }
        />

        <Reveal
          className="mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="card relative min-h-[20rem] overflow-hidden px-6 py-12 text-center sm:px-14"
            aria-roledescription="carrossel"
            aria-label="Depoimentos de clientes"
          >
            <Quote className="mx-auto h-10 w-10 text-gold/40" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1);
                  else if (info.offset.x > 60) go(-1);
                }}
                className="cursor-grab active:cursor-grabbing"
                aria-live="polite"
              >
                <div
                  className="mt-6 flex justify-center gap-1"
                  aria-label="5 de 5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl leading-snug text-bone italic sm:text-3xl">
                  “{current.text}”
                </blockquote>
                <figcaption className="mt-8 text-sm font-semibold tracking-[0.2em] text-gold uppercase">
                  {current.author}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-bone transition hover:border-gold hover:text-gold"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-gold"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ver depoimento ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-bone transition hover:border-gold hover:text-gold"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-mist">
            Veja mais do meu dia a dia no Instagram{" "}
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold underline-offset-4 hover:underline"
            >
              {SITE.instagramHandle}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
