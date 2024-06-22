module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { 
    react: { version: '18.2' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    } 
  },
  plugins: [
    'react-refresh',
    'import'
  ],
  rules: {
    'no-unused-vars': [
      'warn',
      { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_" },
    ],
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/extensions': [
      'error',
      'ignorePackages', 
      {
        js: 'always', 
        jsx: 'always'
      },
    ],
    'import/no-unresolved': 'error',
  },
}
