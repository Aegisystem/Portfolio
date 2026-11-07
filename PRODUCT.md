# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated (inferred, the stack question went unanswered): static HTML, CSS and vanilla JS with no build step, so it deploys as-is to GitHub Pages, Netlify or Vercel. Language is chosen with the `lang` query param (`?lang=es`, `?lang=en`).

## Users

Inferred from the CV ("Disponible para trabajo remoto y reubicación", English C1), not confirmed: recruiters and engineering leads hiring a full stack engineer for remote or relocation roles, reading in English or Spanish, usually on a laptop between other candidates, sometimes on a phone from a LinkedIn link. Their job: decide in a minute whether Steven is worth an interview, then find how to contact him.

Secondary: academic colleagues and students who know him as a professor at Universidad de Ibagué.

## Product Purpose

A personal portfolio for Steven Alexander Correa Del Castillo, full stack software engineer in Ibagué, Colombia. It must show that he ships complete, working systems alone, with unusual rigor (tests, ADRs, security reviews, measured performance), and that he teaches. Success: a recruiter contacts him or downloads the CV.

## Positioning

He builds whole products end to end as a single developer, with an agentic Claude Code workflow backed by verification (scripts, test suites, documented decisions), and he teaches software engineering and competitive programming to 100+ students. Few candidates can show both production systems used by real people and a course they wrote.

## Operating Context

Visitors arrive from LinkedIn, GitHub (github.com/Aegisystem) or a job application. They compare many profiles quickly. Two language links are shared: `?lang=es` and `?lang=en`.

## Capabilities and Constraints

- Bilingual ES/EN with a visible switch that updates the `lang` query param.
- No backend; contact is by email, LinkedIn and GitHub links.
- Phone number appears on the CV; whether to show it on the public web is undecided, so it is left out.

## Evidence on Hand

Source: `/Users/aegisystem/Downloads/CV_Steven_Esp.pdf` and the sibling project folders.

- **Nous** (nous.aegisystem.xyz, live): supervised exam platform for computer labs, sole developer, TypeScript, Next.js, PostgreSQL, WebSockets. Real-time proctoring, eight question types with auto grading and partial credit, built-in spreadsheet, diagramming and linear programming tools. 500+ commits in 7 weeks, 45+ verification scripts. Saving an exam's grades went from 5.8 s to 0.86 s by batching DB writes (26 round trips to 5). Adopted by other professors. Aug 2026 to present.
- **Quitsie** (`../Splitwise`, github.com/Aegisystem/Quitsie, public; live at https://quitsie.aegisystem.xyz on Railway since Nov 2026, health check verified 2026-11-06 on commit a1ef4e3; quitsie.com is still a planned domain): offline-first PWA for shared expenses. React + Vite + TypeScript, IndexedDB replica (Dexie) with an offline queue; one Go binary serving PWA + API on PostgreSQL (pgx, sqlc, goose; sync reads in REPEATABLE READ), OpenAPI contract with generated client and server; distroless Docker image deployed by Railway (ADR 0012, Nov 5 2026, replaced SQLite on a self-run GCP VM with Litestream and Cloudflare Tunnel); email code via Resend or Google OIDC login. 291 commits Oct 26 to Nov 5 2026, 12 ADRs, 52 Go test files (each test gets its own PostgreSQL database) plus Playwright e2e, 14 security review findings closed.
- **ControlTurnos / Nómina de turnos** (`../Nomina`, repo private): multi-company shift and payroll app. Node.js + MongoDB, deployable on Netlify or Vercel. Records who worked which shift each day and computes overtime past 42 h/week, night surcharge (7 p.m. to 6 a.m.) and Sunday/holiday hours with Colombian holidays 2026–2027; fortnight (quincena) closing locks days; Excel export; per-company access with admin and normal profiles. Built Nov 2026. Deployed on Netlify: the repo history has an empty commit "Volver a desplegar en Netlify con las variables nuevas" (c9e21e6, 2026-11-04) used to trigger a redeploy; no public URL is shared. Do not name the client.
- **Course: Algoritmia y Estructuras de Datos Avanzadas** (`../AlgorithmAndAdvancedDataStructures`, algo.aegisystem.xyz, github.com/Aegisystem/AlgorithmsAndDataStructuresCourse): a 16-week competitive programming course in Python run on PyPy that he is writing; 4 modules, 2 sessions per week (theory + online-judge contest), problems from CSES, AtCoder and Codeforces, each assigned problem solved in Python under the time limit. In progress; week 1 published.
- **MIRO** (miro.unibague.edu.co, live): institutional reporting platform replacing spreadsheets; Node.js, Express, MongoDB, React, Next.js. Mar 2024 to Feb 2025.
- **DIAN automation tools** (Python): data cleaning, validation and tax reports, report time from one hour to five minutes. Jan 2022 to Jun 2025.
- Experience: Software Engineering professor at Universidad de Ibagué (Aug 2025 to present); Supply chain intern at SLB (Feb 2024 to Aug 2025, Python, Power Automate, Power Apps, Power BI); Academic monitor (Aug 2022 to May 2024).
- Education: MSc Software Engineering, Universidad de los Andes (in progress); Systems Engineering, Universidad de Ibagué (2020–2025); intensive English C1 program, Malta (2025).
- Certifications: Scrum Master (2025); HackerRank Problem Solving Intermediate, JavaScript, Java (2025). Scholarships: Talento Tolima (2020–2024), international exchange in Peru (2023), academic monitorship (2022–2024).
- Contact: steven14correa@gmail.com, linkedin.com/in/Stev-Corr, github.com/Aegisystem.

Absent, never fabricate: testimonials, employer logos, user counts beyond the CV's "100+ students", star counts, a photo (none provided), and an English CV PDF.

## Product Principles

1. Show the system working, not adjectives about it: real numbers, real architecture, real links.
2. Honest status: live, in progress or not deployed is stated plainly.
3. Fast to scan for a busy reader, deep for one who wants to dig.
4. Both languages are first-class; neither is a translation afterthought.

## Accessibility & Inclusion

WCAG 2.2 AA: contrast, keyboard navigation, reduced motion respected, `lang` attribute follows the selected language.
