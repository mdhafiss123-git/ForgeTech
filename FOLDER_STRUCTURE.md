# TechForge — Project Folder Structure

```
techforge/
├── backend/
│   ├── config/
│   │   └── db.js                     # MongoDB connection
│   ├── models/
│   │   ├── User.js                   # User schema
│   │   ├── Course.js                 # Course + Modules + Lessons schema
│   │   └── UserProgress.js           # Per-user, per-course progress schema
│   ├── controllers/
│   │   ├── courseController.js       # getCourses, getCourseById, getLesson
│   │   ├── progressController.js     # getProgress, markLessonComplete
│   │   └── authController.js         # register, login, me
│   ├── middleware/
│   │   ├── auth.js                   # JWT verification middleware
│   │   └── errorHandler.js           # Centralized error handler
│   ├── routes/
│   │   ├── courseRoutes.js
│   │   ├── progressRoutes.js
│   │   └── authRoutes.js
│   ├── utils/
│   │   └── asyncHandler.js
│   ├── .env.example
│   ├── server.js                     # App entrypoint
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Sidebar.jsx           # Global left nav
│   │   │   │   └── Topbar.jsx            # Search + user avatar
│   │   │   ├── dashboard/
│   │   │   │   ├── CourseCard.jsx        # Single course grid card
│   │   │   │   ├── CourseCatalog.jsx     # Grid + filter/search logic
│   │   │   │   ├── ContinueLearning.jsx  # "Resume" hero banner
│   │   │   │   └── ProgressStats.jsx     # Completion % widgets
│   │   │   ├── course-viewer/
│   │   │   │   ├── SyllabusAccordion.jsx # Left: modules -> lessons tree
│   │   │   │   ├── LessonContent.jsx     # Right: markdown/video render
│   │   │   │   └── CourseViewer.jsx      # Split-screen shell (state owner)
│   │   │   └── ui/
│   │   │       ├── Badge.jsx             # Difficulty badges
│   │   │       ├── ProgressBar.jsx
│   │   │       └── Button.jsx
│   │   ├── pages/
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── CourseViewerPage.jsx
│   │   │   └── LoginPage.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   │   └── useCourses.js
│   │   ├── services/
│   │   │   └── api.js                    # Axios instance + endpoints
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css                     # Tailwind directives + theme tokens
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

**Domain enum used across the app (backend + frontend):**
`frontend-development | backend-databases | mobile-development | cs-core-dsa | cloud-devops | ai-modern-tech`
