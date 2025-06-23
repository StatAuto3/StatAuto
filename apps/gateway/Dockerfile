# apps/gateway/Dockerfile

# Étape 1 : build
FROM node:20-alpine AS builder
WORKDIR /app

# Copier les fichiers du workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/gateway/package.json ./apps/gateway/package.json
COPY packages ./packages

# Installer pnpm et les dépendances
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --no-frozen-lockfile

# Copier le code source
COPY apps/gateway ./apps/gateway

# Build l'application
RUN cd apps/gateway && pnpm build

# Créer le dossier proto dans dist
RUN mkdir -p /app/apps/gateway/dist/proto
RUN cp /app/packages/proto/stat-auto-complete.proto /app/apps/gateway/dist/proto/

# Étape finale
FROM node:20-alpine
WORKDIR /app/gateway

# Copier les fichiers nécessaires pour la production
COPY --from=builder /app/apps/gateway/dist ./dist
COPY --from=builder /app/apps/gateway/package.json ./package.json
COPY --from=builder /app/packages/proto/stat-auto-complete.proto ./proto/stat-auto-complete.proto

# Installer pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Installer les dépendances de production uniquement
RUN pnpm install --prod --no-frozen-lockfile

# Exposer les ports
EXPOSE 3000

# Variables d'environnement
ENV PROTO_PATH="/app/gateway/proto/stat-auto-complete.proto"

# Démarrer l'application
CMD ["node", "dist/main"]
