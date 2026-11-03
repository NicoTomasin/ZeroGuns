<div align="center">

# 🔫 ZERO GUNS — Drops

**Landing de agradecimiento post-compra para cada drop de la marca de ropa ZERO GUNS.**

[![Sitio](https://img.shields.io/badge/sitio-zero--guns.vercel.app-000000?style=flat-square&logo=vercel&logoColor=white)](https://zero-guns.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
[![License: Proprietary](https://img.shields.io/badge/License-Propietaria-red.svg?style=flat-square)](LICENSE)

**[👉 Ver sitio](https://zero-guns.vercel.app)** · **[Instagram](https://www.instagram.com/zeroguns/)**

</div>

---

## 📖 Sobre el proyecto

Cada drop de ZERO GUNS tiene su propia página (`/<drop>`) con un mensaje de agradecimiento, el logo de la marca, los colores de la colección y un video. Las páginas se generan **estáticamente** a partir de un único archivo JSON, así que sumar un drop nuevo no requiere tocar código.

La home (`/`) muestra un mensaje de "Estamos construyendo" con link al Instagram de la marca.

## ✨ Funcionalidades

- ⚡ **Generación estática (SSG)** con `generateStaticParams`: una página por drop.
- 🎨 **Theming por drop**: cada página toma su color desde la configuración.
- 🎥 **Video** de la colección embebido.
- 🚫 Las rutas que no existen en la configuración devuelven 404 (`dynamicParams = false`).
- 🔤 Tipografía custom (Akira).

## ➕ Agregar un drop

1. Sumá una entrada en [`public/data.json`](public/data.json):

   ```json
   {
     "alita": {
       "title": "GRACIAS POR TU COMPRA",
       "subtitle": "ZERO GUNS",
       "color": "#fbe4d8"
     }
   }
   ```

2. Subí el video como `public/media/<drop>.mp4` (por ejemplo `public/media/alita.mp4`).
3. Hacé el build: la nueva página queda disponible en `/<drop>`.

## 🚀 Cómo correrlo

Requisitos: Node.js 18.17+.

```bash
git clone https://github.com/NicoTomasin/ZeroGuns.git
cd ZeroGuns
npm install
npm run dev
```

Abrí <http://localhost:3000>.

| Script | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | Linter (ESLint) |

## 🗂️ Estructura

```
app/
├── page.tsx              # Home: "Estamos construyendo"
├── [drop]/page.tsx       # Página de cada drop (SSG)
├── layout.tsx
└── components/           # Title, Subtitle, Logo, Media
public/
├── data.json             # Configuración de los drops
└── media/                # Videos de cada drop
fonts/Akira.otf
```

## 🤝 Contribuir

Este proyecto no es open source. Si encontraste un problema o tenés una propuesta, revisá la [guía de contribución](CONTRIBUTING.md).

## 📄 Licencia

© Nico Tomasin. **Todos los derechos reservados.** El código se publica solo como referencia y portfolio; ver [LICENSE](LICENSE). La marca ZERO GUNS y su material gráfico pertenecen a sus respectivos dueños.
