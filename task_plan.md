# task_plan.md — Plan de Tareas por Fase BLAST

---

## Fase 0: Inicialización
**Pre-requisito:** Archivos .md creados y listos.

- [x] Crear proyecto Next.js con TypeScript, Tailwind, ESLint, App Router (SOP-007)
- [x] Colocar los 6 archivos .md en la raíz del proyecto
- [x] Configurar `.gitignore` (env, node_modules, .tmp, .DS_Store)
- [x] Configurar Tailwind con colores custom (brand, dark, light, text-primary, text-secondary)
- [x] Instalar dependencias: `lucide-react`
- [x] Configurar Google Fonts: Playfair Display + DM Sans en layout.tsx
- [x] Crear estructura de carpetas: components/sections, components/ui, data, lib
- [x] Crear `data/site-config.ts` con toda la data centralizada
- [x] Colocar logo en `public/logo-abogadospanama.png`
- [x] Git init + primer commit
- [ ] `gh repo create abogados-panama-redesign --public --source=. --push`
- [x] Crear rama develop: `git checkout -b develop && git push -u origin develop`
- [ ] Verificar localhost:3000 carga sin errores (Playwright)

---

## Fase 1: Blueprint (Estructura base)
**Pre-requisito:** Fase 0 completada.

- [x] Crear layout.tsx global: meta tags, fonts, body wrapper
- [x] Crear page.tsx con placeholder de todas las secciones (orden correcto)
- [x] Implementar Schema markup JSON-LD: LegalService + Attorney
- [x] Crear componente Button reutilizable (variantes: primary/naranja, outline/blanco)
- [x] Crear componente Badge reutilizable
- [x] Crear componente SectionWrapper (manejo de fondos alternados y padding)
- [x] Crear componente Overline (label uppercase con tracking)
- [x] Crear utilidad de WhatsApp link generator (con mensaje pre-armado)

---

## Fase 2: Links (Integraciones)
**Pre-requisito:** Fase 1 completada.

- [x] Verificar Google Fonts cargando correctamente (display:swap)
- [x] Verificar Lucide React instalado y funcionando (importar un icono de prueba)
- [x] Verificar link WhatsApp funciona: wa.me/50761228024?text=...
- [x] Verificar logo carga desde /public

---

## Fase 3: Architect (Secciones — implementar en orden)
**Pre-requisito:** Fase 2 completada.

Cada sección sigue SOP-006. Implementar en orden de aparición:

- [x] **S1: TopBar** — Barra superior con horario, teléfono, selector idioma
- [x] **S2: Navbar** — Navegación sticky con logo, links, CTA, hamburger mobile
- [x] **S3: Hero** — 2 columnas: texto + CTAs | tarjeta social proof
- [x] **S4: StatsBar** — 4 estadísticas con números grandes
- [x] **S5: Services** — Grid 3x2 con 6 tarjetas de servicios
- [x] **S6: AboutAttorney** — Bio de Julissa Ortega con placeholder foto + badge
- [x] **S7: MediaBanner** — Franja "Visto en medios" con logos/nombres
- [x] **S8: CTASection** — CTA final con fondo oscuro y botones
- [x] **S9: Footer** — 4 columnas con links y contacto
- [x] **S10: WhatsAppFloat** — Botón flotante fijo en esquina inferior derecha
- [x] **Toast "Coming soon"** — Para selector de idioma English

---

## Fase 4: Stylize (Pulido visual)
**Pre-requisito:** Fase 3 completada (todas las secciones implementadas).

- [x] Implementar animaciones fade-up al scroll (Intersection Observer)
- [x] Implementar hover states en tarjetas de servicios (elevación + borde naranja top)
- [x] Implementar transiciones suaves en botones y links (300ms)
- [x] Verificar responsive completo en 375px, 768px, 1024px, 1280px
- [x] Verificar contraste de colores (accesibilidad WCAG)
- [x] Verificar tipografía: serif solo en H1/H2, sans en todo lo demás
- [x] Optimizar imágenes: lazy loading en logo
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
| 0 | Inicialización | 13 | 11 | 🟡 Casi completa |
| 1 | Blueprint | 8 | 8 | ✅ Completada |
| 2 | Links | 4 | 4 | ✅ Completada |
| 3 | Architect | 11 | 11 | ✅ Completada |
| 4 | Stylize | 9 | 7 | 🟡 Casi completa |
| 5 | Trigger | 6 | 0 | ⬜ Pendiente |
| **Total** | | **51** | **41** | **80%** |

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
