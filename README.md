# Portafolio - Mario García

Portafolio profesional moderno y animado construido con **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

## 🎨 Características

### Animaciones
- ✨ **Glow del cursor**: Círculo grande que sigue el cursor con efecto blur
- 🎯 **Barra de progreso**: Indicador de scroll en tiempo real (esquina superior derecha)
- 📱 **Scroll Progress**: Anima a 0% - 100% conforme scrolleas
- 🎬 **Fade In animations**: Elementos se animan al entrar en viewport
- 📊 **Parallax scroll**: Secciones con parallax en diferentes ejes
- ✨ **Hover effects**: Botones y tarjetas con transiciones suaves

### Secciones

1. **Hero Section**: Título grande, subtítulo y botones de CTA con parallax
2. **About Section**: Información personal y skills grid
3. **Projects Section**: Carousel horizontal parallelizado
4. **Contact Section**: Formulario funcional + social links

### Diseño
- 🌙 Tema oscuro minimalista
- 📱 100% responsivo (mobile, tablet, desktop)
- ⚡ Carga rápida con Next.js App Router
- 🎨 Degradados y efectos visuales sofisticados

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
app/
├── components/
│   ├── CursorGlowBackground.tsx    # Glow seguidor del cursor
│   ├── ScrollProgressIndicator.tsx # Indicador de progreso
│   ├── HeroSection.tsx             # Sección hero con parallax
│   ├── AboutSection.tsx            # Sobre mí + skills
│   ├── ProjectsParallaxSection.tsx # Carousel de proyectos
│   └── ContactSection.tsx          # Formulario de contacto
├── globals.css                     # Estilos globales + Tailwind
├── layout.tsx                      # Layout raíz con metadata
└── page.tsx                        # Página principal (integra todo)
```

## 🎯 Componentes Detallados

### CursorGlowBackground
- Div fijo que cubre toda la pantalla
- Círculo de 300px que sigue el cursor
- Gradiente: `from-cyan-400/40 to-blue-500/40` con `blur(80px)`
- `mix-blend-screen` para efecto luminoso
- Desaparece cuando el ratón sale (`opacity: 0`)

### ScrollProgressIndicator
- SVG círculo con `strokeDasharray` animado
- `useScroll()` + `useTransform()` para animar el stroke
- Mostrador de % en texto
- Posición: `top-8 right-8` (esquina superior derecha)

### HeroSection
- Título: `text-8xl` con gradiente `from-cyan-400 to-purple-500`
- Parallax con `useTransform`: Y, opacity, scale basadas en scroll
- 2 botones: Sólido (cyan) + Outline (cyan)
- Arrow animada pulsante al final

### AboutSection
- Grid de skills responsivo (2-4 columnas según pantalla)
- Animación staggered de items
- Se activa con `useInView` al scrollear
- Fade + translateY + blur en entrada

### ProjectsParallaxSection
- 4 proyectos en carousel horizontal
- Parallax: scroll vertical → movimiento horizontal
- Tarjetas con gradientes únicos
- Hover: elevación + opacidad overlay reducida

### ContactSection
- Formulario con inputs animados
- Mensaje de éxito al enviar
- Links sociales con emojis (LinkedIn, GitHub, Email)
- Animación: fade + scale on hover

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| Next.js | 16.2.1 | Framework React + SSR |
| React | 19.2.4 | Library UI |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 3.4.1 | Utilidades CSS |
| Framer Motion | 12.38.0 | Animaciones declarativas |
| react-intersection-observer | 10.0.3 | Detección de viewport |

## 🎨 Personalización

### Cambiar colores
Edita `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',    // Color de fondo
      accent: '#06b6d4',     // Color de acentos
    },
  },
}
```

### Cambiar contenido
- **Nombre**: En `HeroSection.tsx`, línea ~45
- **Subtítulo**: En `HeroSection.tsx`, línea ~50
- **Skills**: En `AboutSection.tsx`, array `skills`
- **Proyectos**: En `ProjectsParallaxSection.tsx`, array `projects`

### Ajustar velocidad de animaciones
En cada componente, modifica el `transition`:
```typescript
transition: { duration: 0.8, ease: 'easeOut' }  // duration en segundos
```

## 📱 Responsiveness

El sitio es responsive por defecto. Tailwind breakpoints usados:
- `md:` (768px) - tablets
- `lg:` (1024px) - desktops grandes

Prueba en DevTools: F12 → Toggle device toolbar

## 🌐 Despliegue

### Vercel (Recomendado para Next.js)
```bash
npm i -g vercel
vercel
```

### GitHub Pages
Requiere exportar como sitio estático. Ver: `next export`

### Netlify
Conecta tu repo y configura build command: `npm run build`

## 📝 Scripts Disponibles

```bash
npm run dev      # Desarrollo (localhost:3000)
npm run build    # Compilar para producción
npm start        # Ejecutar build en producción
npm run lint     # Verificar errores (si ESLint está configurado)
```

## 🐛 Troubleshooting

**"Module not found" errors en TypeScript:**
- Presiona `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

**Las animaciones no se ven:**
- Asegúrate de que Framer Motion esté instalado: `npm list framer-motion`
- Verifica que los componentes tengan `'use client'` al inicio

**Scroll lento:**
- Reduce la cantidad de `blur` en CSS
- Simplifica los gradientes

## 📞 Contacto & Social

Links personalizables en `ContactSection.tsx`:
```typescript
const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/marioogrciia', icon: '💼' },
  { name: 'GitHub', url: 'https://github.com/marioogrciia', icon: '🐙' },
  { name: 'Email', url: 'mailto:mario@example.com', icon: '✉️' },
]
```

## 📄 Licencia

Libre para usar y modificar.

---

**Hecho con ❤️ usando Next.js + Framer Motion**
