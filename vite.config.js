import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  base: "/portfolio-website/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: [
            "three",
            "@react-three/fiber",
            "@react-three/drei",
            "three-stdlib",
          ],
          spline: ["@splinetool/react-spline"],
          animation: ["framer-motion"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      "@splinetool/react-spline",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
});
