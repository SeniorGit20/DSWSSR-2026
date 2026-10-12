import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([

  //ignora los build de front
  {
    ignores: [
      "dist/**", // ignora carpeta de dist
      "node_modules/**"
    ]

  },

  // 2) coding del back.end

  { files: ["server/**/*.{js}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion:"latest",
      sourceType:"module",
      globals: {
      
         ...globals.node}
       } 
      },
      // 3) coding del back.end

  { files: ["server/**/*.{js,mjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion:"latest",
      sourceType:"module",
      globals: {
      
         ...globals.browser
        }
       } 
      },
        // 4) opcional si hay en public

  { files: ["server/**/*.{js,mjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion:"latest",
      sourceType:"module",
      globals: {
      
         ...globals.browser
        }
       } 
      },
      // 2.1) config de vite

  { files: ["vite.config.js"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion:"latest",
      sourceType:"module",
      globals: {
      
         ...globals.node}
       } 
      },

      
]);
