# Evandro Jorge · Motorista Particular Executivo

Site institucional de Evandro Jorge, motorista particular em São Paulo com padrão Uber Black.

**Produção:** https://evandro-motorista.vercel.app

## Stack

Site estático em Vite + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion, hospedado na Vercel.

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local
npm run build    # typecheck + build em dist/
npm run preview  # serve o build
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone, WhatsApp, Instagram, URL | `src/lib/site.ts` |
| Serviços (cards, rodapé e formulário) | `src/components/Services.tsx` |
| Depoimentos | `src/components/Testimonials.tsx` |
| Perguntas frequentes | `src/components/FAQ.tsx` |
| SEO, Open Graph e Schema.org | `index.html` |
| Cores e fontes | `src/index.css` |

O formulário de orçamento não usa servidor: monta a mensagem e abre o WhatsApp do Evandro já preenchido.
