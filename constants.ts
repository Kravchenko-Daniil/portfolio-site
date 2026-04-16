export type Language = 'en' | 'ru';

export type ProjectCategory =
  | 'AI Automation / Sales'
  | 'AI Automation / Operations'
  | 'Backend / Business Systems'
  | 'Backend / APIs'
  | 'Bots / Messaging'
  | 'Data / Automation'
  | 'Automation / Marketplaces'
  | 'Web Development'
  | 'Data / Parsing'
  | 'Data / Scraping'
  | 'Data Engineering / Enterprise';

export interface ProjectItem {
  title: string;
  description: string; // Full description (1-2 paragraphs)
  short_description?: string; // 1 line for card
  what_was_done?: string;
  result?: string; // Result/Business value
  technologies: string;
  category: ProjectCategory;
  links?: { label: string; url: string }[];
  image?: string; // Optional image path
}

export interface Content {
  header: {
    brand: string;
    nav: string[]; // [Story, Now, How I operate, Life, Achievements, Career, Goals, Contact]
    toggle: { en: string; ru: string };
  };
  hero: {
    headline: string;
    subheadline: string;
    photo_alt: string;
    passport_title: string;
    passport_fields: { label: string; value: string }[];
    passport_contacts_title: string;
    passport_contacts: { label: string; value: string }[];
  };
  story: {
    title: string;
    paragraphs: string[];
  };
  now: {
    title: string;
    text: string;
    projectUrl?: string;
  };
  operate: {
    title: string;
    intro: string;
    bullets: string[];
  };
  life: {
    title: string;
    paragraphs: string[];
  };
  achievements: {
    title: string;
    bullets: string[];
  };
  career: {
    title: string;
    items: {
      company: string;
      role: string;
      year: string;
      description: string;
      stack: string;
    }[];
  };
  projects: {
    title: string;
    close_modal: string;
    items: ProjectItem[];
  };
  goals: {
    title: string;
    cards: { title: string; text: string }[];
  };
  contact: {
    title: string;
    text: string;
    telegram: string;
    email: string;
    facebook: string;
    instagram: string;
  };
  footer: {
    text: string;
  };
}

export const content: Record<Language, Content> = {
  en: {
    header: {
      brand: "Daniil",
      nav: ["Story", "Now", "How I operate", "Life", "Achievements", "Career", "Projects", "Goals", "Contact"],
      toggle: { en: "EN", ru: "RU" },
    },
    hero: {
      headline: "Hi, I’m Daniil",
      subheadline: "Software Engineer. Building AI automation, bots, parsers, and backend systems.",
      photo_alt: "Portrait of Daniil",
      passport_title: "Profile",
      passport_fields: [
        { label: "Name", value: "Daniil Kravchenko" },
        { label: "Age", value: "23" },
        { label: "Role", value: "Software Engineer" },
        { label: "Location", value: "Phuket, Thailand" },
      ],
      passport_contacts_title: "Contact",
      passport_contacts: [
        { label: "Telegram", value: "@coomanio33" },
        { label: "Email", value: "krawchenkodaniil@gmail.com" },
      ],
    },
    story: {
      title: "My story",
      paragraphs: [
        "I graduated from the Financial University in Moscow. 5+ years in backend development: from in-house roles at large companies to independent projects. Now I combine work with freelance and focus on AI automation and SaaS development. By 21, I reached $3,000/month.",
        "The gym is my anchor: I gained +10 kg of muscle in six months. For me, it’s discipline, consistency, and proof that daily effort compounds.",
      ],
    },
    now: {
      title: "What I’m doing now",
      text: "Currently working with a company in the online services space: AI integrations, SaaS systems, automation. In parallel, I take on freelance projects in the same area.",
    },
    operate: {
      title: "How I operate",
      intro: "A quick note about how I work:",
      bullets: [
        "I learn fast and perform best when there’s meaning and genuine interest.",
        "Once I’m locked in, I go deep and finish what I start.",
        "I don’t rely on endless willpower — I rely on structure, environment, and a clear goal.",
        "My best rhythm is sprints: push hard → recover → push again.",
        "I stay calm under pressure and prefer clarity over noise.",
      ],
    },
    life: {
      title: "Life & interests",
      paragraphs: [
        "Sport is my anchor. Training keeps me stable and sharp.",
        "I’m deeply interested in human nature, philosophy, and psychology — what drives people, how attention and motivation work.",
        "I’m inspired by ideas around discipline, energy, and living in alignment with human nature — without fanaticism, as a guide, not a dogma.",
      ],
    },
    achievements: {
      title: "Achievements",
      bullets: [
        "Reached $3,000+/month at 21",
        "University degree + Master’s",
        "Moved to Thailand at 22 and built a remote lifestyle",
        "Strong discipline through training and routine (+10 kg muscle in 6 months)",
        "5 years of consistent engineering experience: ownership, delivery, pressure-resistance",
        "Shifted focus: from in-house roles to freelance and AI automation",
      ],
    },
    career: {
      title: "Career",
      items: [
        {
          company: "Freelance / private development",
          role: "Software Engineer",
          year: "Feb 2026 — present",
          description: "Building SaaS systems end-to-end: FastAPI backends, Next.js operator panels, Celery workers. AI integrations (LLM-based agents, email automation), integrations with Google Ads, email providers, social networks, and payment gateways. Data pipelines, media processing, internal admin panels for teams.",
          stack: "Python (FastAPI), TypeScript, Next.js, React, Celery, PostgreSQL, Redis, S3/MinIO, Docker, LLM (OpenAI, Anthropic)"
        },
        {
          company: "Innotech",
          role: "Lead Developer",
          year: "2024 — Feb 2026",
          description: "Building and maintaining internal services and data workflows: pipelines, integrations, automation, and production reliability.",
          stack: "Airflow, Go, Python, PostgreSQL, Kafka, RabbitMQ, Docker, S3, gRPC/REST"
        },
        {
          company: "OMP",
          role: "Software Developer",
          year: "2023 — 2024",
          description: "Worked on microservices for a sanatorium management system: APIs, service-to-service integration, and event-driven workflows.",
          stack: "Python, Django, Kafka, Celery, PostgreSQL, Docker"
        },
        {
          company: "Ingosstrakh",
          role: "Software Engineer",
          year: "2021 — 2023",
          description: "Developed HelpDesk and internal systems: services, reporting, integrations, database optimization, and stability.",
          stack: "Python, Django/FastAPI, PostgreSQL, Kubernetes, ELK, Docker"
        }
      ]
    },
    projects: {
      title: "Projects",
      close_modal: "Close",
      items: [
        {
          title: "AI Lead Qualification & First-Line Sales Bot",
          short_description: "AI-powered first-line lead qualification.",
          description: "AI chatbot designed to handle inbound leads on the first line of communication. The bot responds to incoming messages, asks clarifying questions, qualifies leads based on predefined criteria, and routes them to the CRM. This reduces manual workload and ensures fast response times.",
          what_was_done: "Designed conversation scenarios, implemented lead qualification logic, integrated the bot with Bitrix24 CRM, and connected the AI model for intent recognition.",
          result: "Sales team received only qualified leads, while response time to new inquiries was reduced to seconds.",
          technologies: "Python, OpenAI API, Telegram Bot API, Bitrix24 CRM, Webhooks",
          category: "AI Automation / Sales"
        },
        {
          title: "AI Email & Inbox Automation",
          short_description: "AI-based email classification and routing.",
          description: "Automation system for processing incoming emails using AI. The system analyzes message content, classifies emails by topic and priority, and routes them to the appropriate department or workflow. In some cases, draft replies are generated automatically.",
          what_was_done: "Implemented email fetching via Gmail API, integrated an LLM for text classification, and built routing logic for different business scenarios.",
          result: "Reduced manual email processing and improved response consistency across teams.",
          technologies: "Python, Gmail API, OpenAI API, PostgreSQL",
          category: "AI Automation / Operations"
        },
        {
          title: "CRM & Helpdesk Systems",
          short_description: "Custom CRM and support platforms.",
          description: "Development of custom CRM and helpdesk systems tailored to specific business workflows. These systems include request tracking, role-based access, internal dashboards, and API integrations with external services.",
          what_was_done: "Designed system architecture, implemented backend APIs, user roles, and business logic for request handling.",
          result: "Improved transparency of internal processes and reduced operational friction.",
          technologies: "Python, Django, PostgreSQL, Redis, REST API",
          category: "Backend / Business Systems"
        },
        {
          title: "Backend APIs & Web Services",
          short_description: "Scalable backend services and APIs.",
          description: "Development of backend services and APIs for web and internal systems. Focused on clean architecture, performance, and maintainability, with clear API contracts for frontend and integrations.",
          what_was_done: "Designed REST APIs, implemented authentication and authorization, and optimized database interactions.",
          result: "Stable and scalable backend foundation for multiple applications.",
          technologies: "FastAPI, Flask, Django, PostgreSQL, Docker",
          category: "Backend / APIs"
        },
        {
          title: "Telegram Bots",
          short_description: "Business-focused Telegram bots.",
          description: "Custom Telegram bots built for business automation, notifications, and user interaction. Bots were used as lightweight interfaces to internal systems and services.",
          what_was_done: "Implemented bot logic, configured webhooks, and integrated bots with backend services and databases.",
          result: "Simplified user interaction with business systems through messengers.",
          technologies: "Python, aiogram, Telegram Bot API, Webhooks",
          category: "Bots / Messaging"
        },
        {
          title: "VK Bots & Messaging Automation",
          short_description: "Automated VK message handling.",
          description: "Automation of message processing and replies in VK communities. The solution handled inbound messages, basic categorization, and automated responses.",
          what_was_done: "Developed VK bots using Long Poll API and implemented message handling logic.",
          result: "Reduced manual moderation and response workload for VK communities.",
          technologies: "Python, VK API",
          category: "Bots / Messaging"
        },
        {
          title: "Company Owner Finder by INN",
          short_description: "Company owner contact lookup by INN.",
          description: "Standalone tool for finding contact information of company owners. The system takes a company INN as input and returns associated phone numbers collected from open and semi-open data sources.",
          what_was_done: "Built data collection pipelines, normalized results from multiple sources, and implemented validation logic.",
          result: "Used as a lead enrichment tool for B2B sales and analytics.",
          technologies: "Python, Requests, Data Parsing, API Integration",
          category: "Data / Automation"
        },
        {
          title: "Wildberries Supply Automation Tool",
          short_description: "Automated supply slot booking.",
          description: "Automation tool for booking supply slots on the Wildberries marketplace. The system indicates available slots and books them automatically based on predefined rules.",
          what_was_done: "Analyzed marketplace network requests, implemented authorization handling, and built a booking automation workflow.",
          result: "Helped sellers secure supply slots during high-demand periods.",
          technologies: "Python, Requests, Reverse Engineering",
          category: "Automation / Marketplaces"
        },
        {
          title: "Websites & Online Stores",
          short_description: "Custom websites and e-commerce projects.",
          description: "Development of high-performance websites and online stores. From conversion-focused landing pages to complex e-commerce platforms with custom admin panels and integrations.",
          what_was_done: "Implemented backend logic, databases, and frontend integration.",
          result: "Delivered fully functional web projects ready for production use.",
          technologies: "Python, Django, React, PostgreSQL",
          category: "Web Development",
          links: [
            { label: "Example: Alanpir", url: "https://alanpir.ru/" }
          ]
        },
        {
          title: "Custom Web Parsers & Data Collectors",
          short_description: "Custom data extraction solutions.",
          description: "Development of custom parsers for extracting structured data from websites. Solutions handled pagination, authentication, and dynamic content.",
          what_was_done: "Implemented scraping logic and data normalization pipelines.",
          result: "Reliable data collection for analytics and automation tasks.",
          technologies: "Python, Selenium, Requests, BeautifulSoup",
          category: "Data / Parsing"
        },
        {
          title: "Advanced Scraping & Anti-Bot Handling",
          short_description: "Bypassing complex scraping protections.",
          description: "Advanced scraping of protected websites with anti-bot mechanisms. Included session management, dynamic rendering, and request fingerprinting handling.",
          what_was_done: "Implemented browser automation and request simulation strategies.",
          result: "Enabled stable data extraction from heavily protected sources.",
          technologies: "Python, Playwright, Selenium",
          category: "Data / Scraping"
        },
        {
          title: "Big Data Processing & Pipelines",
          short_description: "Corporate data pipelines and ETL.",
          description: "Development of data processing pipelines in corporate environments. Systems handled scheduled data ingestion, transformation, and validation.",
          what_was_done: "Designed and maintained Airflow DAGs and processing jobs.",
          result: "Improved reliability and transparency of data flows.",
          technologies: "Apache Airflow, Python, SQL, PostgreSQL",
          category: "Data Engineering / Enterprise"
        }
      ]
    },
    goals: {
      title: "Goals",
      cards: [
        { title: "Main goal", text: "Build my own business company." },
      ],
    },
    contact: {
      title: "Contact",
      text: "If you want to connect or talk about business and ideas — feel free to message me.",
      telegram: "@coomanio33",
      email: "krawchenkodaniil@gmail.com",
      facebook: "https://www.facebook.com/profile.php?id=61584293031799",
      instagram: "https://www.instagram.com/krav4enko_dd/",
    },
    footer: {
      text: "© Daniil Kravchenko",
    },
  },
  ru: {
    header: {
      brand: "Даниил",
      nav: ["История", "Сейчас", "Как я устроен", "Жизнь", "Достижения", "Карьера", "Проекты", "Цели", "Контакты"],
      toggle: { en: "EN", ru: "RU" },
    },
    hero: {
      headline: "Привет, я Даниил",
      subheadline: "Разработчик ПО. Делаю AI-автоматизацию, ботов, парсеры и backend-системы.",
      photo_alt: "Фото Даниила",
      passport_title: "Профиль",
      passport_fields: [
        { label: "Имя", value: "Даниил Кравченко" },
        { label: "Возраст", value: "23 года" },
        { label: "Роль", value: "Разработчик ПО" },
        { label: "Локация", value: "Пхукет, Таиланд" },
      ],
      passport_contacts_title: "Контакты",
      passport_contacts: [
        { label: "Telegram", value: "@coomanio33" },
        { label: "Email", value: "krawchenkodaniil@gmail.com" },
      ],
    },
    story: {
      title: "Моя история",
      paragraphs: [
        "Я окончил Московский финансовый университет. 5+ лет в backend-разработке: прошёл путь от найма в крупных компаниях до самостоятельных проектов. Сейчас совмещаю работу с фрилансом и фокусируюсь на AI-автоматизации и SaaS. В 21 год вышел на доход $3,000 в месяц.",
        "Спортзал — мой фундамент: за полгода набрал +10 кг мышц. Для меня это про дисциплину, режим и привычку делать каждый день то, что ведёт к цели.",
      ],
    },
    now: {
      title: "Что я делаю сейчас",
      text: "Работаю с компанией в сегменте онлайн-услуг: AI-интеграции, SaaS-системы, автоматизация. Параллельно беру фриланс-проекты по той же теме.",
    },
    operate: {
      title: "Как я устроен",
      intro: "Коротко про мой “режим работы”:",
      bullets: [
        "Быстро учусь и сильнее всего раскрываюсь, когда есть смысл и интерес.",
        "Если включился — ухожу в глубокий фокус и довожу до результата.",
        "Я не ставлю на одну силу воли: мне важны структура, среда и понятная цель.",
        "Лучший ритм для меня — спринты: рывок → восстановление → рывок.",
        "В напряжении я спокойнее, чем многие: выбираю ясность вместо шума.",
      ],
    },
    life: {
      title: "Жизнь и интересы",
      paragraphs: [
        "Спорт — мой якорь. Тренировки держат меня в форме и в голове, и в теле.",
        "Мне очень интересна глубинная природа человека, философия и психология — что движет людьми, как работают внимание и мотивация.",
        "Я вдохновляюсь идеями о дисциплине, энергии и жизни в согласии с природой человека — без фанатизма, как ориентир, а не как догма.",
      ],
    },
    achievements: {
      title: "Достижения",
      bullets: [
        "В 21 год вышел на доход $3,000+ в месяц",
        "Высшее образование + магистратура",
        "В 22 года переехал в Таиланд и выстроил жизнь в формате “remote”",
        "Сильная дисциплина через спорт и режим (за 6 месяцев +10 кг мышц)",
        "5 лет стабильного опыта в разработке: довожу задачи до результата, умею работать под давлением",
        "Сменил фокус: с найма на фриланс и AI-автоматизацию",
      ],
    },
    career: {
      title: "Карьера",
      items: [
        {
          company: "Фриланс / частная разработка",
          role: "Разработчик ПО",
          year: "Февраль 2026 — сейчас",
          description: "Разрабатываю SaaS-системы под ключ: backend на FastAPI, оператор-панели на Next.js, воркеры на Celery. AI-интеграции (агенты на LLM, автоматизация писем), интеграции с Google Ads, email-сервисами, соцсетями и платёжными шлюзами. Data-пайплайны, обработка медиа, админ-панели для команд.",
          stack: "Python (FastAPI), TypeScript, Next.js, React, Celery, PostgreSQL, Redis, S3/MinIO, Docker, LLM (OpenAI, Anthropic)"
        },
        {
          company: "Иннотех",
          role: "Ведущий разработчик",
          year: "2024 — февраль 2026",
          description: "Разрабатываю и поддерживаю data-процессы и внутренние сервисы: пайплайны, интеграции, автоматизация, надёжность продакшена.",
          stack: "Airflow, Go, Python, PostgreSQL, Kafka, RabbitMQ, Docker, S3, gRPC/REST"
        },
        {
          company: "ОМП",
          role: "Разработчик",
          year: "2023 — 2024",
          description: "Работал над микросервисами для системы управления санаториями: API, интеграции между сервисами, процессы и события.",
          stack: "Python, Django, Kafka, Celery, PostgreSQL, Docker"
        },
        {
          company: "Ингосстрах",
          role: "Инженер-программист",
          year: "2021 — 2023",
          description: "Развивал HelpDesk и внутренние системы: сервисы, отчётность, интеграции, оптимизация базы и стабильность.",
          stack: "Python, Django/FastAPI, PostgreSQL, Kubernetes, ELK, Docker"
        }
      ]
    },
    projects: {
      title: "Проекты",
      close_modal: "Закрыть",
      items: [
        {
          title: "AI Lead Qualification & First-Line Sales Bot",
          short_description: "AI-квалификация входящих лидов.",
          description: "AI чат-бот для обработки входящих лидов на первой линии. Бот отвечает на сообщения, задает уточняющие вопросы, квалифицирует лидов по заданным критериям и передает их в CRM. Это снижает ручную нагрузку и обеспечивает быстрый ответ.",
          what_was_done: "Разработал сценарии диалога, реализовал логику квалификации, интегрировал бота с Bitrix24 CRM и подключил AI-модель для распознавания намерений.",
          result: "Отдел продаж получал только квалифицированных лидов, а время ответа на новые запросы сократилось до секунд.",
          technologies: "Python, OpenAI API, Telegram Bot API, Bitrix24 CRM, Webhooks",
          category: "AI Automation / Sales"
        },
        {
          title: "AI Email & Inbox Automation",
          short_description: "Классификация и маршрутизация писем с AI.",
          description: "Система автоматизации обработки входящих писем с использованием AI. Система анализирует контент, классифицирует письма по теме и приоритету, и маршрутизирует их в нужный отдел. В некоторых случаях автоматически генерируются черновики ответов.",
          what_was_done: "Реализовал сбор почты через Gmail API, интегрировал LLM для классификации и настроил логику маршрутизации.",
          result: "Сократили ручную обработку писем и улучшили согласованность ответов.",
          technologies: "Python, Gmail API, OpenAI API, PostgreSQL",
          category: "AI Automation / Operations"
        },
        {
          title: "CRM & Helpdesk Systems",
          short_description: "Кастомные CRM и платформы поддержки.",
          description: "Разработка кастомных CRM и helpdesk систем под конкретные бизнес-процессы. Системы включают трекинг заявок, ролевой доступ, дашборды и интеграции.",
          what_was_done: "Спроектировал архитектуру, реализовал API, роли пользователей и бизнес-логику.",
          result: "Улучшена прозрачность процессов и снижено операционное трение.",
          technologies: "Python, Django, PostgreSQL, Redis, REST API",
          category: "Backend / Business Systems"
        },
        {
          title: "Backend APIs & Web Services",
          short_description: "Масштабируемые бэкенд-сервисы и API.",
          description: "Разработка бэкенд-сервисов и API. Фокус на чистой архитектуре, производительности и поддерживаемости, с четкими контрактами API.",
          what_was_done: "Спроектировал REST API, реализовал аутентификацию и оптимизировал работу с БД.",
          result: "Стабильный и масштабируемый фундамент для приложений.",
          technologies: "FastAPI, Flask, Django, PostgreSQL, Docker",
          category: "Backend / APIs"
        },
        {
          title: "Telegram Bots",
          short_description: "Telegram-боты для бизнеса.",
          description: "Кастомные Telegram боты для автоматизации бизнеса и уведомлений. Использовались как легкие интерфейсы к внутренним системам.",
          what_was_done: "Реализовал логику бота, настроил вебхуки и интегрировал с бэкендом.",
          result: "Упрощено взаимодействие с бизнес-системами через мессенджер.",
          technologies: "Python, aiogram, Telegram Bot API, Webhooks",
          category: "Bots / Messaging"
        },
        {
          title: "VK Bots & Messaging Automation",
          short_description: "Авто-обработка сообщений ВКонтакте.",
          description: "Автоматизация обработки сообщений и ответов в сообществах VK. Решение обрабатывало входящие, категоризировало и отвечало.",
          what_was_done: "Разработал ботов на VK Long Poll API и логику обработки.",
          result: "Снижена нагрузка на модерацию сообществ.",
          technologies: "Python, VK API",
          category: "Bots / Messaging"
        },
        {
          title: "Company Owner Finder by INN",
          short_description: "Поиск контактов владельцев по ИНН.",
          description: "Инструмент для поиска контактов владельцев компаний. На вход подается ИНН, на выходе — телефоны из открытых источников.",
          what_was_done: "Построил пайплайны сбора данных, нормализации и валидации.",
          result: "Инструмент использовался для обогащения лидов в B2B продажах.",
          technologies: "Python, Requests, Data Parsing, API Integration",
          category: "Data / Automation"
        },
        {
          title: "Wildberries Supply Automation Tool",
          short_description: "Авто-бронирование слотов поставок.",
          description: "Инструмент автоматизации бронирования слотов на Wildberries. Система находит и бронирует слоты по правилам.",
          what_was_done: "Проанализировал запросы маркетплейса, реализовал авторизацию и автоматизацию бронирования.",
          result: "Помог продавцам занимать слоты в высокий сезон.",
          technologies: "Python, Requests, Reverse Engineering",
          category: "Automation / Marketplaces"
        },
        {
          title: "Websites & Online Stores",
          short_description: "Кастомные сайты и e-commerce.",
          description: "Разработка высокопроизводительных сайтов и интернет-магазинов. От конверсионных лендингов до сложных e-commerce платформ с кастомными админ-панелями и интеграциями.",
          what_was_done: "Реализовал бэкенд, базы данных и интеграцию фронтенда.",
          result: "Готовые к продакшену веб-проекты.",
          technologies: "Python, Django, React, PostgreSQL",
          category: "Web Development",
          links: [
            { label: "Пример: Alanpir", url: "https://alanpir.ru/" }
          ]
        },
        {
          title: "Custom Web Parsers & Data Collectors",
          short_description: "Решения для извлечения данных.",
          description: "Разработка парсеров для сбора данных с сайтов. Обработка пагинации, авторизации и динамического контента.",
          what_was_done: "Реализовал логику скрапинга и нормализации данных.",
          result: "Надежный сбор данных для аналитики.",
          technologies: "Python, Selenium, Requests, BeautifulSoup",
          category: "Data / Parsing"
        },
        {
          title: "Advanced Scraping & Anti-Bot Handling",
          short_description: "Обход сложных защит от ботов.",
          description: "Скрапинг защищенных сайтов. Управление сессиями, динамический рендеринг и фингерпринты.",
          what_was_done: "Реализовал автоматизацию браузера и симуляцию запросов.",
          result: "Стабильное извлечение данных из защищенных источников.",
          technologies: "Python, Playwright, Selenium",
          category: "Data / Scraping"
        },
        {
          title: "Big Data Processing & Pipelines",
          short_description: "Корпоративные дата-пайплайны и ETL.",
          description: "Разработка пайплайнов обработки данных в корпоративной среде. Загрузка, трансформация и валидация данных.",
          what_was_done: "Проектировал и поддерживал DAG-и в Airflow.",
          result: "Улучшена надежность и прозрачность потоков данных.",
          technologies: "Apache Airflow, Python, SQL, PostgreSQL",
          category: "Data Engineering / Enterprise"
        }
      ]
    },
    goals: {
      title: "Цели",
      cards: [
        { title: "Главная цель", text: "Построить свою бизнес-компанию." },
      ],
    },
    contact: {
      title: "Контакты",
      text: "Если хочешь познакомиться или поговорить про бизнес и идеи — пиши.",
      telegram: "@coomanio33",
      email: "krawchenkodaniil@gmail.com",
      facebook: "https://www.facebook.com/profile.php?id=61584293031799",
      instagram: "https://www.instagram.com/krav4enko_dd/",
    },
    footer: {
      text: "© Даниил Кравченко",
    },
  },
};