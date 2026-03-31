# changelog.md — Historial de Cambios y Deploy Log

## Versionado

Formato: MAYOR.MENOR.PARCHE
- MAYOR: Cambios que rompen compatibilidad o rediseños completos
- MENOR: Features nuevos, secciones nuevas
- PARCHE: Fixes, ajustes de copy, correcciones visuales

---

## Historial de Cambios

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
