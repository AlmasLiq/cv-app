import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      prettier: prettier,
    },
    rules: {
      // Recommended ESLint, TypeScript, and React rules
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,

      // Prettier rules (disable conflicting ESLint rules)
      ...prettierConfig.rules,

      // Enforce CRLF line endings
      "linebreak-style": ["error", "windows"],
      // Run Prettier with CRLF end-of-line setting
      "prettier/prettier": ["error", { endOfLine: "crlf" }],
      "react/react-in-jsx-scope": "off",
      // Custom overrides
      "react/display-name": "warn",
      "no-undef": "off",
    },
  },
];
