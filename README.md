<div align="center">

# 🌿 portfolio-site

### Мой личный сайт — визитка

`HTML` · `CSS` · `nginx` · `Docker`  ·  🟢 [daniilkravchenko.com](https://daniilkravchenko.com)

</div>

---

## 🌱 Что это

Онлайн-визитка: кто я, чем занимаюсь и как со мной связаться. Живёт на [daniilkravchenko.com](https://daniilkravchenko.com).

Два экрана, скролл обычный:

- **Первый** — имя, фото, контакты, переключатель RU/EN.
- **Второй** — проекты и продукты.

## 🔧 Под капотом

Один файл `index.html` — разметка и стили внутри. Ни сборки, ни зависимостей, ни фреймворка.

- **Шрифты локальные** — Unbounded и Golos Text лежат в `assets/fonts`, режутся по unicode-range на кириллицу и латиницу.
- **Язык** — переключается через `lang` у `<html>`, выбор запоминается в `localStorage`.
- **JS** — 4 строки, только на переключатель языка.

## 📦 Запуск

Открыть `index.html` в браузере. Либо поднять nginx локально:

```bash
docker compose up --build
```

Сайт будет на `http://localhost:58080`.

## 🚀 Деплой

Прод — VPS `my-hetzner`, каталог `/opt/portfolio-site`.

1. Залить файлы на сервер (`rsync`).
2. Пересобрать контейнер:

```bash
cd /opt/portfolio-site && docker compose up -d --build
```

Контейнер `kravchenko-site` отдаёт HTTP на `127.0.0.1:58080`. TLS терминирует nginx на хосте — конфиг `/etc/nginx/sites-available/daniilkravchenko.com`, сертификат от Let's Encrypt.

---

<sub>🟢 В проде · [daniilkravchenko.com](https://daniilkravchenko.com)</sub>
