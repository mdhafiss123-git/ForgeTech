const { CATEGORY, lesson, mod, buildStubModules } = require('./courseHelpers');

/* ============================================================
   FULLY DETAILED — Courses 1–15
   (Frontend 1–10, Backend 11–15)
   ============================================================ */

const detailedCourses = [
  // 1 ------------------------------------------------------------
  {
    title: 'HTML5 and CSS3 Modern Web Foundations',
    slug: 'html5-css3-modern-web-foundations',
    category: CATEGORY.FRONTEND,
    level: 'Beginner',
    price: 1,
    shortDescription: 'Semantic HTML, modern CSS layout, and responsive design from first principles.',
    fullDescription:
      'Start here if you are new to the web. This course covers semantic markup, the box model, Flexbox, Grid, and building fully responsive layouts without a framework — the foundation every other frontend course builds on.',
    instructor: 'TechForge Faculty',
    duration: '10 hours',
    tags: ['HTML', 'CSS', 'Responsive Design', 'Flexbox', 'Grid'],
    modules: [
      mod('Module 1: Semantic HTML', [
        lesson('Document structure & semantic tags', {
          duration: '12 min',
          isPreview: true,
          content:
            '# Document structure & semantic tags\n\nSemantic HTML describes the *meaning* of content, not just its appearance. Using `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>` instead of generic `<div>`s gives browsers, search engines, and assistive tech a real map of your page.\n\n## Why it matters\n- Screen readers announce landmarks so users can jump straight to content.\n- Search engines weight semantic sections differently.\n- Teammates can scan the markup and instantly understand layout intent.\n\n## Key takeaways\n- Reach for a semantic tag before a `<div>` whenever one fits.\n- One `<main>` per page.',
        }),
        lesson('Forms & accessible inputs', { duration: '15 min', isPreview: true }),
        lesson('HTML5 media & embeds', { duration: '10 min', type: 'video' }),
        lesson('Accessibility (a11y) basics', { duration: '14 min' }),
      ]),
      mod('Module 2: CSS Fundamentals', [
        lesson('The box model, in depth', { duration: '14 min' }),
        lesson('Selectors, specificity & the cascade', { duration: '16 min' }),
        lesson('Typography & spacing systems', { duration: '12 min' }),
        lesson('Colors, gradients & modern CSS units', { duration: '13 min' }),
      ]),
      mod('Module 3: Modern Layout', [
        lesson('Flexbox from scratch', { duration: '20 min', type: 'video' }),
        lesson('CSS Grid for two-dimensional layouts', { duration: '20 min' }),
        lesson('Responsive design with media queries', { duration: '14 min' }),
        lesson('Capstone: responsive landing page', { duration: '45 min', type: 'assignment' }),
      ]),
    ],
  },

  // 2 ------------------------------------------------------------
  {
    title: 'Advanced JavaScript ES2025',
    slug: 'advanced-javascript-es2025',
    category: CATEGORY.FRONTEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'Modern JavaScript features, async patterns, and the language internals every framework relies on.',
    fullDescription:
      'Go beyond the basics: closures, the event loop, the latest ES2025 syntax, and the DOM APIs you use daily whether you work in React, Vue, or vanilla JS.',
    instructor: 'TechForge Faculty',
    duration: '14 hours',
    tags: ['JavaScript', 'ES2025', 'Async/Await', 'DOM'],
    modules: [
      mod('Module 1: Language Internals', [
        lesson('Closures & lexical scope', {
          duration: '12 min',
          isPreview: true,
          content:
            '# Closures & lexical scope\n\nA closure is a function that remembers the variables from where it was defined, not where it is called.\n\n```js\nfunction makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\n```\n\n`count` is not global, not passed as an argument — the returned function simply keeps a reference to the scope it was created in.\n\n## Key takeaways\n- Every function carries its creation scope with it.\n- Closures are how private state works in JavaScript without classes.',
        }),
        lesson('The event loop, visually', { duration: '18 min', type: 'video', isPreview: true }),
        lesson('Prototypes & the class syntax', { duration: '14 min' }),
        lesson('New in ES2025: records, tuples & pattern matching', { duration: '16 min' }),
      ]),
      mod('Module 2: Async Patterns', [
        lesson('Promises: then, catch, all, race', { duration: '16 min' }),
        lesson('async/await & error handling', { duration: '16 min' }),
        lesson('AbortController & cancellation', { duration: '12 min' }),
        lesson('Generators & async iterators', { duration: '15 min' }),
      ]),
      mod('Module 3: Working With the Platform', [
        lesson('Modules: import/export deep dive', { duration: '10 min' }),
        lesson('Array & object methods you should know', { duration: '18 min' }),
        lesson('Web APIs: fetch, storage, observers', { duration: '16 min' }),
        lesson('Capstone: a small async task runner', { duration: '50 min', type: 'assignment' }),
      ]),
    ],
  },

  // 3 ------------------------------------------------------------
  {
    title: 'React 19 Essentials and Hooks',
    slug: 'react-19-essentials-and-hooks',
    category: CATEGORY.FRONTEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'Components, the full hooks API, and the mental model behind every React 19 app.',
    fullDescription:
      'A complete React 19 course: JSX, component composition, hooks (including the new use() hook and Actions), context, and the performance patterns used in production apps.',
    instructor: 'TechForge Faculty',
    duration: '18 hours',
    tags: ['React', 'React 19', 'Hooks', 'JSX'],
    modules: [
      mod('Module 1: React Fundamentals', [
        lesson('JSX and how React renders', {
          duration: '14 min',
          isPreview: true,
          content:
            '# JSX and how React renders\n\nJSX compiles down to `React.createElement()` calls. React builds a tree of these elements, diffs it against the previous tree, and applies the minimal set of real DOM updates.\n\n```jsx\nconst el = <h1 className="title">Hello</h1>;\n// compiles to:\nReact.createElement("h1", { className: "title" }, "Hello");\n```\n\n## Key takeaways\n- JSX is syntax sugar, not magic.\n- React reconciles; it does not touch the DOM for every state change directly.',
          type: 'markdown',
        }),
        lesson('Props, composition & children', { duration: '14 min', isPreview: true }),
        lesson('Conditional rendering & lists', { duration: '12 min' }),
        lesson('Forms in React', { duration: '14 min' }),
      ]),
      mod('Module 2: The Hooks API', [
        lesson('useState & the rules of hooks', { duration: '16 min' }),
        lesson('useEffect & the dependency array', { duration: '20 min', type: 'video' }),
        lesson('useMemo, useCallback & useRef', { duration: '18 min' }),
        lesson('The new use() hook & Actions', { duration: '16 min' }),
      ]),
      mod('Module 3: State, Context & Performance', [
        lesson('Lifting state up & the Context API', { duration: '16 min' }),
        lesson('Custom hooks', { duration: '16 min' }),
        lesson('Why components re-render (and React.memo)', { duration: '16 min' }),
        lesson('Capstone: paginated data table', { duration: '50 min', type: 'assignment' }),
      ]),
    ],
  },

  // 4 ------------------------------------------------------------
  {
    title: 'Tailwind CSS Masterclass',
    slug: 'tailwind-css-masterclass',
    category: CATEGORY.FRONTEND,
    level: 'Beginner',
    price: 1,
    shortDescription: 'Utility-first styling, design tokens, and building a real component library with Tailwind.',
    fullDescription:
      'Learn to build fast, consistent, themeable UI with Tailwind — from utility fundamentals to extracting a reusable design system your whole team can share.',
    instructor: 'TechForge Faculty',
    duration: '8 hours',
    tags: ['Tailwind CSS', 'Design Systems', 'UI Engineering'],
    modules: [
      mod('Module 1: Utility-First Fundamentals', [
        lesson('Why utility-first CSS', {
          duration: '10 min',
          isPreview: true,
          content:
            '# Why utility-first CSS\n\nInstead of writing `.card { padding: 1rem; border-radius: 0.5rem; }` in a stylesheet, Tailwind lets you compose the same result directly in markup: `p-4 rounded-lg`.\n\n## The trade-off\n- You stop naming things (no more `.card`, `.card--featured`, `.card__title`).\n- Styles live next to the markup they affect, so nothing goes stale.\n- The generated CSS stays small because classes are reused everywhere.\n\nThis course teaches you to think in utilities without losing design consistency.',
        }),
        lesson('Spacing, sizing & the design scale', { duration: '12 min', isPreview: true }),
        lesson('Typography utilities', { duration: '10 min' }),
        lesson('Flexbox & Grid utilities', { duration: '14 min' }),
      ]),
      mod('Module 2: Responsive & Stateful Styling', [
        lesson('Responsive prefixes & mobile-first design', { duration: '12 min' }),
        lesson('Dark mode & state variants', { duration: '14 min', type: 'video' }),
        lesson('Animations & transitions', { duration: '12 min' }),
        lesson('Arbitrary values & the theme() function', { duration: '10 min' }),
      ]),
      mod('Module 3: Theming & Design Systems', [
        lesson('Customizing tailwind.config', { duration: '14 min' }),
        lesson('Extracting reusable components', { duration: '14 min' }),
        lesson('Working with @apply responsibly', { duration: '10 min' }),
        lesson('Capstone: themeable component library', { duration: '40 min', type: 'assignment' }),
      ]),
    ],
  },

  // 5 ------------------------------------------------------------
  {
    title: 'TypeScript for Production Apps',
    slug: 'typescript-for-production-apps',
    category: CATEGORY.FRONTEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'Type systems, generics, and typing real React components with confidence.',
    fullDescription:
      'Go from "TypeScript is annoying" to "I can\'t code without it." Covers the type system fundamentals through advanced generics and typing React props, hooks, and events.',
    instructor: 'TechForge Faculty',
    duration: '12 hours',
    tags: ['TypeScript', 'React', 'Generics', 'Type Safety'],
    modules: [
      mod('Module 1: Type System Basics', [
        lesson('Basic types & type inference', {
          duration: '12 min',
          isPreview: true,
          content:
            '# Basic types & type inference\n\nTypeScript infers types automatically in most cases.\n\n```ts\nlet count = 5; // inferred as number\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n```\n\n## Key takeaways\n- Let inference do the work; only annotate when it improves readability.\n- `interface` and `type` both describe object shapes.',
        }),
        lesson('Interfaces vs type aliases', { duration: '12 min', isPreview: true }),
        lesson('Union & intersection types', { duration: '14 min' }),
        lesson('Narrowing & type guards', { duration: '14 min' }),
      ]),
      mod('Module 2: Generics', [
        lesson('Generic functions', { duration: '16 min' }),
        lesson('Generic constraints & utility types', { duration: '18 min', type: 'video' }),
        lesson('Conditional & mapped types', { duration: '16 min' }),
        lesson('Typing async code', { duration: '12 min' }),
      ]),
      mod('Module 3: TypeScript + React', [
        lesson('Typing component props & children', { duration: '14 min' }),
        lesson('Typing useState, useReducer & events', { duration: '16 min' }),
        lesson('Typing custom hooks & context', { duration: '14 min' }),
        lesson('Capstone: strictly-typed form library', { duration: '45 min', type: 'assignment' }),
      ]),
    ],
  },

  // 6 ------------------------------------------------------------
  {
    title: 'Next.js App Router and SSR',
    slug: 'nextjs-app-router-and-ssr',
    category: CATEGORY.FRONTEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'App Router, server components, and shipping production Next.js apps.',
    fullDescription:
      'Learn the App Router, Server vs Client Components, data fetching & caching, route handlers, server actions, and deployment on a modern Next.js codebase.',
    instructor: 'TechForge Faculty',
    duration: '16 hours',
    tags: ['Next.js', 'React', 'SSR', 'App Router'],
    modules: [
      mod('Module 1: App Router Fundamentals', [
        lesson('File-based routing & layouts', {
          duration: '14 min',
          isPreview: true,
          content:
            '# File-based routing & layouts\n\nIn the App Router, a folder inside `/app` is a route segment. A `page.jsx` inside it makes that segment navigable; a `layout.jsx` wraps every page beneath it and persists across navigations.\n\n```\napp/\n  layout.jsx      <- root layout\n  page.jsx        <- "/"\n  courses/\n    page.jsx      <- "/courses"\n    [slug]/\n      page.jsx    <- "/courses/:slug"\n```\n\n## Key takeaways\n- Layouts persist state and don\'t re-render on navigation within them.\n- `[slug]` folders create dynamic routes automatically.',
        }),
        lesson('Dynamic routes & route groups', { duration: '14 min', isPreview: true }),
        lesson('Loading & error UI conventions', { duration: '10 min' }),
        lesson('Metadata & SEO basics', { duration: '12 min' }),
      ]),
      mod('Module 2: Server & Client Components', [
        lesson('Server Components mental model', { duration: '18 min', type: 'video' }),
        lesson('When to reach for "use client"', { duration: '12 min' }),
        lesson('Composing server & client components', { duration: '14 min' }),
        lesson('Streaming with Suspense', { duration: '14 min' }),
      ]),
      mod('Module 3: Data & Production', [
        lesson('Data fetching & caching in the App Router', { duration: '18 min' }),
        lesson('Route handlers & server actions', { duration: '16 min' }),
        lesson('Image, font & performance optimization', { duration: '12 min' }),
        lesson('Capstone: full-stack blog with Next.js', { duration: '60 min', type: 'assignment' }),
      ]),
    ],
  },

  // 7 ------------------------------------------------------------
  {
    title: 'Vue.js Modern Development',
    slug: 'vuejs-modern-development',
    category: CATEGORY.FRONTEND,
    level: 'Beginner',
    price: 1,
    shortDescription: 'Composition API, reactivity, and building real apps with Vue 3.',
    fullDescription:
      'A friendly, thorough introduction to Vue 3: the Composition API, reactivity system, single-file components, and Vue Router — everything you need to build a real app.',
    instructor: 'TechForge Faculty',
    duration: '11 hours',
    tags: ['Vue', 'Vue 3', 'Composition API'],
    modules: [
      mod('Module 1: Vue Fundamentals', [
        lesson('Single-file components & templates', {
          duration: '12 min',
          isPreview: true,
          content:
            '# Single-file components & templates\n\nA Vue `.vue` file bundles template, script, and style together:\n\n```vue\n<template>\n  <h1>{{ title }}</h1>\n</template>\n<script setup>\nconst title = "Hello Vue";\n</script>\n<style scoped>\nh1 { color: teal; }\n</style>\n```\n\n## Key takeaways\n- `{{ }}` interpolates reactive values into the template.\n- `scoped` styles never leak outside the component.',
        }),
        lesson('The Composition API vs Options API', { duration: '14 min', isPreview: true }),
        lesson('Reactivity: ref & reactive', { duration: '14 min' }),
        lesson('Computed properties & watchers', { duration: '14 min' }),
      ]),
      mod('Module 2: Components & Routing', [
        lesson('Props, emits & slots', { duration: '16 min' }),
        lesson('Vue Router basics', { duration: '14 min', type: 'video' }),
        lesson('Composables (custom hooks)', { duration: '14 min' }),
        lesson('Forms & v-model', { duration: '12 min' }),
      ]),
      mod('Module 3: Building a Real App', [
        lesson('State management with Pinia', { duration: '16 min' }),
        lesson('Fetching & displaying API data', { duration: '14 min' }),
        lesson('Transitions & animations', { duration: '12 min' }),
        lesson('Capstone: a Vue task manager', { duration: '45 min', type: 'assignment' }),
      ]),
    ],
  },

  // 8 ------------------------------------------------------------
  {
    title: 'Angular Complete Guide',
    slug: 'angular-complete-guide',
    category: CATEGORY.FRONTEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'Components, dependency injection, RxJS, and building enterprise-grade Angular apps.',
    fullDescription:
      'A structured tour of Angular\'s opinionated architecture: components, services, dependency injection, RxJS observables, and the router — the patterns large teams rely on.',
    instructor: 'TechForge Faculty',
    duration: '15 hours',
    tags: ['Angular', 'RxJS', 'TypeScript'],
    modules: [
      mod('Module 1: Angular Fundamentals', [
        lesson('Components, templates & data binding', {
          duration: '14 min',
          isPreview: true,
          content:
            '# Components, templates & data binding\n\nAngular components pair a TypeScript class with an HTML template. Data binding syncs them:\n\n```html\n<h1>{{ title }}</h1>\n<input [(ngModel)]="title" />\n```\n\n`{{ }}` is one-way interpolation; `[(ngModel)]` is two-way binding, keeping the input and the class property in sync automatically.\n\n## Key takeaways\n- Angular components are classes decorated with `@Component`.\n- Two-way binding needs the `FormsModule`.',
        }),
        lesson('Directives: *ngIf, *ngFor, and custom directives', { duration: '14 min', isPreview: true }),
        lesson('Dependency injection & services', { duration: '16 min' }),
        lesson('Angular modules (NgModules) & standalone components', { duration: '14 min' }),
      ]),
      mod('Module 2: Reactive Programming', [
        lesson('RxJS observables from scratch', { duration: '18 min', type: 'video' }),
        lesson('Reactive forms', { duration: '16 min' }),
        lesson('HTTP client & interceptors', { duration: '16 min' }),
        lesson('The Angular router', { duration: '14 min' }),
      ]),
      mod('Module 3: Production Angular', [
        lesson('State management patterns', { duration: '16 min' }),
        lesson('Testing components & services', { duration: '16 min' }),
        lesson('Performance & change detection', { duration: '14 min' }),
        lesson('Capstone: an admin dashboard', { duration: '55 min', type: 'assignment' }),
      ]),
    ],
  },

  // 9 ------------------------------------------------------------
  {
    title: 'Astro Static Site Development',
    slug: 'astro-static-site-development',
    category: CATEGORY.FRONTEND,
    level: 'Beginner',
    price: 1,
    shortDescription: 'Build blazing-fast content sites with Astro\'s islands architecture.',
    fullDescription:
      'Learn Astro\'s zero-JS-by-default philosophy, islands architecture, content collections, and how to ship content-heavy sites that load instantly.',
    instructor: 'TechForge Faculty',
    duration: '7 hours',
    tags: ['Astro', 'Static Sites', 'Performance'],
    modules: [
      mod('Module 1: Astro Fundamentals', [
        lesson('Islands architecture explained', {
          duration: '12 min',
          isPreview: true,
          content:
            '# Islands architecture explained\n\nAstro renders everything to static HTML by default and ships zero JavaScript unless you explicitly opt a component into interactivity — an "island."\n\n```astro\n<Counter client:load />\n```\n\nOnly `<Counter />` hydrates; the rest of the page stays static HTML.\n\n## Key takeaways\n- Static-first means faster pages by default.\n- `client:load`, `client:idle`, and `client:visible` control *when* an island hydrates.',
        }),
        lesson('.astro components & templating', { duration: '12 min', isPreview: true }),
        lesson('Layouts & slots', { duration: '10 min' }),
        lesson('Using React/Vue/Svelte components inside Astro', { duration: '14 min' }),
      ]),
      mod('Module 2: Content & Data', [
        lesson('Content collections & Markdown/MDX', { duration: '16 min', type: 'video' }),
        lesson('Fetching data at build time', { duration: '12 min' }),
        lesson('Dynamic routes for content', { duration: '12 min' }),
        lesson('Image optimization', { duration: '10 min' }),
      ]),
      mod('Module 3: Shipping', [
        lesson('SEO & sitemaps', { duration: '10 min' }),
        lesson('Deploying an Astro site', { duration: '10 min' }),
        lesson('Adding a CMS backend', { duration: '14 min' }),
        lesson('Capstone: a content-driven blog', { duration: '40 min', type: 'assignment' }),
      ]),
    ],
  },

  // 10 -----------------------------------------------------------
  {
    title: 'Remix Full-Stack Web Apps',
    slug: 'remix-full-stack-web-apps',
    category: CATEGORY.FRONTEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'Nested routing, loaders/actions, and building full-stack apps that work without JS.',
    fullDescription:
      'Remix embraces web fundamentals — forms, HTTP, and progressive enhancement — to build full-stack apps that are fast and resilient by default.',
    instructor: 'TechForge Faculty',
    duration: '13 hours',
    tags: ['Remix', 'React', 'Full-Stack'],
    modules: [
      mod('Module 1: Remix Fundamentals', [
        lesson('Nested routing & route conventions', {
          duration: '14 min',
          isPreview: true,
          content:
            '# Nested routing & route conventions\n\nRemix routes are files, and nested folders create nested UI — a parent route\'s `<Outlet />` renders the matched child route.\n\n```\nroutes/\n  courses.jsx        <- layout for all /courses/* routes\n  courses._index.jsx <- "/courses"\n  courses.$slug.jsx  <- "/courses/:slug"\n```\n\n## Key takeaways\n- Nested routes mean nested loading states and error boundaries too.\n- `$slug` is Remix\'s dynamic segment syntax.',
        }),
        lesson('Loaders: fetching data on the server', { duration: '14 min', isPreview: true }),
        lesson('Actions: handling form submissions', { duration: '14 min' }),
        lesson('Error boundaries & catch boundaries', { duration: '10 min' }),
      ]),
      mod('Module 2: Progressive Enhancement', [
        lesson('Forms that work without JavaScript', { duration: '14 min', type: 'video' }),
        lesson('Optimistic UI', { duration: '14 min' }),
        lesson('Sessions & cookies', { duration: '14 min' }),
        lesson('Authentication patterns', { duration: '16 min' }),
      ]),
      mod('Module 3: Shipping Remix', [
        lesson('Data mutations & revalidation', { duration: '14 min' }),
        lesson('Deploying Remix apps', { duration: '10 min' }),
        lesson('Testing loaders & actions', { duration: '12 min' }),
        lesson('Capstone: a full-stack bookmarking app', { duration: '55 min', type: 'assignment' }),
      ]),
    ],
  },

  // 11 -----------------------------------------------------------
  {
    title: 'Node.js and Express Backend Engineering',
    slug: 'nodejs-express-backend-engineering',
    category: CATEGORY.BACKEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'Build production-grade REST APIs with Node.js, Express, and MongoDB.',
    fullDescription:
      'Everything you need to build real backend services: routing, middleware, authentication, error handling, and connecting to MongoDB the right way.',
    instructor: 'TechForge Faculty',
    duration: '15 hours',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    modules: [
      mod('Module 1: Express Fundamentals', [
        lesson('Routing & middleware', {
          duration: '14 min',
          isPreview: true,
          content:
            '# Routing & middleware\n\nExpress middleware are functions that run in order for a request: `(req, res, next) => {}`. Calling `next()` passes control to the next one.\n\n```js\napp.use(express.json());\napp.get("/api/courses", getCourses);\n```\n\n## Key takeaways\n- Middleware order matters — `express.json()` must run before routes that read `req.body`.\n- A route handler is just middleware that doesn\'t call `next()`.',
        }),
        lesson('Request/response lifecycle', { duration: '12 min', isPreview: true }),
        lesson('Environment config & project structure', { duration: '10 min' }),
        lesson('Error handling middleware', { duration: '14 min' }),
      ]),
      mod('Module 2: Data & Auth', [
        lesson('Connecting to MongoDB with Mongoose', { duration: '16 min', type: 'video' }),
        lesson('Schema design & validation', { duration: '16 min' }),
        lesson('JWT authentication', { duration: '18 min' }),
        lesson('Role-based access control', { duration: '14 min' }),
      ]),
      mod('Module 3: Production Practices', [
        lesson('Testing Express APIs', { duration: '14 min' }),
        lesson('Rate limiting & security headers', { duration: '12 min' }),
        lesson('Logging & monitoring', { duration: '10 min' }),
        lesson('Capstone: a full REST API', { duration: '60 min', type: 'assignment' }),
      ]),
    ],
  },

  // 12 -----------------------------------------------------------
  {
    title: 'Django and FastAPI Masterclass',
    slug: 'django-and-fastapi-masterclass',
    category: CATEGORY.BACKEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'Two of Python\'s best backend frameworks, side by side — batteries-included vs async-first.',
    fullDescription:
      'Learn Django\'s batteries-included approach (ORM, admin, auth) alongside FastAPI\'s async-first, type-hinted style — and know when to reach for each.',
    instructor: 'TechForge Faculty',
    duration: '16 hours',
    tags: ['Python', 'Django', 'FastAPI'],
    modules: [
      mod('Module 1: Django Foundations', [
        lesson('Django project structure & the ORM', {
          duration: '14 min',
          isPreview: true,
          content:
            '# Django project structure & the ORM\n\nDjango models map directly to database tables:\n\n```python\nclass Course(models.Model):\n    title = models.CharField(max_length=200)\n    price = models.DecimalField(max_digits=5, decimal_places=2, default=1.00)\n```\n\nRunning `python manage.py makemigrations` and `migrate` turns that class into real SQL schema changes.\n\n## Key takeaways\n- The ORM means you rarely write raw SQL.\n- Django\'s admin panel is generated from your models for free.',
        }),
        lesson('Views, templates & URL routing', { duration: '14 min', isPreview: true }),
        lesson('Django admin & forms', { duration: '12 min' }),
        lesson('Authentication with Django', { duration: '14 min' }),
      ]),
      mod('Module 2: FastAPI Foundations', [
        lesson('Path operations & type-hinted request bodies', { duration: '16 min', type: 'video' }),
        lesson('Pydantic models & validation', { duration: '14 min' }),
        lesson('Dependency injection in FastAPI', { duration: '14 min' }),
        lesson('Async endpoints & background tasks', { duration: '14 min' }),
      ]),
      mod('Module 3: Choosing & Shipping', [
        lesson('Django REST Framework basics', { duration: '16 min' }),
        lesson('Auto-generated docs with FastAPI (OpenAPI)', { duration: '10 min' }),
        lesson('Django vs FastAPI: when to use which', { duration: '10 min' }),
        lesson('Capstone: an API in both frameworks', { duration: '60 min', type: 'assignment' }),
      ]),
    ],
  },

  // 13 -----------------------------------------------------------
  {
    title: 'Go for Backend Systems',
    slug: 'go-for-backend-systems',
    category: CATEGORY.BACKEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'Goroutines, channels, and building fast, concurrent backend services in Go.',
    fullDescription:
      'Learn Go from a backend engineer\'s perspective: the type system, goroutines and channels for concurrency, and building HTTP services that scale.',
    instructor: 'TechForge Faculty',
    duration: '13 hours',
    tags: ['Go', 'Golang', 'Concurrency'],
    modules: [
      mod('Module 1: Go Fundamentals', [
        lesson('Types, structs & interfaces', {
          duration: '14 min',
          isPreview: true,
          content:
            '# Types, structs & interfaces\n\nGo interfaces are satisfied implicitly — no `implements` keyword required.\n\n```go\ntype Course struct {\n    Title string\n    Price float64\n}\n\ntype Priced interface {\n    GetPrice() float64\n}\n\nfunc (c Course) GetPrice() float64 { return c.Price }\n```\n\n`Course` now satisfies `Priced` automatically, just by having a matching method.\n\n## Key takeaways\n- Structs + methods are Go\'s answer to classes.\n- Implicit interfaces keep packages decoupled.',
        }),
        lesson('Error handling the Go way', { duration: '12 min', isPreview: true }),
        lesson('Packages & modules', { duration: '10 min' }),
        lesson('Slices, maps & pointers', { duration: '14 min' }),
      ]),
      mod('Module 2: Concurrency', [
        lesson('Goroutines from scratch', { duration: '16 min', type: 'video' }),
        lesson('Channels & select', { duration: '16 min' }),
        lesson('sync.WaitGroup & sync.Mutex', { duration: '14 min' }),
        lesson('Common concurrency pitfalls', { duration: '12 min' }),
      ]),
      mod('Module 3: Building Services', [
        lesson('HTTP servers with net/http', { duration: '14 min' }),
        lesson('Connecting to a database', { duration: '14 min' }),
        lesson('Testing Go code', { duration: '12 min' }),
        lesson('Capstone: a concurrent job queue API', { duration: '55 min', type: 'assignment' }),
      ]),
    ],
  },

  // 14 -----------------------------------------------------------
  {
    title: 'Java Spring Boot Architecture',
    slug: 'java-spring-boot-architecture',
    category: CATEGORY.BACKEND,
    level: 'Advanced',
    price: 1,
    shortDescription: 'Enterprise-grade Java backends: dependency injection, JPA, and layered architecture.',
    fullDescription:
      'A deep dive into Spring Boot\'s conventions: dependency injection, Spring Data JPA, REST controllers, and the layered architecture patterns used at scale.',
    instructor: 'TechForge Faculty',
    duration: '17 hours',
    tags: ['Java', 'Spring Boot', 'JPA'],
    modules: [
      mod('Module 1: Spring Boot Foundations', [
        lesson('Dependency injection & the IoC container', {
          duration: '16 min',
          isPreview: true,
          content:
            '# Dependency injection & the IoC container\n\nSpring manages object creation for you. Annotate a class `@Service` and inject it anywhere with `@Autowired`:\n\n```java\n@Service\npublic class CourseService {\n    public List<Course> findAll() { ... }\n}\n\n@RestController\npublic class CourseController {\n    private final CourseService courseService;\n    public CourseController(CourseService courseService) {\n        this.courseService = courseService;\n    }\n}\n```\n\n## Key takeaways\n- Spring wires dependencies for you based on type.\n- Constructor injection (as above) is preferred over field injection.',
        }),
        lesson('Project structure & annotations', { duration: '14 min', isPreview: true }),
        lesson('REST controllers & request mapping', { duration: '14 min' }),
        lesson('Configuration & profiles', { duration: '12 min' }),
      ]),
      mod('Module 2: Data Layer', [
        lesson('Spring Data JPA & repositories', { duration: '18 min', type: 'video' }),
        lesson('Entity relationships', { duration: '16 min' }),
        lesson('Transactions', { duration: '12 min' }),
        lesson('Validation & DTOs', { duration: '14 min' }),
      ]),
      mod('Module 3: Production Spring', [
        lesson('Spring Security basics', { duration: '18 min' }),
        lesson('Exception handling patterns', { duration: '12 min' }),
        lesson('Testing with Spring Boot Test', { duration: '14 min' }),
        lesson('Capstone: a layered REST service', { duration: '60 min', type: 'assignment' }),
      ]),
    ],
  },

  // 15 -----------------------------------------------------------
  {
    title: 'MongoDB Schema Design and Aggregations',
    slug: 'mongodb-schema-design-and-aggregations',
    category: CATEGORY.BACKEND,
    level: 'Intermediate',
    price: 1,
    shortDescription: 'Document modeling, indexing strategy, and the aggregation pipeline in depth.',
    fullDescription:
      'Move past basic CRUD: learn how to model documents for real access patterns, when to embed vs reference, indexing strategy, and the aggregation pipeline.',
    instructor: 'TechForge Faculty',
    duration: '10 hours',
    tags: ['MongoDB', 'Mongoose', 'Database Design'],
    modules: [
      mod('Module 1: Document Modeling', [
        lesson('Embedding vs referencing', {
          duration: '14 min',
          isPreview: true,
          content:
            '# Embedding vs referencing\n\nMongoDB lets you nest related data directly in a document (embedding) or store an ID and look it up separately (referencing) — this course\'s own `Course` schema embeds `modules` and `lessons` because they\'re always read together.\n\n```js\n// Embedded — one query gets everything\n{ title: "React", modules: [{ title: "...", lessons: [...] }] }\n\n// Referenced — separate collections, joined with $lookup\n{ title: "React", authorId: ObjectId("...") }\n```\n\n## Key takeaways\n- Embed data that\'s always read together and doesn\'t grow unbounded.\n- Reference data that\'s shared across many documents or grows large.',
        }),
        lesson('Schema design for real access patterns', { duration: '14 min', isPreview: true }),
        lesson('Mongoose schemas & validation', { duration: '12 min' }),
        lesson('Working with subdocuments & arrays', { duration: '14 min' }),
      ]),
      mod('Module 2: Indexing & Performance', [
        lesson('How indexes actually work', { duration: '16 min', type: 'video' }),
        lesson('Compound & text indexes', { duration: '14 min' }),
        lesson('Explain plans & query optimization', { duration: '14 min' }),
        lesson('Common anti-patterns', { duration: '10 min' }),
      ]),
      mod('Module 3: The Aggregation Pipeline', [
        lesson('$match, $group & $project', { duration: '16 min' }),
        lesson('$lookup for joins across collections', { duration: '14 min' }),
        lesson('Building analytics queries', { duration: '14 min' }),
        lesson('Capstone: an analytics dashboard query set', { duration: '45 min', type: 'assignment' }),
      ]),
    ],
  },
];

module.exports = { detailedCourses, CATEGORY, buildStubModules };
