# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build the production bundle
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

# Copy build artifacts from the builder image
COPY --from=builder /app/dist .

# Copy nginx configuration and SSL certs
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /etc/nginx/ssl
COPY kravchenko-daniil.site-ssl-bundle/domain.cert.pem /etc/nginx/ssl/domain.cert.pem
COPY kravchenko-daniil.site-ssl-bundle/private.key.pem /etc/nginx/ssl/private.key.pem
RUN chmod 600 /etc/nginx/ssl/private.key.pem && chmod 644 /etc/nginx/ssl/domain.cert.pem

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
