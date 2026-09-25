const ITEMS = [
  "Aeroporto de Guarulhos",
  "Congonhas",
  "Reuniões executivas",
  "Shows e eventos",
  "Viagens curtas e longas",
  "Padrão Uber Black",
  "Atendimento 24h",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="relative overflow-hidden border-y border-gold/15 bg-coal py-5"
      aria-label="Atendimentos"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-coal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-coal to-transparent" />
      <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= ITEMS.length}
            className="flex items-center gap-10 font-display text-lg whitespace-nowrap text-bone/80 italic"
          >
            {item}
            <span className="text-xs text-gold not-italic">◆</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
