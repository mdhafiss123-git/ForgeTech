# TechForge — Self-Paced Tech Learning Platform

MERN-stack learning platform: React + Tailwind (light, eye-comfort theme) +
Framer Motion frontend, Node/Express API, MongoDB/Mongoose data layer.
Every course is a flat **$1 USD**. Browsing, search, filtering, and full
syllabus previews are public; login is only requested when a visitor clicks
**Enroll Now / Buy for $1 / Start Learning**.

## Stack

- **Frontend:** React 18 (Vite), Tailwind CSS (light theme), Framer Motion, React Router, react-markdown, lucide-react
- **Backend:** Node.js, Express, JWT auth, Mongoose
- **Database:** MongoDB

## Getting started

### 1. Backend

```bash
cd backend
cp .env.example .env        # fill in MONGO_URI and JWT_SECRET
npm install
npm run dev                  # starts on http://localhost:5000
node scripts/seedCourses.js  # seeds all 54 courses + a demo user
```

### 2. Frontend

```bash
cd frontend
npm install                  # installs framer-motion, react-markdown, etc.
npm run dev                  # starts on http://localhost:5173
```

Demo login (after seeding): `demo@techforge.dev` / `password123`

## Public vs. private routes

| Route | Auth | Purpose |
|---|---|---|
| `/` | Public | Landing page — hero, categories, featured courses, pricing, testimonials |
| `/courses` | Public | Full catalog: category sidebar, level filter, live search |
| `/course/:courseId` | Public | Course details + full open syllabus preview (locked lesson content) |
| `/login` | Public | Personalized greeting; remembers `redirectTo` via `location.state` |
| `/checkout/:slug` | Private | $1 enrollment confirmation |
| `/dashboard` | Private | Stats, "Continue Learning", private course grid |
| `/courses/:slug` | Private | Unlocked split-screen course viewer (full lesson content + progress tracking) |

Clicking **Enroll Now / Buy for $1 / Start Learning** anywhere checks
`isAuthenticated`; if false, it navigates to `/login` with
`state: { redirectTo: '/checkout/:slug' }`, and `LoginPage` sends the user
straight there after auth.

## Course data (54 courses, 6 categories)

All 54 courses in `backend/data/courses.js` have real authored lesson
content (not placeholders) — 3+ modules each, 4+ lessons per module, and a
mix of `isPreview: true` lessons visible to anyone on the details page.

| Category | Count |
|---|---|
| Frontend Development | 10 |
| Backend & Databases | 10 |
| Mobile Development | 5 |
| CS Core & DSA | 10 |
| Cloud, DevOps & Security | 8 |
| AI & Data Science | 11 |

Re-run `node backend/scripts/seedCourses.js` any time to wipe and reseed
the `courses` collection from that file.

## Course schema

```js
{
  title, slug, shortDescription, fullDescription,
  category, level,             // 'Beginner' | 'Intermediate' | 'Advanced'
  price,                        // defaults to 1
  thumbnail, instructor, duration, lessonsCount,
  modules: [{
    title,
    lessons: [{ title, duration, type, isPreview, content }]
  }]
}
```

## API summary

| Method | Route | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/register` | – | Create account |
| POST | `/api/auth/login` | – | Log in, returns JWT |
| GET | `/api/auth/me` | ✅ | Current user profile |
| GET | `/api/courses?category=&level=&search=` | – | Filtered catalog list |
| GET | `/api/courses/meta/categories` | – | Live per-category course counts |
| GET | `/api/courses/:slug` | optional | Full course + modules/lessons (+ progress if logged in) |
| GET | `/api/courses/:slug/lessons/:lessonId` | – | Single lesson content |
| GET | `/api/progress` | ✅ | All progress docs for dashboard |
| GET | `/api/progress/continue` | ✅ | Most recent in-progress course |
| POST | `/api/progress/:courseId/lessons/:lessonId/complete` | ✅ | Mark lesson complete |

## Design system

Light, eye-comfort theme defined in `frontend/tailwind.config.js`:

- `surface` (`#F8FAFC` base / white cards / `#F1F5F9` alt sections)
- `ink` (`#0F172A` primary text, never pure black)
- `accent.indigo` (#4F46E5, primary CTA) / `accent.emerald` (#059669, pricing)
- Soft shadows (`shadow-soft`, `shadow-card`, `shadow-lift`, `shadow-glow`) instead of hard borders

## Animation

All Framer Motion variants live in `frontend/src/animations/motionVariants.js`
(fade/slide/stagger/card-hover/accordion/page-transition) — imported by
`LandingPage`, `CoursesPage`, `CourseDetails`, `LoginPage`, and the course
viewer rather than redefined per component. `useReducedMotion()` is
respected in `LandingPage`.

## Next steps

1. Wire `CheckoutPage`'s `handlePay` to a real payment provider (Stripe Checkout fits a $1 one-time charge well).
2. Quiz/assignment lesson auto-grading.
3. Certificates on course completion.
4. Admin/instructor course-authoring UI.
