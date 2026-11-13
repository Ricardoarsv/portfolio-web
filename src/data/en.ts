/* English layer over the Spanish source in portfolio.ts.
   Only text is translated here; structure, images and figures stay in one place. */

type JobT = { role?: string; roleNote?: string; dates?: string; place?: string; summary?: string; did?: string[]; metrics?: { label: string; suffix?: string }[]; client?: string; product?: string };
type ProjT = { org?: string; name?: string; kind?: string; role?: string; short?: string; desc?: string; did?: string[] };
type SkillT = { code?: string; name?: string; desc?: string; uses?: Record<string, string> };

export const en = {
  profile: {
    bio: 'Applied AI and multi-agent systems. Distributed, high-volume systems. 3 years in production with TypeScript, Vue, React and NestJS on AWS and Google Cloud.',
    location: 'Cúcuta, Colombia',
    languages: 'Spanish · English',
    about: [
      'Three years shipping product to production, from the interface to the infrastructure.',
      'I work on two fronts that are usually separate: user-facing distributed platforms and high-volume systems that cannot go down.',
      'I work AI-first: I direct development with agents under my own rules, validate with tests and decide what I accept or reject.',
    ],
  },
  education: [
    { title: 'Systems Engineering', org: 'Universidad Nacional Abierta y a Distancia (UNAD)', dates: 'Jan 2025 → Dec 2027', status: 'in progress' },
    { title: 'Software Analysis and Development Technologist', org: 'Servicio Nacional de Aprendizaje (SENA)', dates: 'Apr 2022 → Jul 2024', status: 'graduated' },
  ],
  certifications: { 'Python Essentials 1 y 2': 'Python Essentials 1 and 2' } as Record<string, string>,
  jobs: {
    magnar: {
      role: 'Scraper Reliability Engineer · Contractor', roleNote: 'Promoted from Scraper Developer (Aug – Sep 2026)',
      dates: 'Aug 2026 → now', place: 'Chile · remote',
      metrics: [
        { label: 'scraper fixes shipped to production' }, { label: 'maintenance cases across 7 countries' },
        { label: 'production validations' }, { label: 'new integrations in Brazil and Mexico' },
        { label: 'documents ingested', suffix: 'k' }, { label: 'historical load on Fargate, 0 blocks' },
      ],
      summary: 'Legislation and case law from public portals across Latin America. I started building new scrapers and was promoted to Reliability Engineer to keep the failing ones running in production: diagnosis, fix and verification on the next run.',
      did: [
        'Since the promotion I opened 87 maintenance cases for broken scrapers in Chile, Argentina, Peru, Brazil, Colombia, Mexico and Uruguay, and took 34 fixes all the way to production.',
        'Triage on the production monitor by country and importance, separating what is code, infrastructure (schedules, deployment, coverage) or the source itself.',
        'Diagnosis from CloudWatch and ECS logs: Fargate OOM, pagination caps, looping cursors, false greens, WAFs (Cloudflare, Imperva, Radware, reCAPTCHA), TLS certificates and migrated portals.',
        'A controlled process for every fix: request, production validation (118 validations), merge, and closing only when the next scheduled run comes back green and with data.',
        'Before the promotion I built 10 scrapers end to end for Brazil and Mexico: source research, document identity, ingestion and PR, with scope validated by the legal team against each source’s regulations.',
        'Loaded the TRT20 historical archive (504,801 documents, 30 years) in 21 h with 10 workers on Fargate, with no proxy and not a single 403/429 block.',
        'Built my own agent system on Claude Code for this work: 11 agents, 47 skills and mandatory gates that reproduce CI before committing or ingesting.',
      ],
    },
    southteams: {
      dates: 'Sep 2026 → now', place: 'Miami, USA · remote', product: 'SKY Plus · SKY Airline',
      metrics: [{ label: 'single-spa microfrontends' }, { label: 'microservices, Clean Arch.' }, { label: 'multi-language content per market' }],
      summary: 'At Qurable, in the Customer Success team that builds and maintains SKY Plus, SKY Airline’s loyalty program: sign-up, authentication, profile, points and benefits on a distributed platform in production.',
      did: [
        'Full-stack development across microfrontends, web apps and microservices in the accounts and loyalty ecosystem.',
        'Microfrontends with single-spa and Vue 3, and an Astro web monolith with self-managed, multi-language content from ButterCMS, per market.',
        'NestJS microservices with Clean Architecture and async messaging, taking care of contracts between services and with external partners.',
        'End-to-end diagnosis: I reproduce, trace the flow across services and fix the layer where the problem starts.',
        'Refinements with product, UX and business; I verify in QA and Stage against acceptance criteria, with evidence, before production.',
        'Created QDD, the team’s agent operating layer (see the QDD project): delivery skills, audit agents and shared memory.',
      ],
    },
    gundo: {
      roleNote: 'Full-Stack since Aug 2024; also PO since Nov 2025', dates: 'Aug 2024 → Jul 2026', place: 'Spain · remote',
      metrics: [{ label: 'DRG4FOOD European grant' }, { label: 'retail chains with their own brand' }, { label: 'as Product Owner', suffix: ' months' }],
      summary: 'I led the Tech Fitness area of a white-label B2B2C health and nutrition platform powered by AI, deployed under the brands of large Spanish retail chains: from technical planning to production.',
      did: [
        'Developed GENIE, personalized nutrition from genetic, microbiome and biochemical data, winner of the European DRG4FOOD program (€300,000) with ADN Institut and i3S.',
        'Designed the training and nutrition plan engine with a multi-agent architecture (Mastra, Vertex AI, OpenAI) and event-driven processing on Pub/Sub.',
        'Built a computer-vision dish scanner: ingredients, macronutrients and alerts based on the user’s profile.',
        'Smart training plans: routines from dynamic questionnaires, adjustments for injuries and progression, and strength, endurance and recovery metrics.',
        'Moved the platform to multi-tenant and hardened API security (CORS, JWT, App Check, isolation between users).',
        'As Product Owner: roadmap, sprints, releases, prioritization with metrics and A/B testing, and CI/CD on Google Cloud and AWS.',
      ],
    },
    gelvez: {
      role: 'IT Assistant · Full-Stack Developer (internship)', dates: 'Nov 2023 → Jul 2024', place: 'Cúcuta, Colombia · on-site',
      metrics: [{ label: 'company intranet' }, { label: 'investment requests API' }, { label: 'monitoring dashboard' }],
      summary: 'Consumer goods distributor with manual administrative processes that took hours every week.',
      did: [
        'Automated supplier reporting with Python, Selenium and Playwright.',
        'Automated bulk validation of business partners against public databases, complying with DIAN Annex 1.9 (Python, Selenium).',
        'Designed the migration templates to roll out a new ERP, and migrated customer documents from OneDrive to SharePoint with Power Automate.',
        'Built a Django intranet that reduced dependency on the ERP and operating costs.',
        'Built a REST API for investment requests (Flask + Firebase) and a monitoring dashboard (Vite + React).',
      ],
    },
  } as Record<string, JobT>,
  projects: {
    qdd: {
      kind: 'AI tooling', role: 'Creator and main contributor (404 of 523 commits)',
      short: 'Agent operating layer for the SKY team',
      desc: 'Workflows, capabilities and audit agents that take the SKY team’s work from ticket to release. Installs as a plugin in Claude Code, Codex and OpenCode.',
      did: [
        'Designed and built most of it: 404 of the 523 commits between July and November 2026.',
        'More than 50 delivery skills: take the ticket, plan, implement, verify, QA evidence, MR, release and deployment.',
        'Read-only audit agents (contracts, QA evidence, mobile and release) that separate confirmed facts, inferences and missing evidence.',
        'Packaged team memory, seeded once into the agent’s native memory (Codex, Claude or Engram), with no context cost on every use.',
        'QDD Companion: the team’s context in the browser, next to Jira, GitLab and GitHub, with a local Python companion.',
        'Author of the QDD Loyalty user manual (v1.18.0).',
      ],
    },
    'magnar-agents': {
      name: 'Magnar agent system', kind: 'AI tooling', role: 'Author',
      short: '11 agents and 47 skills for scraping and maintenance',
      desc: 'Local marketplace of Claude Code plugins I use for all my work at Magnar: building scrapers, handling tickets and keeping the failing ones running in production.',
      did: [
        'Conversational control desk that classifies every request and routes it across 11 agents and 47 skills.',
        'Mandatory gates through hooks: nothing is committed or ingested without reproducing CI, and every write to the platform goes through a guard with confirmation and audit log.',
        'The maintenance cycle as commands: diagnose, request, validate fix, publish, verify in production and reopen.',
        'Live local dashboards: system map, ingestion pulse, rules and memory.',
        'A doctrine of 138 recorded decisions and a gate that checks the figures in the docs against what is on disk.',
      ],
    },
    genie: {
      name: 'GENIE and Gundo Fitness', kind: 'AI product', role: 'Full-Stack and Product Owner',
      short: 'AI-personalized nutrition and training',
      desc: 'White-label health and nutrition platform for Uvesco, Ametller Origen, DIA and CrossFit. GENIE won the European DRG4FOOD program (€300,000).',
      did: [
        'Multi-agent training and nutrition plan engine with Mastra, Vertex AI and OpenAI, processed asynchronously on Pub/Sub.',
        'GENIE: personalized nutrition from genetic, microbiome and biochemical data, with ADN Institut and i3S.',
        'Computer-vision dish scanner: ingredients, macronutrients and alerts based on the profile.',
        'Adaptive questionnaires with branching logic, plus admin and IAM modules.',
      ],
    },
    'qurable-agents': {
      name: 'Qurable agents', kind: 'AI tooling', role: 'Author',
      short: 'Loyalty engineering craft, packaged for agents',
      desc: 'Private marketplace of Claude Code plugins for the Qurable engagement, isolated per session so one employer’s context never enters the other’s.',
      did: [
        'Portable craft plugin: ledgers, idempotency, concurrency and money.',
        'Local context plugin: company, architecture, conventions and the work loop.',
        'Specialized agents (adversary, breaker, designer, verify) that attack a design before it is built.',
        'Engine room: a dashboard with the graph of agents, skills and references, extracted from the actual text of each file.',
      ],
    },
    transmaquiobras: {
      org: 'TRANSMAQUIOBRAS SAS · client', kind: 'Management software', role: 'Author · Jun – Aug 2026',
      short: 'From Excel and WhatsApp to a single system',
      desc: 'Management software for a heavy transport and machinery company in Cúcuta and Aguachica: drivers, administration, payroll and metrics in one place.',
      did: [
        'Working prototype to digitize an operation that lived in Excel and WhatsApp.',
        'Receipt capture by photo with swappable OCR (Tesseract, local Ollama, Groq or Gemini) and a prefilled form to review and confirm.',
        'Business case and before/after comparison with editable assumptions, to present the value to management.',
        'Presentation panel to switch view, simulated role, data volume and OCR engine live.',
      ],
    },
    'gelvez-intranet': {
      name: 'Gelvez intranet', kind: 'Company intranet', role: 'Author',
      short: 'Orders, receivables, purchasing and treasury without the ERP',
      desc: 'Django intranet to look up sales sheets, orders, invoices, customers, receivables and treasury, which reduced dependency on the ERP.',
      did: [
        'Lookup modules for sales, accounting, purchasing, receivables and treasury.',
        'Alerts and audit within the same intranet.',
        'Report automation and bulk partner validation with Python and Playwright.',
      ],
    },
    shelvora: {
      kind: 'Android app', role: 'Author', short: 'Offline-first reader with on-device translation',
      desc: 'A private web-novel reader that works offline and translates chapters on the phone itself.',
      did: [
        'Content-addressed storage: the library does not break when a source changes or disappears.',
        'Hybrid translation: online when there is a connection, with an on-device fallback model and a glossary to keep names consistent across chapters.',
        'Multi-source engine with 7 sites.',
        'Plan-first, AI-orchestrated development: 16 phases, one branch and one PR per phase.',
      ],
    },
    rival: {
      kind: 'Fitness app', role: 'Main contributor (~94% of activity)', short: 'Gym ranking with ELO',
      desc: 'Gym app with a competitive ranking between athletes, by seasons and divisions.',
      did: [
        'ELO system computed from the Wilks score, with a seasonal rank ladder.',
        'The PR that introduced the AI-first, spec-driven architecture the whole codebase runs on.',
        'Turborepo monorepo: Expo mobile app and a Hono API with Drizzle on PostgreSQL.',
        'Subscriptions with RevenueCat and authentication with BetterAuth.',
      ],
    },
    tower: {
      kind: 'Game · Godot', role: 'Developer · Páramo Interactive', short: 'Co-op walk toward a burning tower, PS1 look',
      desc: 'A cozy, eerie co-op walk toward a burning tower, with a PS1/PS2-era look.',
      did: [
        'Co-op game in Godot 4 with a low-res look inspired by the PS1/PS2.',
        'Custom art and texture pipeline (nature atlases, day/night skies).',
        'Formerly called Ricardini Bananini, now at the Páramo Interactive studio.',
      ],
    },
    cbrain: {
      kind: 'Agent studio', role: 'Author', short: 'A simulated video game studio run by agents',
      desc: 'A simulated game studio on Claude Code that takes a game from idea to launch on five criteria: product, market, execution, distribution and profitability.',
      did: [
        'The founder sets a charter (budget, deadlines, platforms, limits); inside it the studio runs on its own and stops at one-way decisions.',
        'A producer cuts the work into contracts, each agent runs on the model that fits its role, and another agent or a tool validates every result with evidence.',
        'Per-stage greenlights on the five criteria decide whether the game deserves the next unit of time and money.',
        'Live office with the studio floor plan: departments, agents, tasks and handoffs. One command, cbrain, to run it.',
      ],
    },
    chunk: {
      kind: 'Language app', role: 'Author', short: 'English through key phrases with voice practice',
      desc: 'An app to learn English with daily cycles of key phrases (chunks), conversation roleplays and spoken monologues.',
      did: [
        'Practice cycles with a plan, the day’s session and progress.',
        'Conversation roleplays with spoken answers and a pronunciation score.',
        'Guided monologues with automatic transcription of what you say.',
      ],
    },
    orq: {
      name: 'Agent orchestrator', kind: 'AI tooling', role: 'Author · daily use', short: '38 skills · 11 agents · CI gates',
      desc: 'The platform I develop with every day: a layer on Claude Code that drives research, building, review and delivery.',
      did: [
        'Mechanical gates that reproduce CI locally; a hook blocks the commit if the gate is not green.',
        'An auditor agent reads the repository’s actual CI prompt: when the team changes its rules, the gate changes.',
        'Autonomous loop with gates and re-entry: it only stops for scope questions or findings that change the problem.',
        'A production variant that reads monitors read-only and redacts credentials.',
      ],
    },
  } as Record<string, ProjT>,
  skills: {
    ia: {
      code: 'AI', name: 'AI agents', desc: 'I design multi-agent systems that run in production, and I develop with agents I build and govern with gates myself.',
      uses: {
        genie: 'Multi-agent nutrition and training plan engine with Mastra, Vertex AI and OpenAI.',
        qdd: 'Agent operating layer for the SKY team: 50+ skills and audit agents.',
        'magnar-agents': '11 agents and 47 skills for scraping, tickets and maintenance.',
        'qurable-agents': 'Craft and context plugins for the Qurable engagement.',
        cbrain: 'A game studio run by agents, with greenlights and an independent verifier.',
        orq: 'Daily orchestrator on Claude Code: 38 skills, 11 agents and CI gates.',
      },
    },
    fe: {
      desc: 'Web and mobile interfaces at organization scale: microfrontends, multi-language sites and native apps.',
      uses: {
        southteams: 'single-spa microfrontends with Vue 3 and an Astro monolith with ButterCMS for SKY Plus.',
        shelvora: 'Android app with React Native (New Architecture) and Expo.',
        transmaquiobras: 'Management prototype in Next.js 16.',
        rival: 'Mobile app in Expo.',
        chunk: 'Language app in Expo with voice practice.',
      },
    },
    be: {
      desc: 'Services with clear contracts: microservices with Clean Architecture, async messaging and small, fast APIs.',
      uses: {
        southteams: 'NestJS microservices with RabbitMQ in the loyalty ecosystem.',
        genie: 'Event-driven processing on Google Cloud Pub/Sub.',
        rival: 'Hono API with Drizzle on PostgreSQL.',
        'gelvez-intranet': 'Django intranet and Flask API.',
      },
    },
    dat: {
      name: 'Data at scale', desc: 'Data acquisition from opaque sources: API reverse engineering, anti-bot, PDF OCR and identity keys that never lose records.',
      uses: {
        magnar: '10 new scrapers, 87 maintenance cases and a 504,801-document load in 21 h.',
        transmaquiobras: 'Receipt OCR with Tesseract or Ollama.',
        gundo: 'Product analytics on BigQuery.',
        gelvez: 'Report automation and bulk validation with Selenium and Playwright.',
      },
    },
    ops: {
      name: 'Cloud and DevOps', desc: 'I take what I build to production and run it: containers, CI/CD and diagnosis from logs.',
      uses: {
        magnar: 'Runs on AWS Fargate, diagnosis with CloudWatch and ECS, CI on GitHub Actions.',
        gundo: 'Owner of CI/CD on Google Cloud and AWS as Product Owner.',
        southteams: 'GitLab CI pipelines and verification in QA and Stage.',
      },
    },
  } as Record<string, SkillT>,
  sources: [
    { stats: [['2,786', 'contributions this year'], ['2,199', 'in private work repos'], ['559', 'public commits'], ['48', 'own repositories']] },
    { handle: 'via Southteams', stats: [['55', 'merge requests since Sep 2026'], ['45', 'merged'], ['18', 'SKY repos touched'], ['446', 'activity events']] },
    { name: 'Work repos', handle: 'Magnar and QDD', stats: [['72', 'PRs at Magnar'], ['521', 'commits in those PRs'], ['404', 'commits in QDD'], ['77%', 'of all QDD commits']] },
  ] as { name?: string; handle?: string; stats: [string, string][] }[],
  shots: {
    'qdd-sky-presentacion-portada': 'QDD Sky: an operating layer for the team’s AI agents.',
    'qdd-sky-presentacion-componentes': 'What QDD contains: rules, skills, agents, scripts and workflows.',
    'qdd-sky-presentacion-workflow': 'A ticket run through six stages.',
    'qdd-companion-arquitectura': 'QDD Companion architecture: browser panel and local companion.',
    'qdd-sky-guia-aportes': 'Interactive guide to contribute pieces to QDD.',
    'qdd-loyalty-manual-portada': 'QDD Loyalty user manual, version 1.18.0.',
    'magnar-mapa-grafo': 'System map: skills, agents, tools and hooks.',
    'magnar-tablero-pulso': 'The pulse: daily ingestion, collections and batches.',
    'magnar-ciclo-skills': 'The cycle: the scraping flow’s skills in order.',
    'magnar-reglas': 'System rules with severity and origin.',
    'gundo-fitness-landing': 'Gundo Fitness: training plans, nutrition and recipes in one place.',
    'qurable-sala-de-maquinas-grafo': 'Engine room: metrics and graph of the agent system.',
    'transmaquiobras-caso-de-negocio': 'Business case: estimated benefit versus staying on Excel.',
    'transmaquiobras-antes-vs-despues': 'Before and after: Excel and WhatsApp versus a single system.',
    'transmaquiobras-captura-recibo': 'Receipt capture by photo with OCR.',
    'transmaquiobras-panel-demo': 'Presentation panel: view, role, volume and OCR engine.',
    'gelvez-intranet': 'Main menu of the Gelvez Distribuciones intranet.',
    'shelvora-landing-hero-desktop': 'Shelvora’s landing page at shelvora.rickdev.tech.',
    'shelvora-landing-traduccion': 'Translation three ways, with an on-device fallback model.',
    'shelvora-landing-progreso-lectura': 'Reading tracking: time, chapters and streak.',
    'shelvora-landing-temas': '11 themes and a tunable reader.',
    'shelvora-app-pantallas': 'Language, setup and stats in the app.',
    'tower-fog-tower-lantern-day': 'Foggy road toward the tower, lantern in hand.',
    'tower-card-keeper-offer': 'The merchant’s shop.',
    'tower-village-night-lights': 'The village at night.',
    'gamedev-brain-office-floor': 'Live office: departments, agents, tasks and handoffs.',
    'gamedev-brain-directory': 'Studio directory: 7 offices, 31 agents and 64 skills.',
    'gamedev-brain-departments-graph': 'Department graph around the executive floor.',
    'gamedev-brain-chain-of-command': 'Chain of command and autonomy levels.',
    'chunk-learner-hoy-plan-progreso': 'The day’s session, the cycle plan and progress.',
    'chunk-learner-roleplay-voz': 'Voice roleplay with a pronunciation score.',
  } as Record<string, string>,
};
