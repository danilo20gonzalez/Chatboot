import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Chatboot/' // Cambia 'chatboot' por el nombre EXACTO de tu repositorio en GitHub
});
