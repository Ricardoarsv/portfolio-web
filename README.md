# rickdev.tech

Portfolio de Ricardo Villanueva, Full-Stack Engineer. Un espacio de trabajo en mosaico: perfil, experiencia, proyectos, stack y actividad real de GitHub, con tema diurno y nocturno.

## Stack

- [Astro](https://astro.build) 7 con TypeScript estricto, salida estática.
- Sin framework de UI: el contenido se renderiza en HTML y `src/scripts/workspace.ts` añade la interacción (arranque, enfoque de paneles, buscador Ctrl K, resaltado cruzado del stack, capturas ampliadas y cambio de tema).
- Despliegue en Vercel (`vercel.json`).

## Estructura

```
src/data/portfolio.ts     todo el contenido: perfil, empresas, proyectos, stack y actividad
src/pages/index.astro     la página
src/components/Logo.astro logos de empresas (ícono a color, monocromo que sigue el tema, o placa)
src/scripts/workspace.ts  comportamiento del lado del cliente
src/styles/global.css     estilos y los dos temas
public/                   CV, logos, capturas, retrato pixel art e imagen para redes
```

Para cambiar textos, cifras o capturas solo hace falta editar `src/data/portfolio.ts`.

## Comandos

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + build a dist/
npm run preview
```

## Atajos del sitio

- `Ctrl K`: buscar empresa, proyecto o tecnología.
- `1` a `5`: enfocar un panel. `Esc`: volver al mosaico.

## Idiomas

- `/` en español y `/en/` en inglés, con `hreflang` en el `<head>` y en el sitemap.
- El contenido vive en español en `src/data/portfolio.ts`; `src/data/en.ts` traduce solo los textos por identificador. Los textos de la interfaz están en `src/i18n/ui.ts`.

## SEO y Google

- `robots.txt`, sitemap bilingüe (`/sitemap-index.xml`), canonical, Open Graph, Twitter Card y JSON-LD (Person, WebSite, ProfilePage).
- Google Analytics 4 y Search Console se activan con variables de entorno (ver `.env.example`); en Vercel van en **Settings → Environment Variables**:
  - `PUBLIC_GA_ID`: ID de medición `G-XXXXXXXXXX`.
  - `PUBLIC_GSC_VERIFICATION`: token de la meta `google-site-verification` (opcional si verificas por DNS).
- Eventos propios en GA4: `focus_pane`, `grid_view`, `select_job`, `select_project`, `search`, `view_screenshot`, `theme_change` y `language_change`, todos con `site_language`. Las descargas del CV y los enlaces externos los mide la medición mejorada de GA4.
