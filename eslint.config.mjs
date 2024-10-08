import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: 12,  // Define a versão do ECMAScript
      globals: {
        ...globals.node,  // Adiciona as variáveis globais do Node.js (incluindo __dirname)
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser,  // Para arquivos onde o ambiente do navegador é esperado
    },
  },
  pluginJs.configs.recommended,
];
