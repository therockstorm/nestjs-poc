module.exports = {
  env: { node: true, jest: true },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:typescript-sort-keys/recommended",
  ],
  ignorePatterns: [".eslintrc.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "simple-import-sort",
    "typescript-sort-keys",
  ],
  root: true,
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-await-in-loop": "warn",
    "no-return-await": "warn",
    "require-await": "warn",
    "simple-import-sort/imports": "warn",
    "sort-keys": "warn",
  },
};
