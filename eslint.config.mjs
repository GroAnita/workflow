//import js from "@eslint/js";
import globals from "globals";
//import { defineConfig } from "eslint/config";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: true,
        it: true,
        expect: true,
        require: true,
        module: true,
        process: true,
      },
  },
},
pluginJs.configs.recommended,
];

