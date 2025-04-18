import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["m6z4qy-5174.csb.app"], // Add the host that Vite is blocking
  },
});
