/* ===== i18n ===== */
const translations = {
  en: {
    'nav.about':       'About',
    'nav.skills':      'Skills',
    'nav.experience':  'Experience',
    'nav.projects':    'Projects',
    'nav.contact':     'Contact',

    'hero.greeting':   "Hello, I'm",
    'hero.desc':       'React Native Developer with 3+ years of experience building mobile apps for iOS & Android. FinTech · HealthTech · FoodTech',
    'hero.btnProjects':'View Projects',
    'hero.btnContact': 'Contact Me',

    'about.title':          'About <span class="accent">Me</span>',
    'about.tag.relocation': '🚀 Open to relocation',
    'about.tag.format':     '🌐 Remote / Hybrid',
    'about.p1': 'I\'m <strong>Yauheni Fiadosenka</strong>, a <strong>React Native Developer</strong> with 3+ years of commercial experience building mobile applications for iOS and Android. I specialize in implementing complex features, integrating business logic and third-party SDKs, optimizing performance, and ensuring high-quality user experiences.',
    'about.p2': 'I\'ve led full development cycles — from architecture design to production support — across products in <strong>FinTech, HealthTech, and FoodTech</strong> domains.',
    'about.p3': 'I prefer working on products where I can influence technical decisions, implementation quality, and the long-term development strategy of mobile applications.',
    'about.stat.exp':      'Years Experience',
    'about.stat.companies':'Companies',
    'about.stat.projects': 'Projects',

    'skills.title':       'Tech <span class="accent">Skills</span>',
    'skills.mobile':      'Mobile',
    'skills.core':        'Core',
    'skills.state':       'State & Data',
    'skills.integrations':'Integrations',
    'skills.ui':          'UI & Animation',
    'skills.tooling':     'Tooling',

    'exp.title': 'Work <span class="accent">Experience</span>',
    'exp.nvt.period':     'Sep 2025 — Present',
    'exp.softarex.period':'Oct 2023 — Sep 2025',
    'exp.tapston.period': 'Feb 2022 — Oct 2023',
    'exp.nvt.items': [
      'Designed and implemented a mobile application from scratch using React Native (Expo)',
      'Configured EAS (Build, Submit, OTA Update) and Sentry; published to App Store & Google Play',
      'Implemented push notification handling via Expo Notifications',
      'Collaborated with backend team for API integration',
      'Maintained technical project documentation',
    ],
    'exp.softarex.items': [
      'Lead frontend developer for a React Native mobile app (iOS & Android)',
      'Implemented family accounts with access control, multi-currency, subscriptions with discounts, and offline mode',
      'Integrated and configured Finicity, Amplitude, Firebase, Appsflyer SDKs',
      'Optimized performance and improved UI/UX',
      'Refactored and optimized the codebase; maintained third-party libraries',
    ],
    'exp.tapston.items': [
      'Developed and maintained multiple iOS & Android apps across full development cycles',
      'Integrated push notifications, payments, third-party SDKs, localization, analytics',
      'Participated in development of a large-scale banking application (architecture, infrastructure)',
      'Mentored junior developers and participated in code reviews',
      'Provided test builds for iOS & Android to QA teams',
    ],

    'projects.title':           'Featured <span class="accent">Projects</span>',
    'projects.subtitle':        'Some of the products I\'ve worked on. Click a card to see details.',
    'projects.viewDetails':     'View Details →',
    'projects.nvt.title':       'MetaPets',
    'projects.nvt.desc':        'Veterinary mobile application built from scratch for pet owners. Full cycle: architecture, development, App Store & Google Play release.',
    'projects.fintech.title':   'Finmatex',
    'projects.fintech.desc':    'Personal finance management app with family accounts, multi-currency support, subscriptions, discounts, and offline mode.',
    'projects.ecobank.title':   'Ecobank',
    'projects.ecobank.desc':    'Large-scale banking app with complex architecture. Involved in full development cycle from infrastructure setup to delivery.',
    'projects.other.title':     'Other Projects',
    'projects.other.badge':     'Other',
    'projects.other.desc':      'Installert, Tap & Serve, Stork — contributed features, bug fixes, and integrations across multiple projects.',

    'contact.title':    'Get In <span class="accent">Touch</span>',
    'contact.subtitle': "I'm open to new opportunities.",
    'contact.email':    'Email',
    'contact.phone':    'Phone',

    'footer.text': 'Designed & Built by <span class="accent">Yauheni Fiadosenka</span> · 2026',

    'modal.stack':       'Tech Stack',
    'modal.highlights':  'Key Highlights',
    'modal.screenshots': 'Screenshots',
    'modal.note':        'Add images named <code>screenshots/[project]-[n].jpg</code> (e.g. <code>newvettech-1.jpg</code>) to show them here.',
    'modal.noScreenshots': 'No screenshots yet.',
  },

  ru: {
    'nav.about':       'Обо мне',
    'nav.skills':      'Навыки',
    'nav.experience':  'Опыт',
    'nav.projects':    'Проекты',
    'nav.contact':     'Контакты',

    'hero.greeting':   'Привет, я —',
    'hero.desc':       'React Native разработчик с 3+ годами опыта создания мобильных приложений для iOS и Android. FinTech · HealthTech · FoodTech',
    'hero.btnProjects':'Смотреть проекты',
    'hero.btnContact': 'Связаться',

    'about.title':          'Обо <span class="accent">мне</span>',
    'about.tag.relocation': '🚀 Готов к переезду',
    'about.tag.format':     '🌐 Удалённо / Гибрид',
    'about.p1': 'Я <strong>Евгений Федосенко</strong>, <strong>React Native разработчик</strong> с 3+ годами коммерческого опыта создания мобильных приложений для iOS и Android. Специализируюсь на реализации сложного функционала, интеграции бизнес-логики и сторонних SDK, оптимизации производительности и обеспечении высокого качества пользовательского опыта.',
    'about.p2': 'Обеспечивал полный цикл разработки — от проектирования архитектуры до продакшн-поддержки — в продуктах сфер <strong>FinTech, HealthTech и FoodTech</strong>.',
    'about.p3': 'Предпочитаю работу над продуктом, где могу влиять на технические решения, качество реализации и стратегию долгосрочного развития мобильного приложения.',
    'about.stat.exp':      'Лет опыта',
    'about.stat.companies':'Компании',
    'about.stat.projects': 'Проектов',

    'skills.title':       'Технические <span class="accent">навыки</span>',
    'skills.mobile':      'Мобильная разработка',
    'skills.core':        'Основа',
    'skills.state':       'Стейт и данные',
    'skills.integrations':'Интеграции',
    'skills.ui':          'UI и анимации',
    'skills.tooling':     'Инструменты',

    'exp.title': 'Опыт <span class="accent">работы</span>',
    'exp.nvt.period':     'Сен 2025 — настоящее время',
    'exp.softarex.period':'Окт 2023 — Сен 2025',
    'exp.tapston.period': 'Фев 2022 — Окт 2023',
    'exp.nvt.items': [
      'Полностью спроектировал и реализовал мобильное приложение с нуля на React Native (Expo)',
      'Интеграция и настройка EAS (Build, Submit, OTA Update) и Sentry; публикация в App Store и Google Play',
      'Реализовал приём и обработку пуш-уведомлений (Expo Notifications)',
      'Взаимодействие с командой бэкенда для подключения API',
      'Вёл и поддерживал техническую документацию проекта',
    ],
    'exp.softarex.items': [
      'Ведущий фронтенд-разработчик мобильного приложения на React Native для iOS и Android',
      'Внедрение системы семейных аккаунтов с разграничением прав, мультивалютности и подписок со скидками, оффлайн-режима',
      'Интеграция и настройка SDK: Finicity, Amplitude, Firebase, Appsflyer',
      'Оптимизация производительности и улучшение UI/UX',
      'Рефакторинг и оптимизация кодовой базы; поддержка актуальности сторонних библиотек',
    ],
    'exp.tapston.items': [
      'Разработка и поддержка нескольких мобильных приложений на iOS и Android, полный цикл разработки с нуля',
      'Интеграция уведомлений, платежей, сторонних SDK, локализации, аналитических систем',
      'Участие в разработке крупного банковского приложения (архитектура, инфраструктура)',
      'Наставление младших разработчиков, участие в code review',
      'Предоставление тестовых сборок для iOS и Android команде QA',
    ],

    'projects.title':           'Избранные <span class="accent">проекты</span>',
    'projects.subtitle':        'Продукты, над которыми я работал. Нажмите на карточку, чтобы увидеть детали.',
    'projects.viewDetails':     'Подробнее →',
    'projects.nvt.title':       'MetaPets',
    'projects.nvt.desc':        'Ветеринарное мобильное приложение, написанное с нуля. Полный цикл: архитектура, разработка, релиз в App Store и Google Play.',
    'projects.fintech.title':   'Finmatex',
    'projects.fintech.desc':    'Приложение для управления личными финансами с семейными аккаунтами, мультивалютностью, подписками, скидками и оффлайн-режимом.',
    'projects.ecobank.title':   'Ecobank',
    'projects.ecobank.desc':    'Крупное банковское приложение со сложной архитектурой. Участие в полном цикле разработки от инфраструктуры до релиза.',
    'projects.other.title':     'Другие проекты',
    'projects.other.badge':     'Другие',
    'projects.other.desc':      'Installert, Tap & Serve, Stork — участие в разработке нескольких приложений: функционал, фикс багов и интеграции.',

    'contact.title':    'Связаться <span class="accent">со мной</span>',
    'contact.subtitle': 'Я открыт к новым предложениям.',
    'contact.email':    'Эл. почта',
    'contact.phone':    'Телефон',

    'footer.text': 'Разработано <span class="accent">Евгением Федосенко</span> · 2026',

    'modal.stack':       'Стек технологий',
    'modal.highlights':  'Ключевые достижения',
    'modal.screenshots': 'Скриншоты',
    'modal.note':        'Добавьте файлы <code>screenshots/[проект]-[n].jpg</code> (например <code>newvettech-1.jpg</code>), чтобы они отображались здесь.',
    'modal.noScreenshots': 'Скриншотов пока нет.',
  },
};

let currentLang = 'ru';

function t(key) {
  return translations[currentLang][key] ?? translations['en'][key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  // Plain text / innerHTML elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== undefined) el.innerHTML = val;
  });

  // List elements
  document.querySelectorAll('[data-i18n-list]').forEach(el => {
    const key = el.getAttribute('data-i18n-list');
    const items = translations[currentLang][key] ?? translations['en'][key];
    if (Array.isArray(items)) {
      el.innerHTML = items.map(i => `<li>${i}</li>`).join('');
    }
  });

  // Lang toggle active state
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Hero name — EN: Yauheni Fiadosenka / RU: Евгений Федосенко
  const heroName = document.getElementById('hero-name');
  if (heroName) {
    heroName.innerHTML = currentLang === 'ru'
      ? 'Евгений <span class="accent">Федосенко</span>'
      : 'Yauheni <span class="accent">Fiadosenka</span>';
  }

  // Typed roles
  typedRoles = currentLang === 'ru'
    ? ['React Native разработчик', 'Мобильный инженер iOS & Android', 'TypeScript разработчик', 'Архитектор мобильных приложений']
    : ['React Native Developer', 'iOS & Android Engineer', 'Mobile App Architect', 'TypeScript Enthusiast'];
}

/* ===== TYPED ANIMATION ===== */
let typedRoles = ['React Native Developer', 'iOS & Android Engineer', 'Mobile App Architect', 'TypeScript Enthusiast'];
let roleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = typedRoles[roleIdx % typedRoles.length];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % typedRoles.length;
    }
  }
  setTimeout(type, deleting ? 45 : 80);
}

type();

/* ===== LANG TOGGLE ===== */
document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  applyTranslations();
});

applyTranslations();

/* ===== SCROLL NAV ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 20
    ? 'rgba(42,42,53,.8)'
    : 'var(--border)';
});

/* ===== BURGER ===== */
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== INTERSECTION OBSERVER (fade-in) ===== */
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.skill-card, .timeline-card, .project-card, .contact-card, .about-grid, .section-title, .section-subtitle')
  .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });

/* ===== PROJECT DATA ===== */
// screenshots: array of filenames to look for in screenshots/ folder (relative to index.html)
// storeLinks: optional array of {icon, label, url} for store/website buttons (shown instead of screenshots grid)
const projects = {
  metapets: {
    titleKey: 'projects.nvt.title',
    badge: '<span class="project-badge badge-health">HealthTech</span>',
    screenshotFiles: ['metapets-1', 'metapets-2', 'metapets-3', 'metapets-4'],
    storeLinks: [
      { icon: '🌐', label: 'Website', url: 'https://meta-pets.ru/' },
    ],
    descKey: {
      en: `A veterinary mobile application for pet owners, built entirely from scratch. 
      Full development cycle — architecture, implementation, and release to App Store & Google Play.`,
      ru: `Ветеринарное мобильное приложение для владельцев питомцев, написанное с нуля. 
      Полный цикл разработки — архитектура, реализация и релиз в App Store и Google Play.`,
    },
    stack: ['React Native', 'Expo', 'TypeScript', 'EAS Build', 'EAS Submit', 'OTA Update', 'Sentry', 'Expo Notifications', 'Redux Toolkit'],
    highlightsKey: {
      en: [
        'Designed and implemented the mobile app from scratch on React Native (Expo)',
        'Configured EAS Build, EAS Submit, and OTA updates for seamless deployment',
        'Integrated Sentry for error monitoring and crash reporting',
        'Implemented push notification handling with Expo Notifications',
        'Published the application to both App Store and Google Play',
        'Collaborated with backend team for full API integration',
        'Maintained technical project documentation throughout the lifecycle',
      ],
      ru: [
        'Полностью спроектировал и реализовал мобильное приложение с нуля на React Native (Expo)',
        'Настроил EAS Build, EAS Submit и OTA-обновления для бесшовного деплоя',
        'Интегрировал Sentry для мониторинга ошибок и крэш-репортов',
        'Реализовал обработку пуш-уведомлений через Expo Notifications',
        'Опубликовал приложение в App Store и Google Play',
        'Взаимодействовал с командой бэкенда для полной интеграции API',
        'Поддерживал техническую документацию на протяжении всего жизненного цикла',
      ],
    },
  },

  fintech: {
    titleKey: 'projects.fintech.title',
    badge: '<span class="project-badge badge-fin">FinTech</span>',
    screenshotFiles: [],
    storeLinks: [
      { icon: '🍎', label: 'App Store', url: 'https://apps.apple.com/us/app/finmatex-simple-budget-planner/id1529432691' },
      { icon: '🤖', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.finmatex' },
      { icon: '🌐', label: 'Website', url: 'https://finmatex.com/' },
    ],
    descKey: {
      en: `A personal finance management application with advanced family account management, 
      multi-currency support, subscription handling with discount tiers, and full offline functionality. 
      Led mobile development at Softarex Technologies for 2 years.`,
      ru: `Приложение для управления личными финансами с системой семейных аккаунтов, 
      мультивалютностью, подписками со скидками и полным оффлайн-режимом. 
      Вёл мобильную разработку в Softarex Technologies на протяжении 2 лет.`,
    },
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Finicity SDK', 'Amplitude', 'Firebase', 'Appsflyer', 'SQLite', 'Reanimated'],
    highlightsKey: {
      en: [
        'Lead frontend developer for iOS & Android application',
        'Implemented family accounts system with granular access control (role-based permissions)',
        'Built multi-currency support and subscription plans with discount tiers',
        'Developed offline mode',
        'Implemented a complete app redesign',
        'Integrated Finicity for open banking / financial data aggregation',
        'Set up Amplitude and Appsflyer for analytics and attribution tracking',
        'Optimized rendering performance and improved UI/UX across the app',
        'Refactored and modernized the codebase; kept third-party libraries up to date',
      ],
      ru: [
        'Ведущий фронтенд-разработчик приложения для iOS и Android',
        'Реализовал систему семейных аккаунтов с детальным управлением доступом (RBAC)',
        'Разработал мультивалютность и планы подписок со скидками',
        'Реализовал оффлайн-режим',
        'Реализовал полный редизайн приложения',
        'Интегрировал Finicity для агрегации финансовых данных (open banking)',
        'Настроил Amplitude и Appsflyer для аналитики и атрибуции',
        'Оптимизировал производительность рендеринга и улучшил UI/UX',
        'Провёл рефакторинг кодовой базы; поддерживал актуальность библиотек',
      ],
    },
  },

  ecobank: {
    titleKey: 'projects.ecobank.title',
    badge: '<span class="project-badge badge-fin">FinTech</span>',
    screenshotFiles: ['ecobank-1', 'ecobank-2', 'ecobank-3', 'ecobank-4'],
    descKey: {
      en: `A large-scale banking mobile application developed during my time at Tapston. 
      Involved in the full development lifecycle — from designing the architecture 
      and setting up infrastructure to building features and supporting releases.`,
      ru: `Крупное банковское мобильное приложение, разработанное в компании Tapston. 
      Участие в полном жизненном цикле — от проектирования архитектуры 
      и настройки инфраструктуры до реализации фич и поддержки релизов.`,
    },
    stack: ['React Native', 'TypeScript', 'Redux Saga', 'REST API', 'Git', 'Jira', 'Figma'],
    highlightsKey: {
      en: [
        'Participated in full development lifecycle of a large-scale banking app',
        'Contributed to architecture design and infrastructure setup',
        'Integrated payment processing and financial transaction flows',
        'Implemented push notifications and real-time data updates',
        'Added multi-language localization support',
        'Connected analytics systems for user behavior tracking',
        'Mentored junior developers and conducted code reviews',
        'Delivered test builds to QA team for iOS and Android',
      ],
      ru: [
        'Участие в полном цикле разработки крупного банковского приложения',
        'Вклад в проектирование архитектуры и настройку инфраструктуры',
        'Интеграция обработки платежей и финансовых транзакций',
        'Реализация пуш-уведомлений и обновлений данных в реальном времени',
        'Добавление мультиязычной локализации',
        'Подключение аналитических систем для отслеживания поведения пользователей',
        'Наставничество младших разработчиков и проведение code review',
        'Предоставление тестовых сборок команде QA для iOS и Android',
      ],
    },
  },

  other: {
    titleKey: 'projects.other.title',
    badge: '<span class="project-badge badge-other" data-i18n="projects.other.badge">Other</span>',
    screenshotFiles: ['installert-1', 'installert-2', 'tapserve-1', 'tapserve-2'],
    descKey: {
      en: `Several applications I contributed to at Tapston: Installert, Tap & Serve, and Stork. Implemented specific features, bug fixes, and integrations.`,
      ru: `Несколько приложений, в которых я принимал участие в компании Tapston: Installert, Tap & Serve и Stork. Реализовывал отдельный функционал, фиксил баги и делал интеграции.`,
    },
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Maps SDK', 'REST API'],
    highlightsKey: {
      en: [
        '<strong>Installert</strong> — app for tracking installation zones with interactive maps',
        '<strong>Tap & Serve</strong> — restaurant POS and management software',
        '<strong>Stork</strong> — mobile app for pregnant women with social network features; support and bug fixes',
        'Integrated third-party SDKs and analytics in both projects',
        'Worked on localization and performance optimization',
      ],
      ru: [
        '<strong>Installert</strong> — приложение для отслеживания зон установки на интерактивных картах',
        '<strong>Tap & Serve</strong> — программное обеспечение для ресторанов (POS)',
        '<strong>Stork</strong> — мобильное приложение для беременных с элементами социальной сети; поддержка и фикс багов',
        'Интеграция сторонних SDK и аналитики в обоих проектах',
        'Локализация и оптимизация производительности',
      ],
    },
  },
};

/* ===== MODAL ===== */

// Try to load screenshot images from the screenshots/ folder.
// We attempt to load each candidate filename with common extensions.
// If the image 404s, we skip it (via onerror).
function buildScreenshotsSection(id, files) {
  if (!files || files.length === 0) return '';
  const imgs = files.map(name =>
    `<div class="screenshot-real">
      <img src="screenshots/${name}.jpg" alt="${name}"
           onerror="this.closest('.screenshot-real').remove(); checkEmptyGrid(document.getElementById('ss-grid-${id}'), '${id}')" />
    </div>`
  ).join('');
  return `<div class="screenshots-grid-real" id="ss-grid-${id}">${imgs}</div>`;
}

function checkEmptyGrid(grid, id) {
  if (grid && grid.children.length === 0) {
    grid.remove();
    const prev = document.querySelector(`[data-empty-label="${id}"]`);
    if (prev) prev.remove();
  }
}

function buildStoreLinks(links) {
  if (!links || links.length === 0) return '';
  const btns = links.map(l =>
    `<a class="store-btn" href="${l.url}" target="_blank" rel="noopener">
      <span class="store-btn-icon">${l.icon}</span>${l.label}
    </a>`
  ).join('');
  return `
    <div class="modal-section-title">${currentLang === 'ru' ? 'Ссылки' : 'Links'}</div>
    <div class="store-links">${btns}</div>
  `;
}

function openProject(id) {
  const p = projects[id];
  if (!p) return;
  const lang = currentLang;

  const screenshotsSection = p.storeLinks
    ? buildStoreLinks(p.storeLinks)
    : buildScreenshotsSection(id, p.screenshotFiles);

  document.getElementById('modal-content').innerHTML = `
    <h2>${t(p.titleKey)}</h2>
    <div class="modal-badge">${p.badge}</div>
    <p class="modal-desc">${p.descKey[lang] || p.descKey.en}</p>

    <div class="modal-section-title">${t('modal.stack')}</div>
    <div class="modal-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>

    <div class="modal-section-title">${t('modal.highlights')}</div>
    <div class="modal-highlights">
      <ul>${(p.highlightsKey[lang] || p.highlightsKey.en).map(h => `<li>${h}</li>`).join('')}</ul>
    </div>

    ${screenshotsSection}
  `;

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

