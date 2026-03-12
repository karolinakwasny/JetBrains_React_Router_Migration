import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    // This prevents Node from crashing on .css imports inside these packages
    noExternal: [
      /^@rescui\/.*/, 
      /^@jetbrains\/.*/,
      "aos",
      "highlight.js"
    ],
    // Explicitly tell Vite NOT to bundle highlight.js for the server
    external: ["highlight.js"],
  },
});