# syntax=docker/dockerfile:1

# Сайт — статика, собирать нечего: копируем файлы в nginx как есть.
# TLS терминирует nginx на хосте, контейнер отдаёт только HTTP.
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

COPY index.html .
COPY assets ./assets
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
