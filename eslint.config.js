import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    // Tell ESLint to ignore build output and node modules
    ignores: ['dist/**', 'node_modules/**', 'build/**'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
