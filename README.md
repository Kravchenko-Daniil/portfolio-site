<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1MIr2GXjlSpZMs1k8PoQfhdbu_oIpF-Og

## Run Locally

**Prerequisites:** Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Docker

1. Build the production image:
   ```bash
   docker build -t kravchenko-site:latest .
   ```
2. Run it locally:
   ```bash
   docker run -dp 58080:80 --name kravchenko-site kravchenko-site:latest
   ```
   The site will be available at http://localhost:58080.

## Deploy via SSH + Docker Compose

1. Скопируйте проект на сервер по SSH (пример с `rsync`, игнорирующим `node_modules` и `dist`):
   ```bash
   rsync -av --exclude node_modules --exclude dist ./ user@SERVER_IP:/opt/kravchenko-site
   ```
   Альтернатива — `scp -r . user@SERVER_IP:/opt/kravchenko-site`.
2. На сервере установите Docker и плагин Compose:
   ```bash
   ssh user@SERVER_IP
   curl -fsSL https://get.docker.com | sh
   sudo apt install docker-compose-plugin -y  # Ubuntu/Debian
   ```
3. Соберите образ и запустите контейнер через Compose:
   ```bash
   cd /opt/kravchenko-site
   docker compose build
   docker compose up -d
   ```
   Контейнер будет слушать 58080 порт хоста.

## Deploy to kravchenko-daniil.site

1. **Prepare a host** – provision a Linux VM or VPS with a public IPv4 address, install Docker (`curl -fsSL https://get.docker.com | sh`), and open ports 80/443 in the firewall.
2. **Push the image** – build locally, tag it for your registry (for example Docker Hub), and push:
   ```bash
   docker login
   docker tag kravchenko-site:latest <your-registry>/kravchenko-site:latest
   docker push <your-registry>/kravchenko-site:latest
   ```
3. **Run on the server** – pull and start the container; publish the container port on 58080 so you can front it with a reverse proxy (helps with TLS):
   ```bash
   docker pull <your-registry>/kravchenko-site:latest
   docker run -d --name kravchenko-site --restart unless-stopped -p 58080:80 <your-registry>/kravchenko-site:latest
   ```
4. **Point the domain** – in the DNS panel where `kravchenko-daniil.site` is registered, create the following A records pointing at the server’s public IPv4:
   - `@` → `<server-ip>`
   - `www` → `<server-ip>` (optional redirect)
   DNS propagation can take up to an hour.
5. **Add TLS and routing** – install Nginx (or Caddy/Traefik) on the server to terminate HTTPS and proxy traffic to the container on port 58080. Example Nginx server block:
   ```nginx
   server {
     listen 80;
     server_name kravchenko-daniil.site www.kravchenko-daniil.site;

     location / {
       proxy_pass http://127.0.0.1:58080;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
     }
   }
   ```
   After that, run `sudo certbot --nginx -d kravchenko-daniil.site -d www.kravchenko-daniil.site` to obtain free Let’s Encrypt certificates. Certbot will automatically inject the HTTPS configuration, and both `http://` and `https://kravchenko-daniil.site` will serve the Dockerized site.

## Two domains on one server (Nginx)

Если на сервере крутятся два проекта (например, `kravchenko-site` на 58080 и второй сайт на 58081), достаточно одного Nginx, который будет проксировать каждый домен на свой порт.

1. Проверьте, что оба контейнера запущены и слушают разные порты:
   ```bash
   docker ps --format "table {{.Names}}\t{{.Ports}}"
   curl -I http://127.0.0.1:58080
   curl -I http://127.0.0.1:58081
   ```
2. Создайте конфиг (например, `/etc/nginx/sites-available/multi-site.conf`):
   ```nginx
   server {
     listen 80;
     server_name kravchenko-daniil.site www.kravchenko-daniil.site;

     location / {
       proxy_pass http://127.0.0.1:58080;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
     }
   }

   server {
     listen 80;
     server_name second-domain.example www.second-domain.example;

     location / {
       proxy_pass http://127.0.0.1:58081;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
     }
   }
   ```
3. Включите конфиг и перезапустите Nginx:
   ```bash
   sudo ln -sf /etc/nginx/sites-available/multi-site.conf /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```
4. Выпустите сертификаты для обоих доменов:
   ```bash
   sudo certbot --nginx -d kravchenko-daniil.site -d www.kravchenko-daniil.site
   sudo certbot --nginx -d gymshark-it.site-d www.gymshark-it.site
   ```
   Certbot добавит `listen 443 ssl` и настроит автоматическое продление сертификатов. Как только DNS-записи обоих доменов указывают на IP сервера, каждый домен будет отдавать свой сайт.



server {
          listen 80;
          server_name kravchenko-daniil.site www.kravchenko-daniil.site;

          location / {
            proxy_pass http://127.0.0.1:58080;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
          }
        }

        server {
          listen 80;
          server_name gymshark-it.site www.gymshark-it.site;

          location / {
            proxy_pass http://127.0.0.1:80;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
          }
        }