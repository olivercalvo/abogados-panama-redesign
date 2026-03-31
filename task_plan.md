# task_plan.md — Plan de Tareas por Fase BLAST

---

## Fase 0: Inicialización
**Pre-requisito:** Archivos .md creados y listos.

- [ ] Crear proyecto Next.js con TypeScript, Tailwind, ESLint, App Router (SOP-007)
- [ ] Colocar los 6 archivos .md en la raíz del proyecto
- [ ] Configurar `.gitignore` (env, node_modules, .tmp, .DS_Store)
- [ ] Configurar Tailwind con colores custom (brand, dark, light, text-primary, text-secondary)
- [ ] Instalar dependencias: `lucide-react`
- [ ] Configurar Google Fonts: Playfair Display + DM Sans en layout.tsx
- [ ] Crear estructura de carpetas: components/sections, components/ui, data, lib
- [ ] Crear `data/site-config.ts` con toda la data centralizada
- [ ] Colocar logo en `public/logo-abogadospanama.png`
- [ ] Git init + primer commit
- [ ] `gh repo create abogados-panama-redesign --public --source=. --push`
- [ ] Crear rama develop: `git checkout -b develop && git push -u origin develop`
- [ ] Verificar localhost:3000 carga sin errores (Playwright)

---

## Fase 1: Blueprint (Estructura base)
**Pre-requisito:** Fase 0 completada.

- [ ] Crear layout.tsx global: meta tags, fonts, body wrapper
- [ ] Crear page.tsx con placeholder de todas las secciones (orden correcto)
- [ ] Implementar Schema markup JSON-LD: LegalService + Attorney
- [ ] Crear componente Button reutilizable (variantes: primary/naranja, outline/blanco)
- [ ] Crear componente Badge reutilizable
- [ ] Crear componente SectionWrapper (manejo de fondos alternados y padding)
- [ ] Crear componente Overline (label uppercase con tracking)
- [ ] Crear utilidad de WhatsApp link generator (con mensaje pre-armado)

---

## Fase 2: Links (Integraciones)
**Pre-requisito:** Fase 1 completada.

- [ ] Verificar Google Fonts cargando correctamente (display:swap)
- [ ] Verificar Lucide React instalado y funcionando (importar un icono de prueba)
- [ ] Verificar link WhatsApp funciona: wa.me/50761228024?text=...
- [ ] Verificar logo carga desde /public

---

## Fase 3: Architect (Secciones — implementar en orden)
**Pre-requisito:** Fase 2 completada.

Cada sección sigue SOP-006. Implementar en orden de aparición:

- [ ] **S1: TopBar** — Barra superior con horario, teléfono, selector idioma
- [ ] **S2: Navbar** — Navegación sticky con logo, links, CTA, hamburger mobile
- [ ] **S3: Hero** — 2 columnas: texto + CTAs | tarjeta social proof
- [ ] **S4: StatsBar** — 4 estadísticas con números grandes
- [ ] **S5: Services** — Grid 3x2 con 6 tarjetas de servicios
- [ ] **S6: AboutAttorney** — Bio de Julissa Ortega con placeholder foto + badge
- [ ] **S7: MediaBanner** — Franja "Visto en medios" con logos/nombres
- [ ] **S8: CTASection** — CTA final con fondo oscuro y botones
- [ ] **S9: Footer** — 4 columnas con links y contacto
- [ ] **S10: WhatsAppFloat** — Botón flotante fijo en esquina inferior derecha
- [ ] **Toast "Coming soon"** — Para selector de idioma English

---

## Fase 4: Stylize (Pulido visual)
**Pre-requisito:** Fase 3 completada (todas las secciones implementadas).

- [ ] Implementar animaciones fade-up al scroll (Intersection Observer)
- [ ] Implementar hover states en tarjetas de servicios (elevación + borde naranja top)
- [ ] Implementar transiciones suaves en botones y links (300ms)
- [ ] Verificar responsive completo en 375px, 768px, 1024px, 1280px
- [ ] Verificar contraste de colores (accesibilidad WCAG)
- [ ] Verificar tipografía: serif solo en H1/H2, sans en todo lo demás
- [ ] Optimizar imágenes: lazy loading en logo
- [ ] Verificar Core Web Vitals apuntando a 90+ (Lighthouse en DevTools)
- [ ] Verificación visual completa (SOP-008)

---

## Fase 5: Trigger (Deploy)
**Pre-requisito:** Fase 4 completada y aprobada.

- [ ] Ejecutar checklist pre-deploy completo (SOP-002, 15 pasos)
- [ ] Conectar repo a Vercel (import desde GitHub)
- [ ] Verificar auto-deploy desde main funciona
- [ ] Obtener preview URL de Vercel
- [ ] Verificar homepage en producción (URL de Vercel)
- [ ] Registrar deploy en changelog.md

---

## Resumen de Progreso

| Fase | Nombre | Tareas | Completadas | Estado |
|------|--------|--------|-------------|--------|
| 0 | Inicialización | 13 | 0 | ⬜ Pendiente |
| 1 | Blueprint | 8 | 0 | ⬜ Pendiente |
| 2 | Links | 4 | 0 | ⬜ Pendiente |
| 3 | Architect | 11 | 0 | ⬜ Pendiente |
| 4 | Stylize | 9 | 0 | ⬜ Pendiente |
| 5 | Trigger | 6 | 0 | ⬜ Pendiente |
| **Total** | | **51** | **0** | **0%** |

---

## Backlog (Features Futuros)

| Feature | Prioridad | Fase | Notas |
|---------|-----------|------|-------|
| Versión en inglés | Alta | 2 | Selector funcional, duplicar contenido en site-config |
| Google Reviews API real | Media | 2 | Widget dinámico. Add-on con costo para el cliente |
| Integración Calendly | Media | 2 | CTA "Agendar consulta" funcional |
| Blog con artículos SEO | Media | 3 | Contenido de migración y visas para posicionamiento |
| Páginas individuales por servicio | Baja | 3 | Expandir a multi-page |
| Multi-tenant template system | Baja | 4 | Configuración por cliente, panel admin |
| Chat widget alternativo | Baja | 3 | Tawk.to o similar |
