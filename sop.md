# sop.md — Procedimientos Operativos Estándar

> **REGLA DE ORO:** Si la lógica cambia, actualizar el SOP ANTES de modificar el código.

---

## SOPs Obligatorios (Universales)

### SOP-001: Commit y Push a GitHub

**Objetivo:** Subir cambios a la rama develop con commit atómico y mensaje descriptivo.

**Trigger:** Después de cada cambio + actualización de archivos .md.

**Pre-condiciones:**
- Estar en la rama `develop`
- Archivos .md actualizados según el cambio realizado
- Linter pasado sin errores (si configurado)

**Inputs:** Código modificado + .md actualizados.

**Pasos:**
1. Verificar rama actual: `git branch --show-current` → debe ser `develop`
2. Si no es develop: `git checkout develop`
3. Correr linter: `npx eslint . --fix` (si configurado)
4. Verificar que no hay secrets staged: revisar que `.env*` NO está en `git status`
5. `git add .`
6. Verificar lo que se va a commitear: `git diff --cached --stat`
7. Commit con mensaje descriptivo: `git commit -m "tipo: descripción clara en español"`
8. Push: `git push origin develop`

**Output:** Cambio subido a develop en GitHub.

**Edge Cases:**

| Situación | Qué hacer |
|-----------|-----------|
| Repo no inicializado | Ejecutar SOP-007 (Setup) primero |
| Push rechazado | `git pull origin develop --rebase` y luego push |
| `.env` detectado en staging | `git reset HEAD .env*`, verificar .gitignore |
| `gh` no instalado | Alertar al usuario, instalar con `brew install gh` |
| Múltiples cambios lógicos | Separar en commits atómicos, uno por cambio |

**Tools:** git, gh, eslint (opcional)

---

### SOP-002: Pre-Deploy y Merge a Main

**Objetivo:** Pasar cambios de develop a main (producción) de forma segura.

**Trigger:** Usuario solicita pase a producción ("pasamos a main", "merge a main", "despliega").

**Pre-condiciones:**
- Estar en `develop`
- Todo commiteado y pushed
- Sin cambios pendientes

**Inputs:** Rama develop lista para producción.

**Pasos:**
1. Verificar rama: `git branch --show-current` → develop
2. Correr linter: `npx eslint .` → 0 errores
3. Correr build: `npm run build` → debe completar sin errores
4. Verificar app con Playwright MCP: navegar a localhost:3000, probar funcionalidades
5. Auditoría: `npm audit` → reportar vulnerabilidades
6. Verificar no secrets en código: buscar patterns de API keys, tokens
7. Verificar `.env*` en `.gitignore`
8. Verificar `package-lock.json` commiteado
9. Push final a develop: `git push origin develop`
10. Mostrar diff review: `git log main..develop --oneline` + `git diff main..develop --stat`
11. **PAUSA — Pedir aprobación EXPLÍCITA al usuario**
12. Registrar hash actual de main: `git rev-parse main` → guardar para rollback
13. Merge: `git checkout main && git merge develop && git push origin main`
14. Registrar en deploy log (`changelog.md`): fecha, hash, hash anterior, resumen, aprobador
15. Volver a develop: `git checkout develop`
16. Indicar al usuario: URL de Vercel + funcionalidades a probar

**Output:** Código en main → Vercel auto-deploya.

**Edge Cases:**

| Situación | Qué hacer |
|-----------|-----------|
| Linter falla | Corregir, commitear fix, reiniciar SOP |
| Build falla | Investigar error, corregir, commitear, reiniciar |
| Secrets detectados | ALERTAR. Remover, rotar credenciales, commitear fix |
| Usuario no aprueba | DETENER. No mergear. Preguntar qué ajustar |
| Conflictos en merge | Resolver en develop, commitear resolución, reiniciar |

**Tools:** git, npm, Playwright MCP, eslint

---

### SOP-003: Rollback

**Objetivo:** Revertir producción al estado anterior cuando algo falla post-deploy.

**Trigger:** Usuario reporta problema en producción.

**Pre-condiciones:**
- Hash de rollback registrado en deploy log
- El problema es en producción (main)

**Inputs:** Hash del commit anterior de main.

**Pasos:**
1. Proponer rollback al usuario: "El hash anterior de main es [hash]. ¿Revertimos?"
2. Si aprobado: `git checkout main`
3. `git revert HEAD --no-edit` (o `git reset --hard [hash]` si el usuario lo prefiere)
4. `git push origin main`
5. Verificar que Vercel despliega la versión anterior
6. Registrar rollback en deploy log
7. Volver a `develop` para investigar y corregir

**Output:** Producción revertida al estado anterior funcional.

**Edge Cases:**

| Situación | Qué hacer |
|-----------|-----------|
| Hash no registrado | Buscar en `git log main` el commit anterior al problemático |
| Rollback no viable (datos nuevos en prod) | Seguir SOP-004 (Hotfix) |
| Múltiples commits desde último deploy estable | Revertir al hash del último deploy exitoso registrado |

**Tools:** git

---

### SOP-004: Hotfix

**Objetivo:** Corregir un problema en producción cuando el rollback no es viable.

**Trigger:** Rollback no viable y hay bug en producción.

**Pre-condiciones:**
- SOP-003 evaluado y descartado
- Problema identificado

**Inputs:** Descripción del bug, rama main.

**Pasos:**
1. Crear rama hotfix desde main: `git checkout main && git checkout -b hotfix/nombre-descriptivo`
2. Aplicar fix MÍNIMO necesario (no refactorizar, no agregar features)
3. Testear fix en local
4. Verificar con Playwright MCP
5. Commit: `git commit -m "hotfix: descripción del fix"`
6. **PAUSA — Pedir aprobación al usuario para merge**
7. Merge a main: `git checkout main && git merge hotfix/nombre-descriptivo && git push origin main`
8. Merge a develop: `git checkout develop && git merge hotfix/nombre-descriptivo && git push origin develop`
9. Borrar rama hotfix: `git branch -d hotfix/nombre-descriptivo`
10. Registrar en deploy log y changelog
11. Documentar en findings.md

**Output:** Fix en producción + develop sincronizado.

**Edge Cases:**

| Situación | Qué hacer |
|-----------|-----------|
| Hotfix introduce nuevo bug | Evaluar rollback del hotfix, o segundo hotfix |
| Conflictos con develop | Resolver conflictos en la rama develop |

**Tools:** git, Playwright MCP

---

### SOP-005: Self-Annealing (Ciclo de Reparación)

**Objetivo:** Reparar errores de forma sistemática, documentarlos y prevenir recurrencia.

**Trigger:** Cualquier error, fallo de script o comportamiento inesperado.

**Pre-condiciones:** Error detectado (manual o por Playwright).

**Inputs:** Stack trace, mensaje de error, contexto.

**Pasos:**
1. **Analizar:** Leer stack trace COMPLETO. Identificar causa raíz, no solo síntoma.
2. **Documentar:** Registrar en `findings.md` ANTES de intentar fix: error, causa probable, contexto, archivo afectado.
3. **Parchear:** Aplicar fix mínimo necesario en el código.
4. **Testear:** Verificar que funciona con Playwright MCP (localhost:3000). Verificar que no rompió otra cosa.
5. **Actualizar SOP:** Si el error reveló un proceso nuevo o una regla, actualizar `sop.md` con el aprendizaje.
6. **Commit:** `git commit -m "fix: descripción del fix"` + push a develop.

**Output:** Error corregido, documentado, y proceso actualizado para prevenir recurrencia.

**Edge Cases:**

| Situación | Qué hacer |
|-----------|-----------|
| Error recurrente | Verificar si el SOP se actualizó la vez anterior. Si no, es falla de proceso. |
| Error en producción | Aplicar SOP-003 (Rollback) primero, después Self-Annealing |
| Causa raíz no clara | Documentar lo que se sabe, aplicar fix, marcar para investigación |

**Tools:** Playwright MCP, git

---

## SOPs del Proyecto

### SOP-006: Agregar/Modificar Sección de la Homepage

**Objetivo:** Implementar o modificar una sección del landing page.

**Trigger:** Tarea del task_plan indica implementar una sección.

**Pre-condiciones:**
- Estar en rama `develop`
- Sección definida en `productdesign.md`
- Contenido disponible en `data/site-config.ts`

**Inputs:** Especificación de la sección (productdesign.md), copy (site-config.ts).

**Pasos:**
1. Verificar baseline con Playwright: localhost:3000 funciona
2. Leer la especificación de la sección en `productdesign.md`
3. Verificar que el contenido existe en `data/site-config.ts` (si no, agregarlo primero)
4. Crear componente en `components/sections/NombreSeccion.tsx`
5. Usar datos de `siteConfig` — NO hardcodear copy en el componente
6. Aplicar clases Tailwind según paleta y tipografía definidas en `claude.md`
7. Implementar responsive (mobile-first: base → md: → lg:)
8. Implementar animaciones de scroll (Intersection Observer para fade-up)
9. Implementar hover states en elementos interactivos
10. Agregar el componente a `app/page.tsx` en el orden correcto
11. Verificar con Playwright: navegar a localhost:3000, scroll a la sección, verificar visual y funcionalidad
12. Si errores → Self-Annealing (SOP-005)
13. Actualizar `task_plan.md` (marcar tarea como completada)
14. Actualizar `changelog.md`
15. Commit: `feat: implementar sección [NombreSeccion]`
16. Push a develop

**Output:** Sección visible y funcional en localhost:3000.

**Edge Cases:**

| Situación | Qué hacer |
|-----------|-----------|
| Copy falta en site-config | Agregar el copy según productdesign.md, commit separado |
| Icono Lucide no existe | Buscar alternativa similar en lucide.dev, documentar en findings.md |
| Responsive se rompe | Revisar breakpoints, usar devtools mobile, testear 375px/768px/1024px |
| Animación causa layout shift | Usar will-change, transform en lugar de width/height |

**Tools:** Next.js, Tailwind, Lucide React, Playwright MCP

---

### SOP-007: Setup Inicial del Proyecto

**Objetivo:** Crear el proyecto Next.js desde cero con toda la configuración.

**Trigger:** Primera sesión del proyecto.

**Pre-condiciones:**
- Node.js instalado
- npm disponible
- GitHub CLI (`gh`) instalado y autenticado

**Inputs:** Los 6 archivos .md en la carpeta raíz.

**Pasos:**
1. Crear proyecto Next.js: `npx create-next-app@latest abogados-panama-redesign --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
2. Mover los 6 archivos .md a la raíz del proyecto (claude.md DEBE estar en raíz)
3. Configurar `.gitignore`: agregar `.env`, `.env.local`, `.env.production`, `.env*.local`, `.tmp/`, `.DS_Store`
4. Configurar Tailwind con colores custom en `tailwind.config.ts`:
   ```
   colors: {
     brand: { DEFAULT: '#F29120', hover: '#F9A84A', subtle: '#FFF4E6' },
     dark: { DEFAULT: '#0A0A0A', secondary: '#1A1A1A' },
     light: '#F7F7F5',
     'text-primary': '#4A4A4A',
     'text-secondary': '#7A7A7A',
   }
   ```
5. Instalar dependencias: `npm install lucide-react`
6. Configurar Google Fonts en `app/layout.tsx`: Playfair Display + DM Sans
7. Crear estructura de carpetas:
   ```
   src/
     app/
       layout.tsx
       page.tsx
     components/
       sections/     (TopBar, Navbar, Hero, StatsBar, Services, AboutAttorney, MediaBanner, CTASection, Footer)
       ui/           (Button, Card, Badge, Toast, etc.)
     data/
       site-config.ts
     lib/
       utils.ts
   public/
     logo-abogadospanama.png
   ```
8. Crear `data/site-config.ts` con toda la data (según schema en productdesign.md)
9. Inicializar Git: `git init`
10. Primer commit: `git add . && git commit -m "config: setup inicial Next.js con Tailwind y estructura BLAST"`
11. Crear repo en GitHub: `gh repo create abogados-panama-redesign --public --source=. --push`
12. Crear rama develop: `git checkout -b develop && git push -u origin develop`
13. Verificar con Playwright: `localhost:3000` carga sin errores
14. Actualizar `task_plan.md`: marcar fase 0 como completada
15. Actualizar `changelog.md`: registrar setup inicial

**Output:** Proyecto funcional en localhost:3000, repo en GitHub con ramas main y develop.

**Edge Cases:**

| Situación | Qué hacer |
|-----------|-----------|
| `gh` no autenticado | `gh auth login` primero |
| Puerto 3000 ocupado | Usar `--port 3001` o cerrar proceso existente |
| create-next-app falla | Verificar versión de Node (>=18), actualizar npm |
| Logo no disponible | Usar placeholder, documentar en findings.md |

**Tools:** npx, npm, git, gh, Playwright MCP

---

### SOP-008: Verificación Visual Completa

**Objetivo:** Validar que toda la homepage se ve correctamente en desktop y mobile.

**Trigger:** Después de implementar todas las secciones o antes de solicitar merge a main.

**Pre-condiciones:**
- Todas las secciones implementadas
- App corriendo en localhost:3000

**Inputs:** URL localhost:3000.

**Pasos:**
1. Abrir browser con Playwright MCP
2. Navegar a localhost:3000
3. Verificar carga sin errores en consola
4. **Desktop (1280px):**
   - Verificar TopBar visible con horario y selector idioma
   - Verificar Navbar sticky con logo y CTA
   - Verificar Hero: 2 columnas, H1 visible, tarjeta social proof
   - Verificar StatsBar: 4 columnas con números
   - Verificar Services: grid 3x2, hover funcional
   - Verificar AboutAttorney: 2 columnas, badge flotante
   - Verificar MediaBanner: logos/nombres centrados
   - Verificar CTASection: botones WhatsApp y Llamar
   - Verificar Footer: 4 columnas
   - Verificar WhatsApp float: siempre visible
5. **Mobile (375px):**
   - Verificar hamburger menu
   - Verificar Hero: 1 columna, tarjeta debajo del texto
   - Verificar Services: 1 columna
   - Verificar AboutAttorney: 1 columna, foto arriba
   - Verificar Footer: 1 columna
6. **Links:**
   - Click en CTA WhatsApp → verifica URL wa.me correcta
   - Click en nav links → smooth scroll funcional
   - Click en "English" → toast "Coming soon"
7. Si errores → Self-Annealing (SOP-005)

**Output:** Homepage validada visualmente en desktop y mobile.

**Tools:** Playwright MCP
