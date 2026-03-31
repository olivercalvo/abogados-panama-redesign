# changelog.md — Historial de Cambios y Deploy Log

## Versionado

Formato: MAYOR.MENOR.PARCHE
- MAYOR: Cambios que rompen compatibilidad o rediseños completos
- MENOR: Features nuevos, secciones nuevas
- PARCHE: Fixes, ajustes de copy, correcciones visuales

---

## Historial de Cambios

### v0.2.1 — 2026-03-31
| Campo | Valor |
|-------|-------|
| Tipo | docs |
| Descripción | Verificación completa SOP-008: localhost:3000 HTTP 200, secciones IDs, Schema JSON-LD (2 scripts), WhatsApp links, logo, smooth scroll, linter 0 errores, npm audit 0 vulnerabilidades. Fases 0-4 completadas. |
| Archivos | task_plan.md, changelog.md |
| Impacto | Proyecto listo para Fase 5 (Deploy) |
| SOP | SOP-008 |

### v0.2.0 — 2026-03-31
| Campo | Valor |
|-------|-------|
| Tipo | feat |
| Descripción | Fase 2 (verificación integraciones) + Fase 4 (pulido visual): componente FadeUp con Intersection Observer, animaciones fade-up en Hero/StatsBar/Services/AboutAttorney/MediaBanner/CTASection, smooth scroll, hover states en tarjetas, transiciones 300ms en botones |
| Archivos | src/components/ui/FadeUp.tsx, src/components/sections/*, src/app/layout.tsx |
| Impacto | Animaciones al scroll, transiciones suaves, responsive verificado |
| SOP | SOP-006 |

### v0.1.0 — 2026-03-31
| Campo | Valor |
|-------|-------|
| Tipo | feat |
| Descripción | Implementar Fase 1 (Blueprint) y Fase 3 (Architect): componentes UI base (Button, Badge, SectionWrapper, Overline, SchemaMarkup) + 10 secciones completas (TopBar, Navbar, Hero, StatsBar, Services, AboutAttorney, MediaBanner, CTASection, Footer, WhatsAppFloat) + page.tsx integrado |
| Archivos | src/components/ui/*, src/components/sections/*, src/app/page.tsx |
| Impacto | Homepage completa y funcional con todas las secciones, Schema JSON-LD, responsive mobile-first |
| SOP | SOP-006 |

### v0.0.0 — 2025-XX-XX
| Campo | Valor |
|-------|-------|
| Tipo | config |
| Descripción | Creación de archivos de documentación BLAST y setup inicial Next.js 16 |
| Archivos | claude.md, productdesign.md, sop.md, changelog.md, task_plan.md, findings.md, layout.tsx, globals.css, site-config.ts |
| Impacto | Inicialización del proyecto |
| SOP | SOP-007 |

---

## Deploy Log

| Fecha | Hash Deployado | Hash Anterior (Rollback) | Resumen | Aprobó |
|-------|---------------|-------------------------|---------|--------|
| — | — | — | No hay deploys aún | — |

---

## Plantilla de Entrada

```
### vX.X.X — YYYY-MM-DD
| Campo | Valor |
|-------|-------|
| Tipo | feat / fix / docs / style / refactor / test / config |
| Descripción | Qué se hizo |
| Archivos | Archivos principales modificados |
| Impacto | Qué afecta al usuario o al sistema |
| SOP actualizado/creado | SOP-XXX (si aplica) |
```
