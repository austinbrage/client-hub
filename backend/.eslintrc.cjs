module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module", 
  },
  plugins: [
    'import',
  ],
  rules: {
    'no-unused-vars': [
      'warn',
      { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_" },
    ],
    'import/extensions': [
      'error',
      'ignorePackages', 
      {
        js: 'always', 
      },
    ],
    'import/no-unresolved': 'error',
  },
};
