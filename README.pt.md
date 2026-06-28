<div align="center">

![Nomad PDR](media/logo-full.svg)

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-3da639.svg)](LICENCE.md)
![Status](https://img.shields.io/badge/status-concluído-6f42c1)

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js%2016-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

Português | [English](README.md)

</div>

## Sobre

Landing page institucional do **Nomad PDR System** — especialistas em Paintless Dent Repair (PDR) e recuperação de danos por granizo. Construída com Next.js 16 App Router, bilíngue (EN/PT), com formulário de contacto integrado e notificações por email via Resend.

## Funcionalidades

| Funcionalidade | Descrição |
| -------------- | --------- |
| **Bilíngue (EN/PT)** | Suporte completo a i18n via dicionários JSON e roteamento por locale. |
| **Formulário de contacto** | Server Action com validação e envio duplo de email (admin + confirmação ao cliente) via Resend. |
| **Política de privacidade** | Página de privacidade com banner de consentimento de cookies (GDPR). |
| **SEO & Open Graph** | Metadados por locale, tags Open Graph e sitemap estruturado. |
| **Vercel Analytics** | Estatísticas de uso anónimas integradas ao nível do layout. |
| **Design responsivo** | Layout mobile-first com Tailwind CSS v4 e primitivas Radix UI. |

## Stack

| Tecnologia | Versão | Papel |
| ---------- | ------ | ----- |
| Next.js | 16 | Framework (App Router, React Server Components) |
| React | 19 | Runtime de UI |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | v4 | Estilização |
| Radix UI | latest | Primitivas de UI acessíveis |
| Resend | 6 | Email transacional |
| Vercel Analytics | 1 | Analytics anónimo |

## Requisitos

| Ferramenta | Versão |
| ---------- | ------ |
| Node.js | 20+ |
| npm / pnpm | qualquer |

## Como executar

```bash
cp .env.example .env.local   # preencha RESEND_API_KEY e demais variáveis
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # build de produção
```

## Licença

Distribuído sob a licença **CC BY-NC 4.0**, © 2025 Nycolas Souza.

Uso não comercial apenas. Pode partilhar e adaptar o material desde que dê crédito adequado e não o utilize para fins comerciais.

O texto completo está em [LICENCE.md](LICENCE.md).
