# 📋 Prueba Técnica: Sección de Presentación de Producto Industrial

> **Rol evaluado:** Frontend Developer  
> **Proyecto:** Sección interactiva y catálogo de productos industriales en React  
> **Candidato:** Jose Ampuero  

---

## 📌 1. Resumen Ejecutivo del Proyecto

El objetivo de este desarrollo fue diseñar y construir una **sección de presentación de productos para el sector industrial** (equipos de inyección por canal caliente y pirómetros de temperatura). 

La solución permite a un potencial cliente (ingeniero de planta, jefe de compras o integrador de moldes):
1. **Identificar de inmediato el equipo** y sus variantes a través de una galería adaptativa.
2. **Escanear rápidamente sus características técnicas y ventajas operativas** sin lidiar con bloques densos de texto.
3. **Acceder a un punto de contacto claro y directo** para solicitar cotización formal de manera interactiva.

---

## 🛠️ 2. Herramientas y Tecnologías Utilizadas

| Herramienta / Tecnología | Versión / Enfoque | Rol en el Proyecto |
| :--- | :--- | :--- |
| **React** | 19.x | Biblioteca principal para la interfaz basada en componentes funcionales y Hooks (`useState`, `useEffect`). |
| **Vite** | 8.x | Entorno de desarrollo rápido, empaquetado optimizado de producción y Hot Module Replacement (HMR). |
| **Tailwind CSS** | 4.x | Sistema de estilos utilitarios para un diseño coherente, Mobile-First y libre de CSS innecesario. |
| **JavaScript Moderno (ES6+)** | Modular | Estructura desacoplada de datos (`productsData.js`) y separación estricta entre capa visual y contenido. |
| **HTML5 Semántico & Accesibilidad** | W3C / a11y | Empleo de etiquetas semánticas (`<main>`, `<section>`, `<article>`, `<nav>`), roles ARIA y contraste WCAG. |

---

## 💡 3. Principales Decisiones Tomadas en el Diseño y Arquitectura

### A. Arquitectura Reutilizable y Principio DRY (*Don't Repeat Yourself*)
* **Una única fuente de verdad (`productsData.js`)**: Los productos comparten una estructura de datos normalizada (`id`, `name`, `images`, `intro`, `highlights`, `advantages`).
* **Un único componente de presentación (`ProductSection.jsx`)**: En lugar de duplicar componentes para cada producto, el mismo componente renderiza cualquier producto del catálogo de manera dinámica y escalable.

### B. Estética B2B Industrial (Sobriedad y Confianza Técnica)
* Se descartaron tendencias visuales sobrecargadas o de estilo videojuego (efectos neón o dark-mode futurista), adoptando una **línea gráfica corporativa limpia**: fondo blanco/gris neutro, tipografía legible y acentos en azul industrial (`#1d4ed8`), afín a fabricantes líderes del sector (DME, Husky, Yudo).

### C. Escaneabilidad y Jerarquía de la Información
* **Características clave en cuadrícula 2x2**: La descripción del equipo se divide en una frase introductoria y una cuadrícula de tarjetas con viñetas para que los datos técnicos se lean de un solo vistazo.
* **Diseño adaptativo de ventajas**: Se reemplazaron las tarjetas verticales sobredimensionadas por **tarjetas horizontales compactas con insignia numerada**. Este diseño se adapta simétricamente tanto a productos con pocas ventajas extensas (3 ítems) como a productos con múltiples ventajas breves (9 ítems), evitando huecos vacíos.

### D. Galería de Imágenes Adaptativa
* El componente detecta automáticamente la cantidad de imágenes:
  * Si el producto tiene **1 imagen** (ej. Controlador de tiempo): se presenta en contenedor de alta fidelidad sin elementos sobrantes.
  * Si el producto tiene **múltiples imágenes** (ej. Controlador de temperatura con 2 vistas): activa automáticamente un selector de miniaturas intuitivo y accesible.

### E. Conversión y Modal Interactivo (Sin Backend)
* Se integró un botón de llamado a la acción prioritario (*"Solicitar información o cotización"*), ubicado en el primer golpe de vista.
* Al pulsar el botón, se abre un **formulario modal corporativo** (`QuoteModal.jsx`) que precarga el nombre del producto activo, valida campos básicos en el frontend y muestra una confirmación visual de recepción sin requerir backend ni bases de datos.

### F. Diseño 100% Responsivo
* Flujo fluido que conmuta entre 1 columna en teléfonos inteligentes (`<768px`) y 2 columnas con panel lateral en computadoras de escritorio (`≥1024px`).

---

## ⏱️ 4. Tiempo Aproximado Dedicado a la Prueba

* **Tiempo total estimado:** **Entre 1.5 y 2 horas**
* **Distribución aproximada:**
  * **25 min:** Análisis de requerimientos, estructuración del modelo de datos (`productsData.js`) y configuración inicial con Vite + Tailwind CSS.
  * **45 min:** Desarrollo del componente modular reutilizable (`ProductSection`), galería con selector de miniaturas y sistema de pestañas.
  * **30 min:** Refactorización de la sección de ventajas a formato horizontal compacto, integración del modal interactivo de cotización y validación de responsividad.
  * **15 min:** Pruebas de compilación (`npm run build`), optimización de accesibilidad y redacción de documentación.

---

## 🚀 5. Instrucciones de Instalación y Ejecución Local

Para ejecutar el proyecto en tu máquina local:

```bash
# 1. Clonar el repositorio y entrar a la carpeta del proyecto
cd industrial-product-app

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo local
npm run dev
```

> **Nota:** La aplicación estará disponible en `http://localhost:5173/`.

Para compilar la versión optimizada para producción:
```bash
npm run build
```
*(Compilación verificada: 0 errores y 0 advertencias).*
