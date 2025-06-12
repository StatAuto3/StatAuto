# Étape 1 : build
FROM node:20-alpine AS builder
WORKDIR /app

# Copier les fichiers du workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/authentication/package.json ./apps/authentication/package.json
COPY packages ./packages

# Installer pnpm et les dépendances
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --no-frozen-lockfile

# Copier le code source
COPY apps/authentication ./apps/authentication

# Générer le client Prisma
RUN cd apps/authentication && npx prisma generate

# Build l'application
RUN cd apps/authentication && pnpm build

# Créer le dossier proto dans dist
RUN mkdir -p /app/apps/authentication/dist/proto
RUN cp /app/packages/proto/stat-auto-complete.proto /app/apps/authentication/dist/proto/

# Étape finale
FROM node:20-alpine
WORKDIR /app/authentication

# Copier les fichiers nécessaires pour la production
COPY --from=builder /app/apps/authentication/dist ./dist
COPY --from=builder /app/apps/authentication/package.json ./package.json
COPY --from=builder /app/apps/authentication/prisma ./prisma
COPY --from=builder /app/apps/authentication/generated ./generated
COPY --from=builder /app/packages/proto/stat-auto-complete.proto ./proto/stat-auto-complete.proto

# Installer pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Installer les dépendances de production uniquement
RUN pnpm install --prod --no-frozen-lockfile

# Installer Prisma CLI globalement
RUN npm install -g prisma

# Exposer les ports
EXPOSE 3000
EXPOSE 5000

# Variables d'environnement
ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/postgres?schema=auth"
ENV PROTO_PATH="/app/authentication/proto/stat-auto-complete.proto"

# Démarrer l'application
CMD ["sh", "-c", "prisma migrate deploy && node dist/main"]
