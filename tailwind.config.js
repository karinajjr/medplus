import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  theme: {
    extend: {
     
      
      fontFamily: {
        mont: ["Mont", "sans-serif"], // общий шрифт Mont
      },
      fontWeight: {
        normal: "400", // обычный Mont-SemiBold
        bold: "700", // жирный Mont-Bold
      },
      fontStyle: {
        normal: "normal",
        italic: "italic", // курсив Mont-RegularItalic
      },
    },
  },
  plugins: [tailwindcss()],
});
