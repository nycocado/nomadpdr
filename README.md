<div align="center">

![Nomad PDR](media/logo-full.svg)

# Nomad PDR System

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-3da639.svg)](LICENCE.md)
![Status](https://img.shields.io/badge/status-completed-6f42c1)

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js%2016-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

[Portuguese](README.pt.md) | English

</div>

## About

Institutional landing page for **Nomad PDR System** — specialists in Paintless Dent Repair (PDR) and hail damage recovery. Built with Next.js 16 App Router, bilingual (EN/PT), with an integrated contact form and email notifications via Resend.

Available at **[nomadpdr.pt](https://www.nomadpdr.pt/)**.

## Requirements

| Tool | Version |
| ---- | ------- |
| Node.js | 20+ |
| npm / pnpm | any |

## How to run

```bash
cp .env.example .env.local   # fill in RESEND_API_KEY and remaining vars
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## License

Distributed under the **CC BY-NC 4.0** license, © 2025 Nycolas Souza.

Non-commercial use only. You may share and adapt the material as long as you give appropriate credit and do not use it for commercial purposes.

The full text is in [LICENCE.md](LICENCE.md).
