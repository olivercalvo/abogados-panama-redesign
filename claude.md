# claude.md — Constitución del Proyecto

## Identidad

| Campo | Valor |
|-------|-------|
| Nombre | abogados-panama-redesign |
| Carpeta | `abogados-panama-redesign/` |
| Descripción | Landing page de alto impacto para AbogadosPanamá.net (Bufete Ortega & Rivers). Demo/pitch que se envía como preview URL de Vercel al cliente. Template base para productized service de rediseño web. |
| Stack | Next.js 14+ (App Router), TypeScript, Tailwind CSS |
| Modelo AI | Claude (Anti-Gravity / Windsurf) |
| IDE | Anti-Gravity (Windsurf) |

---

## Blueprint

**North Star:** Crear una landing page profesional que al verla como preview de Vercel, el cliente quiera comprar el rediseño. A largo plazo, el repo se convierte en template forkeable para otros clientes del productized service.

**Descripción:** Rediseño completo de la homepage de AbogadosPanamá.net. Single-page con scroll suave entre secciones. Contenido 100% estático hardcoded. Canal de conversión: WhatsApp. Idioma: español (v1). El sitio actual no se toca — este es un proyecto paralelo de demo.

**Fuente de verdad:** Archivo `data/site-config.ts` centralizado con todo el contenido (copy, stats, testimonios, links, colores, metadatos). Esto es lo que se cambia por cliente en el modelo fork.

**Delivery:** Preview URL de Vercel (auto-deploy desde `main`).

**Reglas de negocio:**
1. Solo español en v1. Selector de idioma visible como UI decorativa (English → toast "Coming soon")
2. Sin formularios con backend. Sin APIs externas
3. WhatsApp es el ÚNICO canal de conversión real (wa.me/50761228024)
4. CTA secundario "Agendar consulta" como placeholder (link vacío o futuro Calendly)
5. Google Reviews hardcoded: 228 reseñas, 5.0 estrellas, 2-3 testimonios estáticos
6. Foto de Julissa Ortega como placeholder (div oscuro aspect-ratio 3:4)
7. Logo real disponible: `logo-abogadospanama.png`
8. Iconos: Lucide React

---

## Links — Integraciones

| Servicio | Propósito | Estado |
|----------|-----------|--------|
| Vercel | Hosting, auto-deploy desde main, preview URLs | Por configurar |
| GitHub | Repositorio: `abogados-panama-redesign` (público) | Por crear |
| Google Fonts | Playfair Display + DM Sans | Disponible |
| Lucide React | Iconos de servicios y UI | npm install |
| WhatsApp | CTA de conversión: wa.me/50761228024 | Link directo, sin API |
| Playwright MCP | Verificación automática de UI (22 tools, global en Anti-Gravity) | Activo |

---

## Configuración de Ambientes

| Concepto | Valor |
|----------|-------|
| URL de desarrollo | `localhost:3000` |
| URL de producción | `https://abogados-panama-redesign.vercel.app` (o slug asignado) |
| Base de datos desarrollo | N/A — no hay DB |
| Base de datos producción | N/A — no hay DB |
| Hosting | Vercel (free tier) |
| Comando dev | `npm run dev` |
| Comando build | `npm run build` |
| Package manager | npm |

---

## Reglas de Diseño

### Paleta de colores (constantes CSS/Tailwind)

| Nombre | Hex | Variable Tailwind | Uso |
|--------|-----|-------------------|-----|
| Naranja marca (primario) | #F29120 | `brand` | CTAs, acentos, highlights, iconos activos |
| Naranja hover | #F9A84A | `brand-hover` | Hover en botones y links |
| Naranja sutil | #FFF4E6 | `brand-subtle` | Fondos de tarjetas destacadas, badges |
| Negro profundo | #0A0A0A | `dark` | Background hero, footer, CTA final |
| Gris oscuro | #1A1A1A | `dark-secondary` | Fondos secundarios oscuros |
| Blanco | #FFFFFF | `white` | Texto sobre fondos oscuros, fondos claros |
| Gris claro (fondo) | #F7F7F5 | `light` | Background general, secciones claras |
| Gris texto | #4A4A4A | `text-primary` | Texto body |
| Gris secundario | #7A7A7A | `text-secondary` | Subtítulos, captions |

**Reglas de color:**
- Naranja #F29120 SOLO como acento — NUNCA como fondo de secciones completas
- Alternar secciones: blanco (#FFFFFF) → gris claro (#F7F7F5) → oscuro (#0A0A0A)
- Sobre fondo oscuro: texto blanco + acentos naranja
- Sobre fondo claro: texto gris oscuro + acentos naranja
- Links y CTAs siempre en naranja

### Tipografía

| Elemento | Fuente | Peso | Tamaño |
|----------|--------|------|--------|
| H1 | Playfair Display | 700 | 48-56px desktop, 32-36px mobile |
| H2 | Playfair Display | 700 | 36-40px desktop, 28px mobile |
| H3 | DM Sans | 600 | 22-24px |
| Body | DM Sans | 400 | 16px, line-height 1.7 |
| Labels / overlines | DM Sans | 700 | 12px, letter-spacing 2-3px, uppercase |
| Botones | DM Sans | 700 | 15px |
| Navegación | DM Sans | 500 | 14px |

**Regla:** Serif (Playfair Display) SOLO para H1 y H2. Todo lo demás en sans-serif (DM Sans). El contraste serif/sans transmite sofisticación legal.

### Responsive
- Mobile-first
- Breakpoints: 768px (tablet), 1024px (desktop)

### Animaciones
- Fade-up al scroll (Intersection Observer)
- Hover en tarjetas: elevación con sombra + borde naranja top 3px
- Transiciones: 300ms ease
- Performance target: 90+ PageSpeed

---

## Trigger — Deploy

| Campo | Valor |
|-------|-------|
| Tipo | Auto-deploy (Vercel escucha rama main) |
| Plataforma | Vercel |
| Repo | GitHub: `abogados-panama-redesign` (público) |
| Rama producción | `main` |
| Rama desarrollo | `develop` |

---

## Reglas de Desarrollo

1. SIEMPRE trabajar en la rama `develop`. Es la rama por defecto.
2. La rama `main` es PRODUCCIÓN. Vercel la escucha para auto-deploy.
3. NUNCA hacer push ni merge a `main` sin aprobación EXPLÍCITA del usuario.
4. Para features grandes: rama `feature/nombre` desde `develop`, mergear a `develop`.
5. Para hotfixes: rama `hotfix/nombre` desde `main`, mergear a `main` Y a `develop`.
6. NUNCA mergear feature branch directamente a `main`.

## Reglas de Variables de Entorno

1. Variables y secrets NUNCA se suben a Git
2. Antes del primer commit: verificar .env, .env.local, .env.production, .env*.local en .gitignore
3. Credenciales de desarrollo en `.env.local`
4. Credenciales de producción ÚNICAMENTE en el dashboard de Vercel
5. NUNCA sugerir cambios a variables de producción sin aprobación explícita
6. Si se detecta un secret en Git: alertar INMEDIATAMENTE para rotarlo

## Reglas de GitHub

1. Repo conectado a GitHub DESDE EL INICIO: `gh repo create abogados-panama-redesign --public --source=. --push`
2. Crear rama develop: `git checkout -b develop && git push -u origin develop`
3. Después de CADA cambio: commit + push A DEVELOP
4. Formato: `tipo: descripción clara en español` (feat, fix, docs, style, refactor, test, config)
5. UN cambio = UN commit. PROHIBIDO commits con múltiples cambios.
6. PROHIBIDO mensajes genéricos ("fix stuff", "update", "changes", "wip")
7. Verificar .env en .gitignore antes del primer commit
8. NUNCA commitear credenciales
9. Lock file (`package-lock.json`) DEBE estar commiteado
10. Linter antes de cada commit (si configurado)

## Reglas de Documentación

Después de CUALQUIER cambio, EN ESTE ORDEN:
1. Actualizar `changelog.md`
2. Actualizar `sop.md` si la lógica cambió
3. CREAR nuevo SOP si hay proceso nuevo
4. Actualizar `productdesign.md` si cambió un feature
5. Actualizar `task_plan.md`
6. Commit + push a develop

Si no actualizaste los .md, NO hagas commit.

## Reglas de Calidad y Verificación con Playwright

Antes de empezar y después de terminar CADA cambio, usar Playwright MCP para:
1. Abrir browser y navegar a `localhost:3000`
2. Verificar que la app funciona correctamente
3. Probar específicamente la funcionalidad que se tocó
4. Si detecta errores → ciclo Self-Annealing completo → solo reportar cuando funcione

## Self-Annealing (Ciclo de Reparación)

Cuando algo falla, seguir EN ORDEN — NUNCA adivinar ni improvisar:
1. **Analizar:** leer stack trace completo, entender la causa raíz
2. **Documentar:** registrar en `findings.md` ANTES de intentar arreglar
3. **Parchear:** aplicar fix mínimo necesario
4. **Testear:** verificar que funciona Y que no rompió otra cosa
5. **Actualizar SOP:** documentar el aprendizaje en `sop.md` para que NUNCA se repita
6. **Commit:** commitear fix + documentación actualizada

Si un error se repite porque no se documentó el aprendizaje, es falla de proceso.

## Checklist Pre-Deploy

1. Verificar rama develop
2. Linter sin errores
3. Build sin errores (`npm run build`)
4. Verificar app en local con Playwright MCP (localhost:3000)
5. Auditoría de seguridad (`npm audit`)
6. No hay secrets en código
7. `.env` en `.gitignore`
8. `package-lock.json` commiteado
9. Push a develop
10. Diff review al usuario
11. Aprobación explícita del usuario
12. Registrar hash de main antes del merge
13. Merge develop → main
14. Registrar en deploy log (changelog.md): fecha, hash, hash anterior, resumen, aprobador
15. Listar funcionalidades a probar en producción (URL de Vercel)

## Reglas de Conflicto

Si una instrucción contradice una regla:
1. Informar cuál regla
2. Preguntar: excepción o cambio permanente
3. Excepción: hacer sin modificar claude.md
4. Permanente: hacer Y actualizar claude.md
5. Registrar en findings.md

## Pausa Obligatoria

DETENERSE y pedir confirmación ANTES de:
- Merge a main
- Modificación de env vars de producción
- Cualquier operación sin rollback fácil

## ❌ PROHIBIDO

1. NUNCA push/merge a main sin aprobación
2. NUNCA código sin leer SOP
3. NUNCA commit sin actualizar .md
4. NUNCA hardcodear credenciales
5. NUNCA tocar env vars de producción sin aprobación
6. NUNCA reportar un cambio como terminado sin verificar con Playwright que la app funciona
7. NUNCA borrar SOP sin preguntar
8. NUNCA ignorar error
9. NUNCA múltiples cambios en un commit
10. NUNCA lock file en .gitignore
11. NUNCA fix en caliente — proponer rollback primero

## Archivos de Referencia

| Archivo | Contenido | Cuándo consultar |
|---------|-----------|-----------------|
| `claude.md` | Constitución, reglas, configuración | Siempre (auto-leído) |
| `productdesign.md` | Requerimientos, features, estructura | Antes de implementar cualquier feature |
| `sop.md` | Procedimientos paso a paso | Antes de ejecutar cualquier proceso |
| `changelog.md` | Historial de cambios, deploy log | Después de cada cambio |
| `task_plan.md` | Tareas pendientes/completadas por fase | Para saber qué sigue |
| `findings.md` | Errores, decisiones, constraints | Cuando algo falle o haya decisiones técnicas |
