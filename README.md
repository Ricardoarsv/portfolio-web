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
