FROM node:22-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json yarn.lock ./

# Install dependencies and clean cache
RUN yarn install --frozen-lockfile --production=false && \
    yarn cache clean

# Copy source files
COPY . .

# Build production bundle
RUN yarn build:prod

FROM nginx:1.27-alpine AS production

# Update packages to fix vulnerabilities
RUN apk update && \
    apk upgrade --no-cache && \
    rm -rf /var/cache/apk/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Create temporary directories for nginx non-root user
RUN mkdir -p /tmp/client_temp /tmp/proxy_temp_path /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp && \
    chmod -R 777 /tmp/client_temp /tmp/proxy_temp_path /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp

# Create non-root user for nginx (if not already exists)
RUN addgroup -g 101 -S nginx 2>/dev/null || true && \
    adduser -S -D -H -u 101 -h /var/cache/nginx -s /sbin/nologin -G nginx -g nginx nginx 2>/dev/null || true

# Change ownership of nginx files
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chmod -R 755 /usr/share/nginx/html

# Switch to non-root user
USER nginx

# Expose port 8080 (non-privileged port)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1
