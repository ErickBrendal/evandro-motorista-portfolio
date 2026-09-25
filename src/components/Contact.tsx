import { Check, Clock3, Instagram, MapPin, Phone, Send } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { SITE, whatsappLink } from "../lib/site";
import { SERVICES } from "./Services";
import { Reveal, WhatsAppIcon } from "./ui";

type FormState = {
  name: string;
  service: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  notes: string;
};

const INITIAL: FormState = {
  name: "",
  service: SERVICES[0].title,
  origin: "",
  destination: "",
  date: "",
  time: "",
  passengers: "1",
  notes: "",
};

const REQUIRED: (keyof FormState)[] = [
  "name",
  "origin",
  "destination",
  "date",
  "time",
];

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export function buildMessage(f: FormState) {
  const lines = [
    "Olá Evandro! Gostaria de um orçamento:",
    "",
    `*Nome:* ${f.name.trim()}`,
    `*Serviço:* ${f.service}`,
    `*Origem:* ${f.origin.trim()}`,
    `*Destino:* ${f.destination.trim()}`,
    `*Data:* ${formatDate(f.date)} às ${f.time}`,
    `*Passageiros:* ${f.passengers}`,
  ];
  if (f.notes.trim()) lines.push(`*Observações:* ${f.notes.trim()}`);
  return lines.join("\n");
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);
  const minDate = useMemo(todayISO, []);

  const missing = REQUIRED.filter(k => !form[k].trim());

  const update = (key: keyof FormState) => (e: { target: { value: string } }) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (missing.length) {
      document.getElementById(`f-${missing[0]}`)?.focus();
      return;
    }
    const url = whatsappLink(buildMessage(form));
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
    setSent(true);
  };

  const err = (k: keyof FormState) => touched && !form[k].trim();
  const fieldClass = (k: keyof FormState) =>
    `field ${err(k) ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/20" : ""}`;

  return (
    <section
      id="orcamento"
      className="relative overflow-hidden bg-coal py-24 sm:py-32"
    >
      <div className="gold-line absolute inset-x-0 top-0 h-px opacity-40" />
      <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-x relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Info */}
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            Orçamento
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] font-bold sm:text-5xl">
            Pronto para a sua{" "}
            <span className="text-gold-gradient">próxima viagem?</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            Preencha os dados e a mensagem chega pronta no meu WhatsApp. Sem
            cadastro, sem complicação.
          </p>

          <ul className="mt-10 space-y-3">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center gap-4 p-4 transition hover:border-gold/40"
              >
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-whatsapp/15 text-whatsapp">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest text-mist uppercase">
                    WhatsApp
                  </span>
                  <span className="font-semibold text-bone group-hover:text-gold">
                    {SITE.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phoneE164}`}
                className="card group flex items-center gap-4 p-4 transition hover:border-gold/40"
              >
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gold/10 text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest text-mist uppercase">
                    Ligar agora
                  </span>
                  <span className="font-semibold text-bone group-hover:text-gold">
                    {SITE.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center gap-4 p-4 transition hover:border-gold/40"
              >
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gold/10 text-gold">
                  <Instagram className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest text-mist uppercase">
                    Instagram
                  </span>
                  <span className="font-semibold text-bone group-hover:text-gold">
                    {SITE.instagramHandle}
                  </span>
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> {SITE.city}
            </span>
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-gold" /> 24 horas · todos os dias
            </span>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <form
            noValidate
            onSubmit={onSubmit}
            className="card relative p-6 sm:p-10"
            aria-describedby="form-hint"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="f-name" className="label">
                  Seu nome *
                </label>
                <input
                  id="f-name"
                  className={fieldClass("name")}
                  value={form.name}
                  onChange={update("name")}
                  autoComplete="name"
                  placeholder="Como posso te chamar?"
                  aria-invalid={err("name")}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="f-service" className="label">
                  Tipo de serviço
                </label>
                <select
                  id="f-service"
                  className="field"
                  value={form.service}
                  onChange={update("service")}
                >
                  {SERVICES.map(s => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="f-origin" className="label">
                  Origem *
                </label>
                <input
                  id="f-origin"
                  className={fieldClass("origin")}
                  value={form.origin}
                  onChange={update("origin")}
                  placeholder="Endereço ou bairro"
                  aria-invalid={err("origin")}
                />
              </div>
              <div>
                <label htmlFor="f-destination" className="label">
                  Destino *
                </label>
                <input
                  id="f-destination"
                  className={fieldClass("destination")}
                  value={form.destination}
                  onChange={update("destination")}
                  placeholder="Ex.: Aeroporto de Guarulhos"
                  aria-invalid={err("destination")}
                />
              </div>

              <div>
                <label htmlFor="f-date" className="label">
                  Data *
                </label>
                <input
                  id="f-date"
                  type="date"
                  min={minDate}
                  className={fieldClass("date")}
                  value={form.date}
                  onChange={update("date")}
                  aria-invalid={err("date")}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="f-time" className="label">
                    Horário *
                  </label>
                  <input
                    id="f-time"
                    type="time"
                    className={fieldClass("time")}
                    value={form.time}
                    onChange={update("time")}
                    aria-invalid={err("time")}
                  />
                </div>
                <div>
                  <label htmlFor="f-passengers" className="label">
                    Pessoas
                  </label>
                  <select
                    id="f-passengers"
                    className="field"
                    value={form.passengers}
                    onChange={update("passengers")}
                  >
                    {["1", "2", "3", "4", "5 ou mais"].map(n => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="f-notes" className="label">
                  Observações
                </label>
                <textarea
                  id="f-notes"
                  rows={3}
                  className="field resize-none"
                  value={form.notes}
                  onChange={update("notes")}
                  placeholder="Nº do voo, bagagens, paradas no caminho…"
                />
              </div>
            </div>

            {touched && missing.length > 0 && (
              <p role="alert" className="mt-5 text-sm text-red-300">
                Preencha os campos obrigatórios marcados com *.
              </p>
            )}

            <button
              type="submit"
              className="btn-gold mt-7 w-full py-5 text-base"
            >
              {sent ? (
                <Check className="h-5 w-5" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              {sent ? "Enviar novamente" : "Enviar pelo WhatsApp"}
            </button>
            <p id="form-hint" className="mt-4 text-center text-xs text-mist">
              {sent
                ? "Pronto! Confira a mensagem aberta no WhatsApp e toque em enviar."
                : "Ao enviar, o WhatsApp abre com sua mensagem já preenchida."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
