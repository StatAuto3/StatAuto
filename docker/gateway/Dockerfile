# docker/gateway/Dockerfile

# Utilise le Dockerfile de base avec le service gateway
FROM node:20-alpine AS base

# Install base dependencies including openssl for Prisma and build tools for native modules.
RUN apk add --no-cache bash openssl python3 build-base && \
    corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps ./apps

# Install dependencies at workspace level
RUN pnpm install

# Development stage
FROM base AS development

WORKDIR /app/apps/gateway

# Install service-specific dependencies
RUN pnpm install

# Create proto directory and copy all proto files for gateway
RUN mkdir -p proto && \
    cp /app/packages/proto/*.proto ./proto/ && \
    chmod 644 ./proto/*.proto

CMD ["pnpm", "start:dev"]

# Builder stage
FROM base AS builder

WORKDIR /app/apps/gateway

# Install service-specific dependencies
RUN pnpm install

# Create proto directory and copy all proto files for gateway
RUN mkdir -p proto && \
    cp /app/packages/proto/*.proto ./proto/ && \
    chmod 644 ./proto/*.proto

RUN pnpm build

# Production stage
FROM node:20-alpine AS production

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy dist and runtime deps
COPY --from=builder /app/apps/gateway/dist ./dist
COPY --from=builder /app/apps/gateway/package.json ./
RUN mkdir -p /app/packages/proto
COPY --from=builder /app/packages/proto/*.proto /app/packages/proto/
RUN mkdir -p /app/packages/types
COPY --from=builder /app/packages/types/*.proto /app/packages/types/

# Install production dependencies
RUN apk add --no-cache openssl && \
    apk add --no-cache --virtual .build-deps build-base python3 && \
    pnpm install --prod && \
    apk del .build-deps

EXPOSE 3001

CMD ["node", "dist/main"]
