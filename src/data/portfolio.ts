/* Contenido del portfolio. Fuente: CV 2026, GitHub (Ricardoarsv) y repos de trabajo.
   Cada empresa es independiente: Magnar y Southteams no tienen relación entre sí. */

export type Logo =
  | { kind: 'img'; src: string; dark?: string }   // ícono a color; `dark` es la variante para el tema nocturno
  | { kind: 'mono'; src: string }                 // ícono monocromo SVG que toma el color del tema
  | { kind: 'plate'; src: string };               // logotipo completo sobre placa blanca

/** Cifra de una ficha: número animable o texto fijo. */
export interface Metric { value: number | string; suffix?: string; decimals?: number; label: string }

export interface Job {
  id: string;
  company: string;
  logo: Logo;
  role: string;
  roleNote?: string;
  client?: { name: string; logo: Logo };
  product?: { name: string; logo: Logo };
  start: string;
  dates: string;
  place: string;
  active: boolean;
  metrics: Metric[];
  summary: string;
  did: string[];
  clients?: { name: string; logo: Logo }[];
  tooling?: { name: string; lines: string[] };
  shots?: Shot[];
  stack: string[];
}

export interface Shot { src: string; alt: string; caption?: string; fit?: 'cover' | 'contain' }

export interface Project {
  id: string;
  /** laboral o personal */
  scope: 'work' | 'personal';
  /** empresa o cliente, para los laborales */
  org?: string;
  /** id del trabajo al que pertenece */
  job?: string;
  name: string;
  kind: string;
  role: string;
  icon: string | null;
  color: string;
  short: string;
  desc: string;
  did: string[];
  stack: string[];
  url?: string;
  /** imagen grande de la ficha; si falta se usa el ícono */
  cover?: string;
  banner: 'icon' | 'cover' | 'paper' | 'glyph';
  extraIcons?: string[];
  shots?: Shot[];
}

export interface SkillBranch { id: string; code: string; name: string; tools: string[]; desc: string; uses: { ref: string; how: string }[] }

export const profile = {
  name: 'Ricardo Villanueva',
  fullName: 'Ricardo Arcesio Villanueva Montenegro',
  role: 'Full-Stack Engineer',
  bio: 'IA aplicada y sistemas multiagente. Sistemas distribuidos y de alto volumen. 3 años en producción con TypeScript, Vue, React y NestJS sobre AWS y Google Cloud.',
  location: 'Cúcuta, Colombia',
  languages: 'español · inglés',
  studies: 'Ing. de Sistemas, UNAD',
  email: 'ricardoarsv.2004@gmail.com',
  github: 'https://github.com/Ricardoarsv',
  linkedin: 'https://www.linkedin.com/in/ricardoarsv/',
  cv: { es: '/cv/Ricardo_Villanueva_CV_ES.pdf', en: '/cv/Ricardo_Villanueva_CV_EN.pdf' },
  avatar: '/img/avatar-80.png',
  about: [
    'Tres años construyendo producto en producción, de la interfaz a la infraestructura.',
    'Trabajo en dos frentes que suelen ir separados: plataformas distribuidas de cara al usuario y sistemas de alto volumen que no se pueden caer.',
    'Trabajo AI-first: dirijo el desarrollo con agentes bajo mis propias reglas, valido con tests y decido qué acepto o rechazo.',
  ],
};

export interface Study { title: string; org: string; dates: string; status?: string; logo: Logo }
export const education: Study[] = [
  { title: 'Ingeniería de Sistemas', org: 'Universidad Nacional Abierta y a Distancia (UNAD)', dates: 'ene 2025 → dic 2027', status: 'en curso', logo: { kind: 'img', src: '/img/logos/unad.svg', dark: '/img/logos/unad-dark.svg' } },
  { title: 'Tecnólogo en Análisis y Desarrollo de Software', org: 'Servicio Nacional de Aprendizaje (SENA)', dates: 'abr 2022 → jul 2024', status: 'graduado', logo: { kind: 'img', src: '/img/logos/sena.svg' } },
];

export const certifications: { issuer: string; logo?: Logo; items: [string, string][] }[] = [
  { issuer: 'Anthropic', logo: { kind: 'img', src: '/img/logos/anthropic-claude.svg' }, items: [['AI Fluency: Framework & Foundations', '2026'], ['Claude Code in Action', '2026'], ['Claude Code 101', '2026']] },
  { issuer: 'Cisco Networking Academy', items: [['JavaScript Essentials 1', '2024'], ['Python Essentials 1 y 2', '2022 – 2023']] },
];

export const jobs: Job[] = [
  {
    id: 'magnar', company: 'Magnar', logo: { kind: 'mono', src: '/img/marks/magnar-mark.svg' },
    role: 'Scraper Reliability Engineer · Contractor', roleNote: 'Ascenso desde Scraper Developer (ago – sep 2026)',
    start: '2026-08', dates: 'ago 2026 → hoy', place: 'Chile · remoto', active: true,
    metrics: [
      { value: 34, label: 'reparaciones de scrapers publicadas en producción' },
      { value: 87, label: 'casos de mantenimiento en 7 países' },
      { value: 118, label: 'validaciones en producción' },
      { value: 10, label: 'integraciones nuevas en Brasil y México' },
      { value: 570, suffix: ' mil', label: 'documentos ingeridos' },
      { value: 21, suffix: ' h', label: 'carga histórica en Fargate, 0 bloqueos' },
    ],
    summary: 'Normativa y jurisprudencia de portales públicos de Latinoamérica. Empecé construyendo scrapers nuevos y me ascendieron a Reliability Engineer para mantener en producción los que fallan: diagnóstico, reparación y verificación en la siguiente corrida.',
    did: [
      'Desde el ascenso abrí 87 casos de mantenimiento de scrapers caídos en Chile, Argentina, Perú, Brasil, Colombia, México y Uruguay, y llevé 34 reparaciones hasta producción.',
      'Triage sobre el monitor de producción por país e importancia, separando lo que es código, infraestructura (schedules, despliegue, cobertura) o la propia fuente.',
      'Diagnóstico con logs de CloudWatch y ECS: OOM en Fargate, topes de paginación, cursores en bucle, falsos verdes, WAF (Cloudflare, Imperva, Radware, reCAPTCHA), certificados TLS y portales migrados.',
      'Proceso controlado en cada reparación: solicitud, validación en producción (118 validaciones), merge y cierre solo cuando la siguiente corrida programada sale verde y con datos.',
      'Antes del ascenso construí 10 scrapers de punta a punta para Brasil y México: estudio de la fuente, identidad de documentos, ingesta y PR, con el alcance validado por el equipo legal contra la normativa de cada fuente.',
      'Cargué el acervo histórico de TRT20 (504.801 documentos, 30 años) en 21 h con 10 workers en Fargate, sin proxy y sin un solo bloqueo 403/429.',
      'Construí un sistema propio de agentes sobre Claude Code para este trabajo: 11 agentes, 47 skills y gates obligatorios que reproducen el CI antes de commitear o ingerir.',
    ],
    stack: ['TypeScript', 'Node.js', 'Playwright', 'Puppeteer', 'Cheerio', 'pdf-lib', 'Tesseract', 'PostgreSQL', 'AWS Fargate', 'S3', 'CloudWatch', 'Docker', 'GitHub Actions', 'Claude Code'],
  },
  {
    id: 'southteams', company: 'Southteams', logo: { kind: 'img', src: '/img/marks/southteams-mark.svg' },
    role: 'Software Developer',
    client: { name: 'Qurable', logo: { kind: 'img', src: '/img/logos/qurable.png' } },
    product: { name: 'SKY Plus · SKY Airline', logo: { kind: 'img', src: '/img/logos/sky-airline.svg', dark: '/img/logos/sky-airline-dark.svg' } },
    start: '2026-09', dates: 'sep 2026 → hoy', place: 'Miami, EE. UU. · remoto', active: true,
    metrics: [
      { value: 'Vue 3', label: 'microfrontends single-spa' },
      { value: 'NestJS', label: 'microservicios, Clean Arch.' },
      { value: 'ButterCMS', label: 'contenido multilenguaje por mercado' },
    ],
    summary: 'En Qurable, dentro del equipo de Customer Success que desarrolla y mantiene SKY Plus, el programa de lealtad de SKY Airline: registro, autenticación, perfil, puntos y beneficios sobre una plataforma distribuida en producción.',
    did: [
      'Desarrollo full-stack sobre microfrontends, aplicaciones web y microservicios del ecosistema de cuentas y lealtad.',
      'Microfrontends con single-spa y Vue 3, y un monolito web en Astro con contenido autoadministrable y multilenguaje desde ButterCMS, por mercado.',
      'Microservicios NestJS con Clean Architecture y mensajería asíncrona, cuidando los contratos entre servicios y con partners externos.',
      'Diagnóstico de punta a punta: reproduzco, rastreo el flujo entre servicios y corrijo en la capa donde nace el problema.',
      'Refinamientos con producto, UX y negocio; verifico en QA y Stage contra criterios de aceptación, con evidencia, antes de producción.',
      'Creé QDD, la capa operativa de agentes del equipo (ver el proyecto QDD): skills de entrega, agentes de auditoría y memoria compartida.',
    ],

    stack: ['TypeScript', 'Vue 3', 'Astro', 'ButterCMS', 'Tailwind', 'single-spa', 'NestJS', 'RabbitMQ', 'MongoDB', 'GitLab CI', 'Jira'],
  },
  {
    id: 'gundo', company: 'GUNDO Health and Food', logo: { kind: 'img', src: '/img/marks/gundo-mark.png', dark: '/img/marks/gundo-mark-dark.png' },
    role: 'Product Owner & Full-Stack Engineer', roleNote: 'Full-Stack desde ago 2024; también PO desde nov 2025',
    start: '2024-08', dates: 'ago 2024 → jul 2026', place: 'España · remoto', active: false,
    metrics: [
      { value: 300, suffix: ' k€', label: 'grant europeo DRG4FOOD' },
      { value: 4, label: 'cadenas con marca propia' },
      { value: 9, suffix: ' meses', label: 'como Product Owner' },
    ],
    summary: 'Lideré el área Tech Fitness de una plataforma B2B2C white-label de salud y nutrición con IA, desplegada como marca propia de grandes cadenas españolas: de la planificación técnica al despliegue en producción.',
    did: [
      'Desarrollé GENIE, nutrición personalizada desde datos genéticos, de microbioma y bioquímicos, ganadora del programa europeo DRG4FOOD (300.000 €) con ADN Institut e i3S.',
      'Diseñé el motor de planes de entrenamiento y nutrición con arquitectura multiagente (Mastra, Vertex AI, OpenAI) y procesamiento event-driven sobre Pub/Sub.',
      'Construí un escáner de platos por visión por computador: ingredientes, macronutrientes y alertas según el perfil del usuario.',
      'Planes de entrenamiento inteligentes: rutinas por cuestionarios dinámicos, ajuste por lesiones y progresión, y métricas de fuerza, resistencia y recuperación.',
      'Llevé la plataforma a multi-tenant y reforcé la seguridad de las APIs (CORS, JWT, App Check, aislamiento entre usuarios).',
      'Como Product Owner: roadmap, sprints, releases, priorización con métricas y A/B testing, y CI/CD en Google Cloud y AWS.',
    ],
    clients: [
      { name: 'DIA', logo: { kind: 'img', src: '/img/logos/dia.svg' } },
      { name: 'Uvesco', logo: { kind: 'img', src: '/img/logos/uvesco.png' } },
      { name: 'Ametller Origen', logo: { kind: 'img', src: '/img/logos/ametller-origen.svg', dark: '/img/logos/ametller-origen-dark.svg' } },
      { name: 'CrossFit', logo: { kind: 'img', src: '/img/logos/crossfit.svg', dark: '/img/logos/crossfit-dark.svg' } },
      { name: 'DRG4FOOD', logo: { kind: 'img', src: '/img/logos/drg4food.png', dark: '/img/logos/drg4food-dark.png' } },
    ],
    stack: ['TypeScript', 'Mastra', 'Vertex AI', 'OpenAI', 'Pub/Sub', 'Firestore', 'BigQuery', 'Cloud Build', 'AWS'],
  },
  {
    id: 'gelvez', company: 'Gelvez Distribuciones', logo: { kind: 'img', src: '/img/logos/gelvez.png', dark: '/img/logos/gelvez-dark.png' },
    role: 'Auxiliar TIC · Desarrollador Full-Stack (prácticas)',
    start: '2023-11', dates: 'nov 2023 → jul 2024', place: 'Cúcuta, Colombia · presencial', active: false,
    metrics: [
      { value: 'Django', label: 'intranet empresarial' },
      { value: 'Flask', label: 'API de inversiones' },
      { value: 'React', label: 'dashboard de monitoreo' },
    ],
    summary: 'Distribuidora de consumo masivo con procesos administrativos manuales que consumían horas cada semana.',
    did: [
      'Automaticé la entrega de reportes a proveedores con Python, Selenium y Playwright.',
      'Automaticé la validación masiva de socios comerciales contra bases de datos públicas, cumpliendo el Anexo 1.9 de la DIAN (Python, Selenium).',
      'Diseñé las plantillas de migración para la puesta en marcha de un nuevo ERP, y migré la documentación de clientes de OneDrive a SharePoint con Power Automate.',
      'Desarrollé una intranet en Django que redujo la dependencia del ERP y los costos operativos.',
      'Construí una API REST de solicitudes de inversión (Flask + Firebase) y un dashboard de monitoreo (Vite + React).',
    ],
    stack: ['Python', 'Django', 'Flask', 'Firebase', 'Selenium', 'Playwright', 'Vite', 'React'],
  },
];

export const projects: Project[] = [
  /* ---------------- laborales ---------------- */
  {
    id: 'qdd', scope: 'work', job: 'southteams', org: 'Southteams · Qurable', name: 'QDD', kind: 'Tooling IA', role: 'Creador y principal contribuidor (404 de 523 commits)',
    icon: '/img/icons/qdd.webp', cover: '/img/shots/qdd-companion-video-titulo.webp', color: '#5B4FD6', banner: 'cover',
    short: 'Capa operativa de agentes para el equipo de SKY',
    desc: 'Workflows, capabilities y agentes de auditoría que llevan el trabajo del equipo de SKY del ticket a la release. Se instala como plugin en Claude Code, Codex y OpenCode.',
    did: [
      'Diseñé y construí la mayor parte: 404 de los 523 commits entre julio y noviembre de 2026.',
      'Más de 50 skills de entrega: tomar el ticket, planificar, implementar, verificar, evidencia de QA, MR, release y despliegue.',
      'Agentes de auditoría de solo lectura (contratos, evidencia de QA, móvil y release) que separan hechos confirmados, inferencias y evidencia faltante.',
      'Memoria del equipo empaquetada que se siembra una vez en la memoria nativa del agente (Codex, Claude o Engram), sin costo de contexto en cada uso.',
      'QDD Companion: el contexto del equipo en el navegador, junto a Jira, GitLab y GitHub, con un companion local en Python.',
      'Autor del manual de uso de QDD Loyalty (v1.18.0).',
    ],
    stack: ['Claude Code', 'Codex', 'OpenCode', 'MCP', 'Python', 'Jira', 'GitLab', 'Confluence'],
  },
  {
    id: 'magnar-agents', scope: 'work', job: 'magnar', org: 'Magnar', name: 'Sistema de agentes de Magnar', kind: 'Tooling IA', role: 'Autor',
    icon: '/img/marks/magnar-mark.svg', cover: '/img/shots/magnar-mapa-grafo.webp', color: '#111111', banner: 'cover',
    short: '11 agentes y 47 skills para scraping y mantenimiento',
    desc: 'Marketplace local de plugins de Claude Code con el que hago todo el trabajo de Magnar: construir scrapers, atender tickets y mantener en producción los que fallan.',
    did: [
      'Mesa de control conversacional que clasifica cada pedido y lo enruta entre 11 agentes y 47 skills.',
      'Gates obligatorios por hook: nada se commitea ni se ingiere sin reproducir el CI, y toda escritura a la plataforma pasa por una guarda con confirmación y auditoría.',
      'Ciclo de mantenimiento como comandos: diagnóstico, solicitud, validar fix, publicar, verificar en producción y reabrir.',
      'Tableros locales en vivo: mapa del sistema, pulso de ingesta, reglas y memoria.',
      'Doctrina de 138 decisiones registradas y una compuerta que contrasta las cifras de la documentación con lo que hay en disco.',
    ],
    stack: ['Claude Code', 'plugins', 'skills', 'hooks', 'Node.js', 'CloudWatch'],
  },
  {
    id: 'genie', scope: 'work', job: 'gundo', org: 'GUNDO Health and Food', name: 'GENIE y Gundo Fitness', kind: 'Producto IA', role: 'Full-Stack y Product Owner',
    icon: '/img/marks/gundo-mark.png', cover: '/img/shots/gundo-fitness-landing.webp', color: '#3FA34D', banner: 'cover',
    short: 'Nutrición y entrenamiento personalizados con IA',
    desc: 'Plataforma white-label de salud y nutrición para Uvesco, Ametller Origen, DIA y CrossFit. GENIE ganó el programa europeo DRG4FOOD (300.000 €).',
    did: [
      'Motor multiagente de planes de entrenamiento y nutrición con Mastra, Vertex AI y OpenAI, procesado de forma asíncrona sobre Pub/Sub.',
      'GENIE: nutrición personalizada desde datos genéticos, de microbioma y bioquímicos, con ADN Institut e i3S.',
      'Escáner de platos por visión por computador: ingredientes, macronutrientes y alertas según el perfil.',
      'Cuestionarios adaptativos con lógica ramificada y módulos de administración e IAM.',
    ],
    stack: ['TypeScript', 'Mastra', 'Vertex AI', 'OpenAI', 'Pub/Sub', 'Firestore'],
  },
  {
    id: 'qurable-agents', scope: 'work', job: 'southteams', org: 'Southteams · Qurable', name: 'Agentes de Qurable', kind: 'Tooling IA', role: 'Autor',
    icon: '/img/logos/qurable.png', cover: '/img/shots/qurable-sala-de-maquinas-grafo.webp', color: '#7B4FD6', banner: 'cover',
    short: 'El oficio de lealtad, empaquetado para agentes',
    desc: 'Marketplace privado de plugins de Claude Code para el trabajo con Qurable, aislado por sesión para que el contexto de un empleador nunca entre en el del otro.',
    did: [
      'Plugin de oficio portable: ledgers, idempotencia, concurrencia y dinero.',
      'Plugin de contexto local: empresa, arquitectura, convenciones y el ciclo de trabajo.',
      'Agentes especializados (adversary, breaker, designer, verify) que atacan un diseño antes de construirlo.',
      'Sala de máquinas: tablero con el grafo de agentes, skills y referencias, extraído del texto real de cada archivo.',
    ],
    stack: ['Claude Code', 'plugins', 'skills', 'agentes'],
  },
  {
    id: 'transmaquiobras', scope: 'work', org: 'TRANSMAQUIOBRAS SAS · cliente', name: 'Transmaquiobras', kind: 'Software de gestión', role: 'Autor · jun – ago 2026',
    icon: '/img/icons/transmaquiobras.webp', cover: '/img/shots/transmaquiobras-caso-de-negocio.webp', color: '#0F3A7A', banner: 'cover',
    short: 'De Excel y WhatsApp a un solo sistema',
    desc: 'Software de gestión para una empresa de transporte y maquinaria pesada de Cúcuta y Aguachica: conductores, administración, nómina y métricas en un solo lugar.',
    did: [
      'Prototipo funcional para digitalizar una operación que vivía en Excel y WhatsApp.',
      'Captura de recibos por foto con OCR intercambiable (Tesseract, Ollama local, Groq o Gemini) y un formulario prellenado para revisar y confirmar.',
      'Caso de negocio y comparativo antes y después con supuestos editables, para presentar el valor a la gerencia.',
      'Panel de presentación para cambiar vista, rol simulado, volumen de datos y motor de OCR en vivo.',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Tesseract', 'Ollama', 'OCR'],
  },
  {
    id: 'gelvez-intranet', scope: 'work', job: 'gelvez', org: 'Gelvez Distribuciones', name: 'Intranet de Gelvez', kind: 'Intranet empresarial', role: 'Autor',
    icon: '/img/logos/gelvez.png', cover: '/img/shots/gelvez-intranet.webp', color: '#B3121B', banner: 'cover',
    short: 'Pedidos, cartera, compras y tesorería sin depender del ERP',
    desc: 'Intranet en Django para consultar sábana de ventas, pedidos, facturas, clientes, cartera y tesorería, que redujo la dependencia del ERP.',
    did: [
      'Módulos de consulta para comercial, contabilidad, compras, cartera y tesorería.',
      'Alertas y auditoría dentro de la misma intranet.',
      'Automatizaciones de reportes y validación masiva de socios con Python y Playwright.',
    ],
    stack: ['Python', 'Django', 'Playwright'],
  },
  /* ---------------- personales ---------------- */
  {
    id: 'shelvora', scope: 'personal', name: 'Shelvora', kind: 'App Android', role: 'Autor', icon: '/img/proj/shelvora-icon.svg', color: '#E9A23B', banner: 'icon',
    short: 'Lector offline-first con traducción on-device',
    desc: 'Lector privado de novelas web que funciona sin conexión y traduce capítulos en el propio teléfono.',
    did: [
      'Almacenamiento direccionado por contenido: la biblioteca no se rompe cuando una fuente cambia o desaparece.',
      'Traducción híbrida: online cuando hay red, con modelo on-device de respaldo y glosario para mantener nombres coherentes entre capítulos.',
      'Motor multi-fuente con 7 sitios.',
      'Desarrollo plan-first orquestado por IA: 16 fases, una rama y un PR por fase.',
    ],
    stack: ['React Native (New Arch.)', 'Hermes', 'Expo', 'TypeScript'], url: 'https://shelvora.rickdev.tech/',
  },
  {
    id: 'rival', scope: 'personal', name: 'Rival', kind: 'App fitness', role: 'Contribuidor principal (~94% de la actividad)', icon: '/img/proj/rival-icon.png', color: '#F2C200', banner: 'icon',
    extraIcons: ['/img/proj/rival-gold.svg', '/img/proj/rival-radiant.svg'],
    short: 'Ranking de gimnasio con ELO',
    desc: 'App de gimnasio con ranking competitivo entre atletas, por temporadas y divisiones.',
    did: [
      'Sistema de ELO calculado a partir del Wilks score, con escalera de rangos por temporadas.',
      'PR que introdujo la arquitectura AI-first spec-driven sobre la que corre todo el codebase.',
      'Monorepo con Turborepo: app móvil en Expo y API en Hono con Drizzle sobre PostgreSQL.',
      'Suscripciones con RevenueCat y autenticación con BetterAuth.',
    ],
    stack: ['Expo', 'Hono', 'Drizzle', 'PostgreSQL', 'BetterAuth', 'RevenueCat', 'Turborepo'],
  },
  {
    id: 'tower', scope: 'personal', name: 'The Tower Still Burns', kind: 'Juego · Godot', role: 'Desarrollador · Páramo Interactive',
    icon: '/img/icons/tower.webp', cover: '/img/shots/tower-fog-tower-lantern-day.webp', color: '#FF7A1A', banner: 'cover',
    short: 'Co-op hacia una torre en llamas, estética PS1',
    desc: 'Caminata cooperativa, acogedora e inquietante, hacia una torre en llamas, con estética de la era PS1/PS2.',
    did: [
      'Juego cooperativo en Godot 4 con look de baja resolución inspirado en PS1/PS2.',
      'Pipeline de arte y texturas propio (atlas de naturaleza, cielos día/noche).',
      'Proyecto antes llamado Ricardini Bananini, hoy en el estudio Páramo Interactive.',
    ],
    stack: ['Godot 4', 'GDScript'],
  },
  {
    id: 'cbrain', scope: 'personal', name: 'gamedev-brain (cbrain)', kind: 'Estudio de agentes', role: 'Autor',
    icon: '/img/icons/cbrain.webp', cover: '/img/shots/gamedev-brain-departments-graph.webp', color: '#9CC5A1', banner: 'paper',
    short: 'Un estudio de videojuegos simulado con agentes',
    desc: 'Estudio de juegos simulado sobre Claude Code que lleva un juego de la idea al lanzamiento con cinco criterios: producto, mercado, ejecución, distribución y rentabilidad.',
    did: [
      'El fundador fija una carta (presupuesto, plazos, plataformas, límites); dentro de ella el estudio trabaja solo y se detiene ante decisiones sin vuelta atrás.',
      'Un productor corta el trabajo en contratos, cada agente corre en el modelo que le corresponde y otro agente o una herramienta valida cada resultado con evidencia.',
      'Greenlights por etapa sobre los cinco criterios deciden si el juego merece la siguiente unidad de tiempo y dinero.',
      'Oficina en vivo con el plano del estudio: departamentos, agentes, encargos y handoffs. Un solo comando, cbrain, para operarlo.',
    ],
    stack: ['Claude Code', 'plugins', 'skills', 'hooks', 'Node.js', 'Godot 4'],
  },
  {
    id: 'chunk', scope: 'personal', name: 'chunk-learner', kind: 'App de idiomas', role: 'Autor', icon: '/img/shots/chunk-learner-icono.webp', color: '#2F7D6B', banner: 'icon',
    short: 'Inglés por frases clave con práctica de voz',
    desc: 'App para aprender inglés con ciclos diarios de frases clave (chunks), roleplays de conversación y monólogos hablados.',
    did: [
      'Ciclos de práctica con plan, sesión del día y progreso.',
      'Roleplays de conversación con respuesta por voz y puntuación de pronunciación.',
      'Monólogos guiados con transcripción automática de lo que dices.',
    ],
    stack: ['Expo', 'React Native', 'TypeScript', 'expo-speech'],
  },
  {
    id: 'orq', scope: 'personal', name: 'Orquestador de agentes', kind: 'Tooling IA', role: 'Autor · uso diario', icon: null, color: '#5CE1E6', banner: 'glyph',
    short: '38 skills · 11 agentes · gates de CI',
    desc: 'La plataforma con la que desarrollo cada día: una capa sobre Claude Code que dirige investigación, construcción, revisión y entrega.',
    did: [
      'Gates mecánicos que reproducen el CI en local; un hook bloquea el commit si el gate no está verde.',
      'Un agente auditor lee el prompt real del CI del repositorio: cuando el equipo cambia sus reglas, cambia el gate.',
      'Loop autónomo con compuertas y reentrada: solo se detiene ante preguntas de alcance o hallazgos que cambian el problema.',
      'Variante para producción con lectura de monitores en solo lectura y redacción de credenciales.',
    ],
    stack: ['Claude Code', 'skills', 'hooks', 'subagentes'],
  },
];

export const skills: SkillBranch[] = [
  {
    id: 'ia', code: 'IA', name: 'Agentes de IA', tools: ['Mastra', 'Vertex AI', 'OpenAI', 'Gemini Vision', 'Claude Code', 'MCP'],
    desc: 'Diseño sistemas multiagente que corren en producción y desarrollo con agentes que yo mismo construyo y gobierno con gates.',
    uses: [
      { ref: 'genie', how: 'Motor multiagente de planes de nutrición y entrenamiento con Mastra, Vertex AI y OpenAI.' },
      { ref: 'qdd', how: 'Capa operativa de agentes del equipo de SKY: más de 50 skills y agentes de auditoría.' },
      { ref: 'magnar-agents', how: '11 agentes y 47 skills para scraping, tickets y mantenimiento.' },
      { ref: 'qurable-agents', how: 'Plugins de oficio y de contexto para el trabajo con Qurable.' },
      { ref: 'cbrain', how: 'Estudio de juegos operado por agentes, con greenlights y un verificador independiente.' },
      { ref: 'orq', how: 'Orquestador diario sobre Claude Code: 38 skills, 11 agentes y gates de CI.' },
    ],
  },
  {
    id: 'fe', code: 'FE', name: 'Frontend', tools: ['Vue 3', 'React', 'Next.js', 'Astro', 'Expo', 'Three.js', 'single-spa'],
    desc: 'Interfaces web y móviles a escala de organización: microfrontends, sitios multilenguaje y apps nativas.',
    uses: [
      { ref: 'southteams', how: 'Microfrontends single-spa con Vue 3 y un monolito en Astro con ButterCMS para SKY Plus.' },
      { ref: 'shelvora', how: 'App Android con React Native (New Architecture) y Expo.' },
      { ref: 'transmaquiobras', how: 'Prototipo de gestión en Next.js 16.' },
      { ref: 'rival', how: 'App móvil en Expo.' },
      { ref: 'chunk', how: 'App de idiomas en Expo con práctica por voz.' },
    ],
  },
  {
    id: 'be', code: 'BE', name: 'Backend', tools: ['Node.js', 'NestJS', 'Hono', 'FastAPI', 'Django', 'RabbitMQ', 'Pub/Sub'],
    desc: 'Servicios con contratos claros: microservicios con Clean Architecture, mensajería asíncrona y APIs pequeñas y rápidas.',
    uses: [
      { ref: 'southteams', how: 'Microservicios NestJS con RabbitMQ en el ecosistema de lealtad.' },
      { ref: 'genie', how: 'Procesamiento event-driven sobre Google Cloud Pub/Sub.' },
      { ref: 'rival', how: 'API en Hono con Drizzle sobre PostgreSQL.' },
      { ref: 'gelvez-intranet', how: 'Intranet en Django y API en Flask.' },
    ],
  },
  {
    id: 'dat', code: 'DAT', name: 'Datos a escala', tools: ['Playwright', 'Puppeteer', 'Cheerio', 'Tesseract', 'PostgreSQL', 'BigQuery'],
    desc: 'Adquisición de datos de fuentes opacas: ingeniería inversa de APIs, antibot, OCR de PDF y claves de identidad que no pierden registros.',
    uses: [
      { ref: 'magnar', how: '10 scrapers nuevos, 87 casos de mantenimiento y una carga de 504.801 documentos en 21 h.' },
      { ref: 'transmaquiobras', how: 'OCR de recibos con Tesseract u Ollama.' },
      { ref: 'gundo', how: 'Analítica de producto en BigQuery.' },
      { ref: 'gelvez', how: 'Automatización de reportes y validación masiva con Selenium y Playwright.' },
    ],
  },
  {
    id: 'ops', code: 'OPS', name: 'Cloud y DevOps', tools: ['AWS Fargate', 'S3', 'Google Cloud', 'Docker', 'GitHub Actions', 'GitLab CI'],
    desc: 'Llevo lo que construyo hasta producción y lo opero: contenedores, CI/CD y diagnóstico desde logs.',
    uses: [
      { ref: 'magnar', how: 'Corridas en AWS Fargate, diagnóstico con CloudWatch y ECS, CI en GitHub Actions.' },
      { ref: 'gundo', how: 'Dueño del CI/CD en Google Cloud y AWS como Product Owner.' },
      { ref: 'southteams', how: 'Pipelines en GitLab CI y verificación en QA y Stage.' },
    ],
  },
];

/** Actividad real (GitHub GraphQL y API de GitLab, 13 nov 2026). */
export const activity = {
  total: 2786,
  weeks: [[0,11,1,4,15,6,0],[0,1,0,0,8,1,0],[0,0,0,45,96,68,161],[39,100,0,1,7,51,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[3,10,2,5,1,7,4],[9,0,32,9,0,3,0],[0,0,0,0,10,2,4],[0,0,0,0,0,0,3],[16,15,0,0,0,4,0],[0,0,0,0,0,3,3],[0,5,5,4,3,0,0],[0,0,4,0,0,0,0],[0,0,4,20,25,10,0],[3,10,2,5,15,14,6],[0,9,9,20,12,2,13],[3,18,11,8,13,7,1],[0,12,14,52,8,0,4],[0,7,0,11,0,1,0],[0,1,1,1,2,4,0],[0,0,0,8,86,88,87],[65,71,95,55,24,0,0],[0,3,1,0,2,2,36],[10,5,27,14,2,31,3],[8,1,5,1,3,0]] as number[][],
  sources: [
    {
      name: 'GitHub', handle: 'Ricardoarsv', url: 'https://github.com/Ricardoarsv',
      stats: [['2.786', 'contribuciones en el año'], ['2.199', 'en repos privados de trabajo'], ['559', 'commits públicos'], ['48', 'repositorios propios']],
    },
    {
      name: 'GitLab · SKY Airline', handle: 'vía Southteams', url: null,
      stats: [['55', 'merge requests desde sep 2026'], ['45', 'mergeados'], ['18', 'repos de SKY tocados'], ['446', 'eventos de actividad']],
      bars: [['web-retail', 21], ['sky-app', 6], ['accounts-bl', 6], ['app-accounts', 4], ['app-retail-header', 3]],
    },
    {
      name: 'Repos de trabajo', handle: 'Magnar y QDD', url: null,
      stats: [['72', 'PRs en Magnar'], ['521', 'commits en esos PRs'], ['404', 'commits en QDD'], ['77 %', 'del total de QDD']],
    },
  ] as { name: string; handle: string; url: string | null; stats: [string, string][]; bars?: [string, number][] }[],
};

/** ¿Usa este trabajo o proyecto la tecnología? Comparación tolerante (Vue 3 ≈ Vue, AWS ≈ AWS Fargate). */
export function usesTool(stack: string[], tool: string): boolean {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const n = norm(tool);
  return stack.some((x) => {
    const m = norm(x);
    return m === n || (m.length > 2 && n.length > 2 && (m.startsWith(n) || n.startsWith(m)));
  });
}

/* ---------- capturas reales (repos y sitios propios) ---------- */
const shot = (file: string, alt: string, fit?: 'cover' | 'contain'): Shot => ({ src: '/img/shots/' + file + '.webp', alt, caption: alt, fit });
const SHOTS: Record<string, Shot[]> = {
  qdd: [
    shot('qdd-sky-presentacion-portada', 'QDD Sky: capa operativa para agentes de IA del equipo.'),
    shot('qdd-sky-presentacion-componentes', 'Qué contiene QDD: reglas, skills, agentes, scripts y workflows.'),
    shot('qdd-sky-presentacion-workflow', 'Ejemplo de ejecución de un ticket en seis etapas.'),
    shot('qdd-companion-arquitectura', 'Arquitectura de QDD Companion: panel en el navegador y companion local.'),
    shot('qdd-sky-guia-aportes', 'Guía interactiva para aportar piezas a QDD.'),
    shot('qdd-loyalty-manual-portada', 'Manual de uso de QDD Loyalty, versión 1.18.0.', 'contain'),
  ],
  'magnar-agents': [
    shot('magnar-mapa-grafo', 'Mapa del sistema: skills, agentes, herramientas y hooks.'),
    shot('magnar-tablero-pulso', 'El pulso: ingesta diaria, colecciones y batches.'),
    shot('magnar-ciclo-skills', 'El ciclo: las skills del flujo de scraping en orden.'),
    shot('magnar-reglas', 'Reglas del sistema con severidad y origen.'),
  ],
  genie: [shot('gundo-fitness-landing', 'Gundo Fitness: planes de entrenamiento, nutrición y recetas en un solo lugar.')],
  'qurable-agents': [shot('qurable-sala-de-maquinas-grafo', 'Sala de máquinas: métricas y grafo del sistema de agentes.')],
  transmaquiobras: [
    shot('transmaquiobras-caso-de-negocio', 'Caso de negocio: beneficio estimado frente a seguir con Excel.'),
    shot('transmaquiobras-antes-vs-despues', 'Antes y después: Excel y WhatsApp frente a un solo sistema.'),
    shot('transmaquiobras-captura-recibo', 'Captura de recibo por foto con lectura OCR.'),
    shot('transmaquiobras-panel-demo', 'Panel de presentación: vista, rol, volumen y motor de OCR.'),
  ],
  'gelvez-intranet': [shot('gelvez-intranet', 'Menú principal de la intranet de Gelvez Distribuciones.')],
  shelvora: [
    shot('shelvora-landing-hero-desktop', 'Landing de Shelvora en shelvora.rickdev.tech.'),
    shot('shelvora-landing-traduccion', 'Traducción de tres formas, con modelo on-device de respaldo.'),
    shot('shelvora-landing-progreso-lectura', 'Seguimiento de lectura: tiempo, capítulos y racha.'),
    shot('shelvora-landing-temas', '11 temas y un lector configurable.'),
    shot('shelvora-app-pantallas', 'Idioma, configuración y estadísticas en la app.', 'contain'),
  ],
  tower: [
    shot('tower-logo-dark', 'The Tower Still Burns.', 'contain'),
    shot('tower-fog-tower-lantern-day', 'Camino con niebla hacia la torre, farol en mano.'),
    shot('tower-card-keeper-offer', 'La tienda del mercader.'),
    shot('tower-village-night-lights', 'La aldea de noche.'),
    shot('tower-house-night-lantern', 'For those who went on.'),
  ],
  cbrain: [
    shot('gamedev-brain-office-floor', 'Oficina en vivo: departamentos, agentes, encargos y handoffs.'),
    shot('gamedev-brain-directory', 'Directorio del estudio: 7 oficinas, 31 agentes y 64 skills.'),
    shot('gamedev-brain-departments-graph', 'Grafo de departamentos alrededor del piso ejecutivo.'),
    shot('gamedev-brain-chain-of-command', 'Cadena de mando y niveles de autonomía.'),
  ],
  chunk: [
    shot('chunk-learner-hoy-plan-progreso', 'Sesión del día, plan del ciclo y progreso.', 'contain'),
    shot('chunk-learner-roleplay-voz', 'Roleplay por voz con puntuación de pronunciación.', 'contain'),
  ],
};
for (const item of [...jobs, ...projects]) if (SHOTS[item.id]) item.shots = SHOTS[item.id];
