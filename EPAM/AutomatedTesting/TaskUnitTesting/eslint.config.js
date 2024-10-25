import globals from "globals";


export default [
  {
    languageOptions: { globals: globals.node },
    ignores: ["node_modules","mochawesome-report/**","coverage/*"],
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
  }
  },
];