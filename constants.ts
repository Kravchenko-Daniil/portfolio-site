export type Language = 'en' | 'ru';

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
  goals: {
    title: string;
    cards: { title: string; text: string }[];
  };
  contact: {
    title: string;
    text: string;
    telegram: string;
    email: string;
    website: string;
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
      nav: ["Story", "Now", "How I operate", "Life", "Achievements", "Career", "Goals", "Contact"],
      toggle: { en: "EN", ru: "RU" },
    },
    hero: {
      headline: "Hi, I’m Daniil",
      subheadline: "I’m building my own business — focused on AI automation that removes routine from teams",
      photo_alt: "Portrait of Daniil",
      passport_title: "Profile",
      passport_fields: [
        { label: "Name", value: "Daniil Kravchenko" },
        { label: "Age", value: "23" },
        { label: "Role", value: "Software Engineer · Entrepreneur" },
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
        "I graduated from the Financial University in Moscow. I spent 5 years working as a backend developer, learning to take ownership and deliver results under real pressure. By 21, I reached $3,000/month.",
        "The gym is my anchor: I gained +10 kg of muscle in six months. For me, it’s discipline, consistency, and proof that daily effort compounds.",
      ],
    },
    now: {
      title: "What I’m building now",
      text: "I’m building AI automations that help businesses move faster: fewer manual tasks, less chaos, more focus on what matters. Right now I’m packaging this into clear products and testing them with real companies.",
      projectUrl: "https://gymshark-it.site/"
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
        "Made a clear shift in focus: from “working inside systems” to building my own business",
      ],
    },
    career: {
      title: "Career",
      items: [
        {
          company: "Innotech",
          role: "Lead Developer",
          year: "2024 — present",
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
    goals: {
      title: "Goals",
      cards: [
        { title: "Current milestone", text: "Reach $10,000/month." },
        { title: "Dream", text: "Hit $1,000,000/month by age 25." },
      ],
    },
    contact: {
      title: "Contact",
      text: "If you want to connect or talk about business and ideas — feel free to message me.",
      telegram: "@coomanio33",
      email: "krawchenkodaniil@gmail.com",
      website: "https://gymshark-it.site/",
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
      nav: ["История", "Сейчас", "Как я устроен", "Жизнь", "Достижения", "Карьера", "Цели", "Контакты"],
      toggle: { en: "EN", ru: "RU" },
    },
    hero: {
      headline: "Привет, я Даниил",
      subheadline: "Я строю свой бизнес — фокус на AI-автоматизации, которая убирает рутину из команд",
      photo_alt: "Фото Даниила",
      passport_title: "Профиль",
      passport_fields: [
        { label: "Имя", value: "Даниил Кравченко" },
        { label: "Возраст", value: "23 года" },
        { label: "Роль", value: "Разработчик · Предприниматель" },
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
        "Я окончил Московский финансовый университет. Пять лет работал backend-разработчиком и рано научился держать ответственность и доводить задачи до результата. В 21 год вышел на доход $3,000 в месяц.",
        "Спортзал — мой фундамент: за полгода набрал +10 кг мышц. Для меня это про дисциплину, режим и привычку делать каждый день то, что ведёт к цели.",
      ],
    },
    now: {
      title: "Что я делаю сейчас",
      text: "Я собираю AI-автоматизации, которые ускоряют работу бизнеса: меньше ручного труда, меньше хаоса, больше фокуса на важном. Сейчас превращаю это в понятные продукты и тестирую на реальных компаниях.",
      projectUrl: "https://gymshark-it.site/"
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
        "Осознанно сменил фокус: от “работать в системе” → к “строить свой бизнес”",
      ],
    },
    career: {
      title: "Карьера",
      items: [
        {
          company: "Иннотех",
          role: "Ведущий разработчик",
          year: "2024 — сейчас",
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
    goals: {
      title: "Цели",
      cards: [
        { title: "Ближайшая планка", text: "Выйти на $10,000 в месяц." },
        { title: "Мечта", text: "$1,000,000 в месяц к 25 годам." },
      ],
    },
    contact: {
      title: "Контакты",
      text: "Если хочешь познакомиться или поговорить про бизнес и идеи — пиши.",
      telegram: "@coomanio33",
      email: "krawchenkodaniil@gmail.com",
      website: "https://gymshark-it.site/",
      facebook: "https://www.facebook.com/profile.php?id=61584293031799",
      instagram: "https://www.instagram.com/krav4enko_dd/",
    },
    footer: {
      text: "© Даниил Кравченко",
    },
  },
};