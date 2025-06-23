# apps/stables/Dockerfile

# Étape 1 : build
FROM node:20-alpine AS builder
WORKDIR /app

# Copier les fichiers du workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/stables/package.json ./apps/stables/package.json
COPY packages ./packages

# Installer pnpm et les dépendances (incluant les devDependencies)
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN cd apps/stables && pnpm install --no-frozen-lockfile

# Installer @nestjs/cli globalement
RUN npm install -g @nestjs/cli

# Copier le code source
COPY apps/stables ./apps/stables

# Créer le dossier proto et copier le fichier
RUN mkdir -p /app/apps/stables/proto
RUN cp /app/packages/proto/stat-auto-complete.proto /app/apps/stables/proto/

# Générer le client Prisma
RUN cd apps/stables && npx prisma generate

# Build l'application
RUN cd apps/stables && pnpm build

# Étape finale
FROM node:20-alpine
WORKDIR /app/stables

# Copier les fichiers nécessaires pour la production
COPY --from=builder /app/apps/stables/dist ./dist
COPY --from=builder /app/apps/stables/package.json ./package.json
COPY --from=builder /app/apps/stables/prisma ./prisma
COPY --from=builder /app/apps/stables/generated ./generated
COPY --from=builder /app/apps/stables/proto ./proto

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
ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/postgres?schema=stables"
ENV PROTO_PATH="/app/stables/proto/stat-auto-complete.proto"

# Démarrer l'application
CMD ["sh", "-c", "prisma migrate deploy && node dist/main"]
