FROM node:20-alpine AS build
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM node:20-alpine
WORKDIR /app

# Only copy what's needed to run
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./server.js

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD ["node", "server.js"]

