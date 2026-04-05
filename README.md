# postq-site

Основной сайт [postq.space](https://postq.space) — PostQ VPN.

**Стек:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Radix UI · Lucide · Turbopack · PWA · Docker · Caddy

---

## Структура проекта

```
postq-site/
├── app/
│   ├── layout.tsx          # Root layout, metadata, PWA
│   ├── globals.css         # Глобальные стили + CSS переменные
│   ├── page.tsx            # Главная страница (WebGL эффект)
│   └── privacy/
│       └── page.tsx        # Политика конфиденциальности
├── public/
│   ├── icons/
│   │   ├── icon.svg        # Основной логотип
│   │   ├── splash.svg      # Сплэш иконка
│   │   ├── icon-192.png    # PWA иконка 192px
│   │   └── icon-512.png    # PWA иконка 512px
│   └── manifest.json       # PWA манифест
├── Dockerfile
├── docker-compose.yml
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev сервера (Turbopack)
npm run dev
# → http://localhost:3000

# Сборка
npm run build

# Запуск production
npm start
```

---

## Развёртывание на сервере

### Требования

- Docker + Docker Compose
- Caddy (уже настроен в основном проекте)
- Сеть `remnawave_bot_network` (уже существует)

### Первый деплой

```bash
# 1. Клонируй репозиторий
git clone https://github.com/ТВО_ИМЯORG/postq-site ~/postq-site
cd ~/postq-site

# 2. Генерация PNG иконок для PWA (один раз)
npm install
node -e "
const sharp = require('sharp');
sharp('public/icons/icon.svg').resize(192).png().toFile('public/icons/icon-192.png', (e) => console.log('192 done', e));
sharp('public/icons/icon.svg').resize(512).png().toFile('public/icons/icon-512.png', (e) => console.log('512 done', e));
"

# 3. Сборка и запуск
docker compose up -d --build

# 4. Проверка
docker logs postq_site --tail=20
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

### Настройка Caddyfile

Добавь в `~/remnawave-bedolaga-telegram-bot/Caddyfile`:

```
postq.space {
    encode gzip zstd
    reverse_proxy postq_site:3000 {
        header_up Host {host}
        header_up X-Real-IP {remote_host}
    }
}
```

Перезапусти Caddy:

```bash
docker restart remnawave_caddy
```

### Проверка после деплоя

```bash
# Контейнер запущен
docker ps | grep postq_site

# HTTP коды (должны быть 200)
curl -s -o /dev/null -w "%{http_code}" https://postq.space
curl -s -o /dev/null -w "%{http_code}" https://postq.space/privacy

# Логи
docker logs postq_site --tail=50
```

### Обновление

```bash
cd ~/postq-site
git pull
docker compose up -d --build
# Старый контейнер заменяется автоматически
```

---

## DNS

В Cloudflare для домена `postq.space` запись A должна указывать на IP сервера с ботом (`95.85.251.107`) с **оранжевым облаком** (Proxied).

---

## Страницы

| URL | Описание |
|-----|----------|
| `postq.space` | Главная — WebGL эффект, ссылки на бота и кабинет |
| `postq.space/privacy` | Политика конфиденциальности |

---

## CSS переменные (общий стиль)

```css
--bg: #04000f        /* основной фон */
--bg2: #08001a       /* фон header/cards */
--bg3: #1a1a24       /* фон элементов */
--accent: #cf00a3    /* акцентный цвет (магента) */
--accent2: #931b79   /* тёмный акцент */
--text: #f4f4f5      /* основной текст */
--text2: #a1a1aa     /* вторичный текст */
--border: rgba(255,255,255,0.08)
```
