/** @type {import('prettier').Config} */
export default {
  // Largeur maximale des lignes
  printWidth: 80,

  // Utiliser 2 espaces pour l'indentation
  tabWidth: 2,
  useTabs: false,

  // Point-virgule obligatoire
  semi: true,

  // Guillemets simples pour les chaînes
  singleQuote: true,

  // Guillemets autour des clés d'objet seulement si nécessaire
  quoteProps: 'as-needed',

  // Guillemets simples dans JSX
  jsxSingleQuote: true,

  // Virgule finale partout où c'est valide
  trailingComma: 'all',

  // Espaces à l'intérieur des accolades d'objets
  bracketSpacing: true,

  // Accolade de fermeture JSX sur la même ligne
  bracketSameLine: false,

  // Parenthèses autour des paramètres de fonction flèche
  arrowParens: 'avoid',

  // Formatage des chaînes template
  embeddedLanguageFormatting: 'auto',

  // Fin de ligne LF
  endOfLine: 'lf',

  // Formatage HTML
  htmlWhitespaceSensitivity: 'css',

  // Indentation des scripts et styles dans Vue
  vueIndentScriptAndStyle: false,

  // Prose wrap
  proseWrap: 'preserve',

  // Ignorer les fichiers spécifiques
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 120,
      },
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
        printWidth: 80,
      },
    },
  ],
};
