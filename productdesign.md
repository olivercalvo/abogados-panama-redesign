# productdesign.md — Requerimientos y Features

## Resumen del Producto

| Campo | Valor |
|-------|-------|
| Nombre | AbogadosPanamá.net — Redesign |
| Objetivo | Landing page de alto impacto como herramienta de venta (preview URL de Vercel para pitch al cliente) |
| Usuario final | Extranjeros buscando residencia en Panamá + empresas locales e internacionales |
| Plataforma | Web (responsive: mobile, tablet, desktop) |
| Idioma | Español (v1). Inglés como fase 2 |
| Canal de conversión | WhatsApp (+507 6122-8024) |

## Cliente

- **Bufete:** Ortega & Rivers y Abogados Asociados
- **Marca:** AbogadosPanamá.net
- **Abogada principal:** Lic. Julissa Ortega Hernández, especialista en derecho migratorio
- **Diferenciadores:** 228 reseñas Google 5.0 estrellas, 99.9% efectividad, apariciones NTN24/TVN, 70+ tipos de visa

---

## Estructura de la Homepage (secciones en orden)

### S1: Barra Superior (TopBar)
- Fondo: #0A0A0A
- Izquierda: "Lun - Vie: 8:00 AM - 5:00 PM" + teléfono
- Derecha: Selector de idioma "Español | English"
- English → toast "Coming soon" (sin funcionalidad real)
- Altura: 36-40px

### S2: Navegación (Navbar — sticky)
- Fondo: blanco con backdrop-blur
- Logo a la izquierda (logo-abogadospanama.png)
- Links: Inicio, Servicios, Migración, Nosotros, Blog
- Links con smooth scroll a secciones correspondientes
- CTA derecha: botón "Consulta Gratis" (fondo naranja, texto blanco) → WhatsApp
- Mobile: hamburger menu

### S3: Hero Principal
- **Layout:** 2 columnas. Izquierda: texto + CTAs. Derecha: tarjeta social proof
- **Fondo:** #0A0A0A con gradiente radial sutil (naranja muy tenue en esquina)
- **Columna izquierda:**
  - Overline: "BUFETE #1 EN MIGRACIÓN EN PANAMÁ" (DM Sans 700, 12px, uppercase, tracking wide, naranja)
  - H1: "Su futuro legal en Panamá comienza con la asesoría correcta" (palabra "correcta" en itálica serif)
  - Párrafo: "Somos el bufete #1 en trámites migratorios en Panamá. 228 clientes nos califican con 5 estrellas en Google. Consulte sin costo por WhatsApp."
  - Botón primario: "Escribir por WhatsApp" (fondo naranja, icono WA) → wa.me/50761228024?text=Hola,%20necesito%20asesoría%20legal
  - Botón secundario: "Agendar consulta" (outline blanco) → placeholder link
- **Columna derecha:**
  - Tarjeta con fondo semitransparente (rgba(255,255,255,0.06))
  - 5 estrellas (iconos) + "5.0 de 5"
  - "228 reseñas verificadas en Google"
  - Carrusel automático de 5 testimonios (auto-play 4.5s, fade, dots, pause-on-hover, loop infinito)
  - Badge de Google Reviews

### S4: Barra de Estadísticas (StatsBar)
- Fondo: blanco
- 4 columnas centradas:
  - "99.9%" / Efectividad en trámites
  - "228+" / Reseñas 5 estrellas
  - "70+" / Tipos de visa gestionados
  - "15+" / Años de experiencia
- Números en Playfair Display grande, color #0A0A0A
- Símbolo (%, +) en naranja #F29120

### S5: Áreas de Práctica (Services)
- Fondo: #F7F7F5
- Overline: "ÁREAS DE PRÁCTICA"
- H2: "Soluciones legales integrales para cada necesidad"
- Grid: 3x2 desktop, 1 columna mobile
- 6 tarjetas, cada una con:
  - Fondo blanco, borde sutil (border-gray-200)
  - Icono en cuadrado naranja/oscuro (Lucide React)
  - Título H3
  - Párrafo descriptivo corto
  - Hover: elevación (shadow-lg) + borde naranja top (3px)

**Servicios y copy:**

| # | Servicio | Icono Lucide | Descripción |
|---|----------|-------------|-------------|
| 1 | Derecho Migratorio | FileCheck / Passport | Gestionamos más de 70 tipos de visa: residencia temporal, permanente, países amigos, pensionado, inversionista, profesional extranjero y más. Cada trámite supervisado personalmente por especialistas certificados. |
| 2 | Derecho Mercantil | Building2 / Briefcase | Constitución de sociedades, registro de marcas, franquicias y protección de propiedad intelectual. Acompañamiento desde la estructura legal hasta el registro en DIGERPI y Registro Público. |
| 3 | Derecho Civil | Scale / Gavel | Representación en demandas civiles, recuperación de cuentas y cumplimiento de contratos. Abogados litigantes con experiencia comprobada en tribunales panameños. |
| 4 | Derecho Marítimo | Ship / Anchor | Abanderamiento de naves, registro marítimo y trámites ante la Autoridad Marítima de Panamá. Trayectoria intachable en operaciones de bandera panameña. |
| 5 | Licitaciones Gubernamentales | FileText / ClipboardList | Asesoría completa para ofertar ante entidades del gobierno panameño. Cumplimiento de cada parámetro de la legislación de contrataciones públicas. |
| 6 | Empresas Offshore | Globe / Network | Estructuras de negocios internacionales bajo jurisprudencia panameña. Asesoría en beneficios fiscales, bancarios y corporativos para operaciones globales. |

### S6: Sobre la Abogada Principal (AboutAttorney)
- Fondo: blanco
- Layout: 2 columnas. Izquierda: foto. Derecha: bio + credenciales
- **Foto:** Foto real (julissa-ortega.png) con object-cover, aspect-ratio 3:4, rounded-xl.
- **Badge flotante** (esquina inferior derecha de la foto): "228 reseñas / 5 estrellas" con fondo naranja
- **Columna derecha:**
  - Overline: "DIRECTORA DEL BUFETE"
  - H2: "Lic. Julissa Ortega Hernández"
  - Párrafo 1: "Fundadora y directora de AbogadosPanamá.net, la Licda. Julissa Ortega es reconocida como una de las principales especialistas en derecho migratorio de Panamá. Ha sido consultada por NTN24, TVN y medios internacionales sobre legislación migratoria panameña."
  - Párrafo 2: "Su equipo ha logrado un 99.9% de efectividad en la obtención de permisos de residencia, atendiendo a clientes de más de 50 nacionalidades con trámites que van desde visas de países amigos hasta residencias por inversión."
  - Tags/badges: Abogada Idónea, Especialista en Migración, Derecho Mercantil, NTN24, TVN

### S7: Franja de Medios (MediaBanner)
- Fondo: #F7F7F5
- Overline centrado: "VISTO EN MEDIOS DE COMUNICACIÓN"
- Logos en fila: NTN24, TVN Panamá, Google Reviews, La Estrella (o texto si no hay logos)
- Escala de grises, opacidad 40-50%
- Si no hay logos disponibles, usar texto estilizado con los nombres

### S8: CTA Final (CTASection)
- Fondo: #0A0A0A con gradiente radial sutil naranja
- Centrado
- H2: "Consulta gratuita con un especialista"
- Párrafo: "Escriba por WhatsApp y un abogado le responderá en minutos. Sin compromiso."
- Botón primario: "Escribir por WhatsApp" (naranja) → wa.me/50761228024
- Botón secundario: "Llamar ahora" (outline blanco) → tel:+50761228024

### S9: Footer
- Fondo: #0A0A0A
- 4 columnas:
  - **Brand:** Logo + descripción corta del bufete
  - **Servicios:** Links a cada servicio (smooth scroll)
  - **Recursos:** Blog, Preguntas Frecuentes (placeholders)
  - **Contacto:** Dirección, teléfono, email, WhatsApp
- Línea separadora sutil (border-white/10)
- Copyright 2024 + Política de privacidad (placeholder)
- Dirección: Vía Ricardo J. Alfaro, Edificio The Century Tower, Piso 4

### S10: Botón Flotante WhatsApp (WhatsAppFloat)
- Posición: fixed, esquina inferior derecha
- Siempre visible sobre todo el contenido
- Icono de WhatsApp + texto o tooltip "Chatea con nosotros"
- Link: wa.me/50761228024?text=Hola,%20necesito%20asesoría%20legal
- z-index alto para que esté siempre encima

---

## Data Schema (Data-First Rule)

Todo el contenido sale de `data/site-config.ts`. Estructura:

```typescript
// data/site-config.ts

export const siteConfig = {
  // Meta
  name: "AbogadosPanamá.net",
  title: "Abogados en Panamá | Bufete de Abogados AbogadosPanamá.net",
  description: "Bufete de abogados #1 en migración en Panamá. 228 reseñas 5 estrellas. Consulta gratuita por WhatsApp. Derecho migratorio, mercantil, civil y más.",
  url: "https://abogadospanama.net",
  locale: "es-PA",

  // Contacto
  contact: {
    phone: "+507 6122-8024",
    whatsapp: "50761228024",
    whatsappMessage: "Hola, necesito asesoría legal",
    email: "info@abogadospanama.net",
    address: "Vía Ricardo J. Alfaro, Edificio The Century Tower, Piso 4",
    hours: "Lun - Vie: 8:00 AM - 5:00 PM",
  },

  // Stats
  stats: [
    { value: "99.9", suffix: "%", label: "Efectividad en trámites" },
    { value: "228", suffix: "+", label: "Reseñas 5 estrellas" },
    { value: "70", suffix: "+", label: "Tipos de visa gestionados" },
    { value: "15", suffix: "+", label: "Años de experiencia" },
  ],

  // Abogada principal
  attorney: {
    name: "Lic. Julissa Ortega Hernández",
    title: "Directora del Bufete",
    bio: [
      "Fundadora y directora de AbogadosPanamá.net...",
      "Su equipo ha logrado un 99.9% de efectividad..."
    ],
    credentials: ["Abogada Idónea", "Especialista en Migración", "Derecho Mercantil", "NTN24", "TVN"],
  },

  // Servicios (array de 6)
  services: [
    { id: "migratorio", title: "Derecho Migratorio", icon: "FileCheck", description: "..." },
    // ... 6 servicios
  ],

  // Testimonios (hardcoded)
  testimonials: [
    { name: "Cliente 1", text: "...", rating: 5 },
    { name: "Cliente 2", text: "...", rating: 5 },
  ],

  // Reviews
  reviews: {
    count: 228,
    rating: 5.0,
    source: "Google",
  },

  // Medios
  media: ["NTN24", "TVN Panamá", "Google Reviews", "La Estrella de Panamá"],

  // Navegación
  nav: [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#servicios" },
    { label: "Migración", href: "#migracion" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Blog", href: "#blog" },
  ],
};
```

**Razón del Data-First:** Al tener todo el contenido en un solo archivo de configuración, forkear el repo para otro cliente es cambiar UN archivo. Esto escala el productized service.

---

## Reglas de Negocio

1. Todos los CTAs principales redirigen a WhatsApp con mensaje pre-armado
2. El número de WhatsApp es +507 6122-8024 (formato wa.me: 50761228024)
3. Las 228 reseñas y 5.0 estrellas aparecen en mínimo 3 puntos: hero, about, CTA final
4. La Lic. Julissa Ortega es la marca personal del bufete — nombre, foto y credenciales prominentes
5. El selector de idioma English muestra toast "Coming soon" sin cambiar contenido
6. Schema markup obligatorio: LegalService + Attorney (JSON-LD en head)

---

## SEO On-Page

| Campo | Valor |
|-------|-------|
| Title | Abogados en Panamá \| Bufete de Abogados AbogadosPanamá.net |
| Meta description | Bufete de abogados #1 en migración en Panamá. 228 reseñas 5 estrellas. Consulta gratuita por WhatsApp. Derecho migratorio, mercantil, civil y más. |
| H1 | Su futuro legal en Panamá comienza con la asesoría correcta (único, en hero) |
| Schema | LegalService + Attorney (JSON-LD) |
| Alt text | Obligatorio en todas las imágenes |
| OG tags | Title, description, image (captura del hero) |

---

## Diseño / UI

Ver sección completa de diseño en `claude.md` (paleta, tipografía, responsive, animaciones).

---

## Roadmap (Features Futuros — Fase 2+)

| Feature | Fase | Notas |
|---------|------|-------|
| Versión en inglés | 2 | Selector de idioma funcional, duplicar contenido |
| Integración Google Reviews API | 2 | Widget real con reviews dinámicas. Add-on con costo |
| Calendly integrado | 2 | CTA "Agendar consulta" funcional |
| Blog con contenido SEO | 3 | Artículos sobre migración, visas, derecho en Panamá |
| Chat widget | 3 | Alternativa a WhatsApp para visitantes web |
| Formulario de contacto con email | 3 | Resend o SendGrid como backend |
| Página de servicios individuales | 3 | Una page por cada área de práctica |
| Multi-tenant (productized service) | 4 | Sistema de configuración por cliente, panel admin |
