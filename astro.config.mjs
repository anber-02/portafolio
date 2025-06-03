import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["@fontsource-variable/onest"],
    },
  },
  // integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
});
0;
