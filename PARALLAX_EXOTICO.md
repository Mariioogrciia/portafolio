# 🌌 Portafolio Exótico - Efecto Parallax Morado

## 🎨 Transformación Realizada

He transformado tu portafolio a una versión **ultra-premium con efecto parallax exótico** en tonos **negro/morado**.

## 🌀 Componentes Nuevos

### 1. **ParallaxBackground.tsx** - El Corazón del Efecto
Este componente crea las capas de parallax exóticas:

```typescript
// 4 capas geométricas flotantes
- Capa 1: Gran círculo morado (top-left) - sube al scrollear (y1)
- Capa 2: Cuadrado rotado (bottom-right) - baja al scrollear (y2)
- Capa 3: Círculo pequeño (top-right) - sube lentamente (y3)
- Capa 4: Borde circular (center) - rota 360° completos (rotate4)
```

**Características:**
- Opacidad muy baja: `0.03 a 0.05` (casi imperceptibles pero notan el movimiento)
- `blur-3xl` para efecto difuso
- Velocidades diferentes de parallax:
  - Capa 1: `[0, -300]` (sube 300px)
  - Capa 2: `[0, 200]` (baja 200px)
  - Capa 3: `[0, -150]` (sube 150px)
  - Capa 4: `rotate [0, 360]` (gira completo)

- **Grain Texture**: SVG con `feTurbulence` para dar textura premium `opacity-[0.015]`

### 2. **CursorGlow.tsx** - Glow Morado Sutil
Reemplazó el `CursorGlowBackground` anterior:

```typescript
// Círculo de 160px que sigue el cursor
- Color: purple-500/20 → purple-600/10 (radial gradient)
- Blur: 40px (muy sutil)
- mix-blend-mode: screen (suma luz, no sobrescribe)
- Transition suave: 300ms
- Opacity: 0 cuando mouse sale
```

**Efecto:** Casi imperceptible pero se nota al mover el ratón.

### 3. **HeroSection.tsx** - Entrada Elegante
Completamente rediseñado:

```typescript
// Tipografía
- Título: Gradient blanco → morado claro
  `from-slate-50 via-slate-200 to-purple-300`
- Font: text-8xl, font-black, letter-spacing tight

// Animaciones
- Entrada: fade + blur (sin translateY, solo opacity + filter)
- Duración: 1.2s (más lenta, más elegante)
- Parallax del título: Y suave al scrollear [0, 100]

// Botones
- Primario: bg-purple-600, border-purple-500/30
- Secundario: border-purple-500/50, hover:bg-purple-900/20
```

**Efecto:** Sensación de lujo tech, entrada premium.

## 🎯 Paleta de Colores

```
#000000   - Fondo puro
#0a0010   - Morado muy oscuro (gradientes)
#1a0030   - Morado más oscuro (fondos)
#7c3aed   - Morado medio (botones, acentos)
#6d28d9   - Morado más oscuro (hover)
#a855f7   - Morado claro (gradientes, brillo)
```

**NADA de azul, cian ni blanco puro.** Solo negro/morado/gris.

## 🌊 Efecto Parallax Explicado

Cuando scrolleas, las capas se mueven a diferentes velocidades:

```
Position de scroll: 0%        50%         100%
Capa 1 (círculo):   0px  →  -150px  →   -300px  (sube)
Capa 2 (cuadrado):  0px  →  100px   →   200px   (baja)
Capa 3 (círculo):   0px  →  -75px   →   -150px  (sube menos)
Capa 4 (borde):     0°   →  180°    →   360°    (rota)
```

Esto crea **profundidad y movimiento** sin ser excesivo.

## 📊 Animaciones Principales

### En la página inicial (hero):
1. **Fade in**: opacity 0 → 1 (1.2s)
2. **Blur remove**: blur(10px) → blur(0px)
3. **Parallax sutil**: title se mueve -100px al scrollear
4. **Cursor glow**: círculo morado sigue mouse

### En otras secciones:
- AboutSection: fade + scale al entrar en viewport
- ProjectsParallaxSection: carousel con parallax
- ContactSection: inputs con whileFocus scale

## 🖱️ Cursor Glow - Comportamiento

```typescript
// Al mover mouse
Posición cursor (e.clientX, e.clientY)
  ↓
Actualiza posición del círculo (120px offset)
  ↓
Anima opacity 0 → 1

// Al salir de ventana
  ↓
Opacity 1 → 0 (300ms)
```

**Resultado:** Glow sutil que no distrae pero enhances interaction.

## 🎬 Cómo Funciona el useScroll + useTransform

```typescript
// En ParallaxBackground.tsx
const { scrollYProgress } = useScroll()
// scrollYProgress es un MotionValue que va 0 → 1 al scrollear

const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
// Mapea scrollYProgress (0-1) a Y movement (0 a -300px)
// Si scrollYProgress = 0.5, entonces y1 = -150px
```

## 🎨 Sensación General

- **Lujo Tech**: Colores oscuros, movimientos suaves, efectos sutiles
- **Profundidad**: Capas de parallax sin saturación
- **Elegancia**: Tipografía grande, espaciado generoso
- **Interactividad**: Cursor glow + hover effects + scroll parallax

## 📱 Responsive

Todos los componentes son responsive:
- Mobile: textos más pequeños, layouts adaptativos
- Tablet: escalado intermedio
- Desktop: tamaño completo

## 🚀 Performance

- ParallaxBackground: Fixed position, no afecta layout
- CursorGlow: Solo actualiza transform (GPU accelerated)
- Framer Motion: useTransform optimizado (no rerederers)
- Grain texture: SVG DataURL, muy ligero

## 🔧 Personalización

### Cambiar velocidad de parallax:
```typescript
const y1 = useTransform(scrollYProgress, [0, 1], [0, -600]) // Más rápido
```

### Cambiar color del cursor glow:
```typescript
background: 'radial-gradient(circle, rgba(200, 100, 255, 0.3) 0%, transparent 70%)'
```

### Cambiar duración de entrada:
```typescript
transition: { duration: 0.8 } // Más rápido
```

---

**Resultado:** Un portafolio ultra-premium, moderno y con presencia visual without being loud. 🌌✨
