# apps/pilotes/Dockerfile

# Étape 1 : build
FROM node:20-alpine AS builder
WORKDIR /app

# Copier les fichiers du workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/pilotes/package.json ./apps/pilotes/package.json
COPY packages ./packages

# Installer pnpm et les dépendances
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --no-frozen-lockfile

# Copier le code source
COPY apps/pilotes ./apps/pilotes

# Build l'application
RUN cd apps/pilotes && pnpm build

# Créer le dossier proto dans dist
RUN mkdir -p /app/apps/pilotes/dist/proto
RUN cp /app/packages/proto/stat-auto-complete.proto /app/apps/pilotes/dist/proto/

# Étape finale
FROM node:20-alpine
WORKDIR /app/pilotes

# Copier les fichiers nécessaires pour la production
COPY --from=builder /app/apps/pilotes/dist ./dist
COPY --from=builder /app/apps/pilotes/package.json ./package.json
COPY --from=builder /app/packages/proto/stat-auto-complete.proto ./proto/stat-auto-complete.proto

# Installer pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Installer les dépendances de production uniquement
RUN pnpm install --prod --no-frozen-lockfile

# Exposer les ports
EXPOSE 3000
EXPOSE 5000

# Variables d'environnement
ENV PROTO_PATH="/app/pilotes/proto/stat-auto-complete.proto"

# Démarrer l'application
CMD ["node", "dist/main"]