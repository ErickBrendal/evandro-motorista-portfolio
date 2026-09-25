import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SITE } from "../lib/site";
import { Reveal, SectionHeading } from "./ui";

export const FAQ_ITEMS = [
  {
    q: "Como faço para agendar uma viagem?",
    a:
      "É só preencher o formulário de orçamento nesta página ou chamar direto no WhatsApp " +
      SITE.phoneDisplay +
      ". Informe origem, destino, data, horário e número de passageiros.",
  },
  {
    q: "Qual o horário de atendimento?",
    a: "Atendo 24 horas, todos os dias, inclusive madrugadas e fins de semana, mediante agendamento.",
  },
  {
    q: "Com quanto tempo de antecedência devo agendar?",
    a: "Quanto antes, melhor para garantir o horário, principalmente em datas concorridas. Para viagens no mesmo dia, chame no WhatsApp e consulte a disponibilidade.",
  },
  {
    q: "Quais regiões você atende?",
    a: "Atendo a cidade de São Paulo e região, incluindo traslados para os aeroportos e viagens para outras cidades.",
  },
  {
    q: "Como é calculado o valor da viagem?",
    a: "O valor depende do trajeto, da distância, do horário e do tipo de serviço. Envie os detalhes e receba um orçamento personalizado, sem compromisso.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Dúvidas frequentes"
            title={
              <>
                Tudo o que você{" "}
                <span className="text-gold-gradient">precisa saber</span>
              </>
            }
            subtitle="Não encontrou sua resposta? Fale comigo, respondo rapidinho."
          />
        </div>

        <Reveal className="divide-y divide-white/10 border-y border-white/10">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`text-lg font-semibold transition-colors ${
                        isOpen ? "text-gold" : "text-bone"
                      }`}
                    >
                      {item.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 flex-none text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 leading-relaxed text-mist">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
