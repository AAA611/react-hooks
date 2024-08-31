import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      // 检查 Hooks 的使用规则
      "react-hooks/rules-of-hooks": "error",
      // 检查依赖项的声明
      // "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    ignores: ["node_modules", "**/webpack.*.js", "**/__test__", "**/jest.*.js"],
  },
  eslintConfigPrettier,
];
