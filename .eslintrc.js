module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "json-format"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    "json/sort-package-json": "standard",
    "json/ignore-files": ["**/package-lock.json"],
    "json/json-with-comments-files": [".vscode/**"],
  },
  rules: {
    "prettier/prettier": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["node_modules", "build", "dist", "public"],
};
