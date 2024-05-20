import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 resolve: {
  alias: {
   "@": "/src",
   "@components": "/src/components",
  },
 },
 server: {
  host: true,
  strictPort: true,
  port: 5173,
  watch: {
   usePolling: true,
  },
 },
});
