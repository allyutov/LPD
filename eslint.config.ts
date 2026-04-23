import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
        "vue/multi-word-component-names": "off",
      },
  },
  {
    files: ["**/*.{ts,js}"], // лучше убрать vue отсюда
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      semi: ["error", "always"],
    },
  },
];