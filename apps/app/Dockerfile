# apps/app/Dockerfile

# Étape 1 : build
FROM node:20-alpine AS builder
WORKDIR /app

# Copier les fichiers du workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps ./apps
COPY packages ./packages

# Installer pnpm et les dépendances
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

# Build l'application front
RUN pnpm --filter app build

# Étape finale
FROM node:20-alpine
WORKDIR /app

# Copier les fichiers nécessaires pour la production
COPY --from=builder /app/apps/app/build ./build
COPY --from=builder /app/apps/app/package.json ./
COPY --from=builder /app/apps/app/public ./public

# Installer uniquement les dépendances de production
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --prod

# Exposer le port
EXPOSE 3000

# Démarrer l'application
CMD ["pnpm", "start"]
