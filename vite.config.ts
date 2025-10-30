import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
	  server: {
    allowedHosts: ["devjose-portfolio.com.br"],
  },
  preview: {
    allowedHosts: ["devjose-portfolio.com.br"],
    host: "0.0.0.0",
  },
});
