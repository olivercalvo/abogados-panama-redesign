# findings.md — Hallazgos, Constraints y Decisiones Técnicas

---

## Descubrimientos

| # | Fecha | Contexto | Hallazgo | Impacto | Acción |
|---|-------|----------|----------|---------|--------|
| 1 | Pre-dev | Análisis del sitio actual | El sitio actual tiene errores ortográficos y gramaticales en el copy | Todo el copy se reescribió y corrigió en productdesign.md | Usar exclusivamente el copy de productdesign.md, nunca copiar del sitio actual |
| 2 | Pre-dev | Estrategia de producto | El repo se diseña como template forkeable para productized service | La arquitectura debe priorizar configurabilidad: todo el contenido en un solo archivo de datos | Crear data/site-config.ts como única fuente de verdad de contenido |
| 3 | Pre-dev | Assets | No hay foto profesional de la Lic. Julissa Ortega disponible actualmente | La sección AboutAttorney usa placeholder | Implementar placeholder div oscuro 3:4 con texto. Reemplazar cuando esté disponible |
| 4 | Pre-dev | Assets | Logos de medios (NTN24, TVN) solo disponibles como imagen compuesta, no individuales | La franja de medios puede no tener logos SVG individuales | Usar texto estilizado como fallback si no se consiguen logos individuales |
| 5 | Pre-dev | Integración | Google Reviews API requiere Google Places API key y tiene costo | No se justifica para un demo/pitch | Hardcodear 228 reseñas y 5.0 estrellas. API real como add-on futuro |

---

## Constraints

| Constraint | Descripción | Impacto en desarrollo |
|------------|-------------|----------------------|
| Solo español v1 | No implementar i18n real, solo UI decorativa del selector | Simplifica scope, el selector English muestra toast |
| Sin backend | No hay formularios con envío, no hay APIs | Todos los CTAs son links directos (WhatsApp, tel) |
| Sin base de datos | Todo el contenido es estático | Data en site-config.ts, no necesita SSR dinámico |
| Vercel free tier | Límites de bandwidth y builds | Suficiente para demo/pitch, no para producción de alto tráfico |
| Repo público | El código es visible | No incluir secrets, credenciales, ni info sensible del cliente |
| Foto placeholder | No hay foto real de la abogada | Diseñar la sección para que funcione con y sin foto |

---

## Errores Encontrados

| # | Error | Causa | Solución | Estado |
|---|-------|-------|----------|--------|
| — | Sin errores registrados aún | — | — | — |

---

## Resultados de Tests

| # | Test | Resultado | Fecha | Notas |
|---|------|-----------|-------|-------|
| — | Sin tests ejecutados aún | — | — | — |

---

## Decisiones Técnicas

| # | Decisión | Opciones evaluadas | Elegida | Razón | Reversible |
|---|----------|--------------------|---------|-------|------------|
| 1 | Stack | Next.js vs HTML estático vs Astro | Next.js (App Router) | Stack principal del developer, escalable a multi-page, soporta productized service con forks | Sí (reimplementar) |
| 2 | Estilos | Tailwind vs CSS Modules vs styled-components | Tailwind CSS | Rapidez de desarrollo, custom theme, compatible con Next.js | Sí |
| 3 | Fuente de datos | JSON file vs TypeScript config vs CMS | TypeScript config (site-config.ts) | Type safety, autocompletado, fácil de forkear | Sí |
| 4 | Iconos | Lucide React vs Phosphor vs Heroicons | Lucide React | Amplia librería, tree-shakeable, buena integración React | Sí |
| 5 | Formulario de contacto | Form con email vs WhatsApp redirect | WhatsApp redirect | Refleja cómo opera el negocio realmente, simplifica scope | Sí (agregar form en fase 2+) |
| 6 | Reviews | API de Google Places vs hardcoded | Hardcoded | No justifica costo/complejidad para demo. API como add-on futuro | Sí |
| 7 | Hosting | Vercel vs Netlify vs hosting compartido | Vercel (free tier) | Preview URLs perfectas para pitch, auto-deploy, DX excelente | Sí |
| 8 | Repo visibilidad | Público vs privado | Público | Demo/pitch, se convierte en template. Sin info sensible | Sí (cambiar a privado) |
| 9 | Internacionalización | i18n real vs UI decorativa | UI decorativa | Solo español v1. Selector visible para demostrar escalabilidad | Sí (implementar i18n en fase 2) |
| 10 | Animaciones | Framer Motion vs Intersection Observer nativo | Intersection Observer nativo | Menos dependencias, suficiente para fade-up al scroll | Sí (migrar a Framer Motion si se necesita más) |
