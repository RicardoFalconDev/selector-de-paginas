# Selector de páginas — FID by Lakaut

**Demo:** https://ricardofalcondev.github.io/selector-de-paginas/

Prototipo funcional del flujo **Configurar firma → Páginas a firmar**, construido fiel al diseño de Figma.

- Modal "Elegir páginas" con selección individual, "Seleccionar todas" y contador en vivo.
- Resumen en el panel con chips por página, "+N" expandible y "Limpiar".
- Visor del documento con estampa de firma, zoom y paginación.

## Correr localmente

```bash
npm install
npm run dev
```

Abrir http://localhost:5173 (diseñado para 1440×839).

## Stack

React 18 + Vite, CSS con tokens extraídos de Figma (`src/tokens.css`).
