# Development stage
FROM node:20-alpine AS base
# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY pnpm-workspace.yaml ./
COPY package.json ./

# Development stage
FROM base AS development
WORKDIR /app
# Copy all files for development
COPY . .
# Install all dependencies including devDependencies
RUN pnpm install
# Change to service directory
WORKDIR /app/apps/app
CMD ["pnpm", "dev"]

# Build stage
FROM base AS builder
WORKDIR /app
COPY . .
RUN pnpm install && pnpm --filter app build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/apps/app/dist ./dist
COPY --from=builder /app/apps/app/package.json .
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --prod
CMD ["node", "dist/main.js"] 