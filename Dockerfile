# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install deps first (leverage Docker layer caching)
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source and build
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Runtime stage ----
FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Copy the standalone server output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
# Blog content is read at runtime
COPY --from=builder /app/content ./content

EXPOSE 3000

# Cloud Run will set PORT; our start script uses it
CMD ["node", "server.js"]
