import baseConfig from './packages/eslint/base.js';

export default [
  // Configuration pour les fichiers de configuration (sans TypeScript parser)
  {
    files: ['*.{js,mjs,cjs}', 'package.json'],
    ...baseConfig[0],
    languageOptions: {
      ...baseConfig[0].languageOptions,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  // Configuration pour les fichiers TypeScript dans les apps et packages
  {
    files: ['apps/**/*.{ts,tsx}', 'packages/**/*.{ts,tsx}'],
    ...baseConfig[0],
    languageOptions: {
      ...baseConfig[0].languageOptions,
      parserOptions: {
        project: ['./packages/*/tsconfig.json', './apps/*/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // Configuration pour les autres fichiers JS/TS
  {
    files: ['**/*.{js,jsx,mjs}'],
    ...baseConfig[0],
    languageOptions: {
      ...baseConfig[0].languageOptions,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/coverage/**',
      '**/*.d.ts',
      '**/pnpm-lock.yaml',
      '**/.pnpm-store/**',
      'prettier.config.mjs',
      '.prettierrc*',
      'eslint.config.mjs',
    ],
  },
];
