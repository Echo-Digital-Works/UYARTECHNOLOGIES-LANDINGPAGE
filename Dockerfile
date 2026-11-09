# Stage 1: Build the React Application
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_API_BASE_URL
ARG VITE_LEADS_API_PATH
ARG VITE_META_PIXEL_ID
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_LEADS_API_PATH=$VITE_LEADS_API_PATH
ENV VITE_META_PIXEL_ID=$VITE_META_PIXEL_ID

RUN npm run build

# Stage 2: Serve the compiled static assets
FROM node:22-alpine AS runner

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3002

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3002', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

CMD ["serve", "-s", "dist", "-l", "3002"]

