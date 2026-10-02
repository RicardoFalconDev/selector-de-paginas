import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // En build se publica en https://ricardofalcondev.github.io/selector-de-paginas/
  base: command === 'build' ? '/selector-de-paginas/' : '/',
  plugins: [react()],
  server: { port: 5173 },
}));
