/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
  tailwindFunctions: ["clsx"],
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  endOfLine: "auto",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: true,
  bracketSameLine: false,
};

export default config;
