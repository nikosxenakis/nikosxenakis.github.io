# build step
FROM node:24.4-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# serve static files
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
