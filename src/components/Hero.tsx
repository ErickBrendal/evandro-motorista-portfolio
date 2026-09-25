import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "../lib/site";
import { WhatsAppIcon } from "./ui";

const STATS = [
  { value: 10, suffix: "+", label: "anos ao volante" },
  { value: 500, suffix: "+", label: "clientes atendidos" },
  { value: 24, suffix: "h", label: "todos os dias" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 md:pb-32"
    >
      {/* Background: gold glows + road lines */}
      <motion.div
        aria-hidden
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[120px]" />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#c9a24a_1px,transparent_1px),linear-gradient(to_bottom,#c9a24a_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="hidden h-px w-8 bg-gold sm:block" />
            Motorista particular · SP
          </motion.span>

          <motion.h1
            className="mt-6 font-display text-[2.75rem] leading-[1.02] font-bold tracking-tight text-bone sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            Seu tempo é valioso.
            <span className="text-gold-gradient block">
              Sua viagem, impecável.
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg lg:mx-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          >
            Sou{" "}
            <strong className="font-semibold text-bone">Evandro Jorge</strong>,
            motorista particular com padrão Uber Black. Traslados para
            aeroportos, reuniões, eventos e viagens com pontualidade, segurança
            e a discrição que você merece.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
            <a href="#orcamento" className="btn-ghost w-full sm:w-auto">
              Montar orçamento
            </a>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-bone/70 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> Padrão Uber Black
            </li>
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-gold" /> Atendimento 24h
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> SP e região
            </li>
          </motion.ul>
        </div>

        {/* Portrait */}
        <motion.div
          className="relative mx-auto w-full max-w-sm"
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/40 via-gold/5 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-graphite p-2 shadow-2xl shadow-black/60">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src="/evandro.webp"
                srcSet="/evandro-360.webp 360w, /evandro.webp 651w"
                sizes="(min-width: 1024px) 384px, 90vw"
                width={651}
                height={976}
                alt="Evandro Jorge, motorista particular, de terno preto e gravata"
                className="aspect-[4/5] w-full object-cover object-top"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl font-bold text-bone">
                  Evandro Jorge
                </p>
                <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                  Motorista executivo
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -top-4 -right-3 rounded-full border border-gold/40 bg-ink/90 px-4 py-2 text-xs font-bold tracking-wider text-gold uppercase shadow-xl backdrop-blur sm:-right-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, ease }}
          >
            ★ Uber Black
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/5 bg-ink/60 backdrop-blur-md md:block">
        <div className="container-x grid grid-cols-4 items-center">
          {STATS.map(s => (
            <div key={s.label} className="border-r border-white/5 py-5">
              <p className="font-display text-3xl font-bold text-gold">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs tracking-wider text-mist uppercase">
                {s.label}
              </p>
            </div>
          ))}
          <a
            href="#sobre"
            className="flex items-center justify-end gap-3 text-xs tracking-[0.25em] text-mist uppercase transition hover:text-gold"
          >
            Conheça
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

export { STATS, CountUp };
