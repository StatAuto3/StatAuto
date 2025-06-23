# 🔍 Guide du Linter et Formatage

Ce projet utilise **ESLint** et **Prettier** pour maintenir la qualité et la
cohérence du code.

## 📋 Outils configurés

- **ESLint** : Analyse statique du code pour détecter les erreurs et problèmes
  de style
- **Prettier** : Formatage automatique du code

## 🚀 Commandes disponibles

### Commandes de base

```bash
# Linter le projet entier
pnpm run lint

# Corriger automatiquement les erreurs ESLint
pnpm run lint:fix

# Vérifier le linting avec 0 warning autorisé
pnpm run lint:check

# Formater avec Prettier
pnpm format

# Vérifier le formatage Prettier
pnpm format:check
```

### Commandes pour workspace

```bash
# Linter tous les packages/apps
pnpm run lint:all

# Corriger tous les packages/apps
pnpm run lint:fix:all

# Formater tous les packages/apps
pnpm run format:all
```

### Scripts avancés

```bash
# Corriger automatiquement TOUT le projet (ESLint + Prettier)
pnpm run format:fix

# ou directement :
./scripts/lint-and-format.sh --fix

# Vérifier la qualité sans corriger
pnpm run quality:check

# ou directement :
./scripts/lint-and-format.sh --check-only
```

## 🔧 Configuration

### ESLint

La configuration est dans `eslint.config.mjs` et utilise :

- Configuration TypeScript stricte
- Règles pour React/JSX
- Règles de style avec @stylistic
- Détection des imports inutilisés
- Tri automatique des imports
- Règles SonarJS pour la qualité

### Prettier

Configuration dans `prettier.config.mjs` :

- 2 espaces d'indentation
- Guillemets simples
- Virgules finales
- Point-virgules obligatoires
- Largeur de ligne : 80 caractères

## 🎯 Utilisation manuelle recommandée

Pour maintenir la qualité du code :

- Lancez `pnpm run format:fix` avant chaque commit
- Utilisez `pnpm run quality:check` pour vérifier la qualité
- Intégrez les vérifications dans votre workflow de développement

## 📁 Fichiers ignorés

### ESLint ignore :

- `node_modules/`
- `dist/`, `build/`
- Fichiers de configuration
- `.d.ts` générés

### Prettier ignore :

- Fichiers binaires
- Logs et dépendances
- Fichiers de build
- Configuration Docker/Makefile

## 🛠️ Utilisation dans les apps/packages

Chaque app/package peut avoir sa propre configuration qui étend la configuration
de base :

```javascript
// Dans apps/mon-app/eslint.config.mjs
import baseConfig from '../../packages/eslint/react.js';

export default [
  ...baseConfig,
  // Configuration spécifique à l'app
];
```

## ✅ Bonnes pratiques

1. **Avant de committer** : Lancez `pnpm run format:fix`
2. **En CI/CD** : Utilisez `pnpm run quality:check`
3. **Développement** : Intégrez le linting dans votre workflow
4. **IDE** : Configurez votre éditeur pour utiliser les configs ESLint et
   Prettier

## 🐛 Résolution des problèmes

### Erreurs TypeScript dans ESLint

```bash
# Vérifiez que les tsconfig.json sont corrects
pnpm run lint --debug
```

### Conflits ESLint/Prettier

```bash
# Reformatez tout le projet
pnpm run format:fix
```

### Problèmes de cache

```bash
# Nettoyez le cache
rm -rf node_modules/.cache
```

## 📊 Intégration CI/CD

Ajoutez dans votre pipeline :

```yaml
- name: Install dependencies
  run: pnpm install

- name: Check code quality
  run: pnpm run quality:check
```

## 🔄 Mise à jour

Pour mettre à jour les configurations :

1. Modifiez `packages/eslint/` pour ESLint
2. Modifiez `prettier.config.mjs` pour Prettier
3. Testez avec `pnpm run format:fix`
