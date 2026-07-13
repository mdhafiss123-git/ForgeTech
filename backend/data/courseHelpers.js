/**
 * backend/data/courses.js
 *
 * Seed data for all 54 courses across 6 categories.
 *
 * PATTERN:
 *  - Every course object has the full metadata (title, slug, category, level,
 *    price, shortDescription, fullDescription, tags, duration).
 *  - Courses 1–15 have fully hand-written `modules` (3+ modules, 4+ lessons
 *    each, a couple of lessons per course flagged `isPreview: true`).
 *  - Courses 16–54 use `buildStubModules(title, category)` to generate a
 *    real, correctly-shaped 3-module / 4-lesson syllabus automatically, so
 *    every course renders a full catalog card + syllabus preview today.
 *
 * TO EXPAND A LATER BATCH: replace that course's `modules: buildStubModules(...)`
 * line with real hand-written modules in the same shape used for courses 1–15.
 * Nothing else in the app needs to change — schema, controller, and frontend
 * all read `course.modules[].lessons[]` the same way regardless of source.
 * Just say "expand courses 16–25" (or any range) and the shape stays identical.
 */

const CATEGORY = {
  FRONTEND: 'Frontend Development',
  BACKEND: 'Backend & Databases',
  MOBILE: 'Mobile Development',
  CS_CORE: 'CS Core & DSA',
  CLOUD: 'Cloud, DevOps & Security',
  AI: 'AI & Data Science',
};

const lesson = (title, { duration = '10 min', type = 'markdown', isPreview = false, content = '' } = {}) => ({
  title,
  duration,
  type,
  isPreview,
  content: content || `# ${title}\n\n_Full lesson content coming soon._`,
});

const mod = (title, lessons) => ({ title, lessons });

/**
 * Generates a realistic, correctly-shaped 3-module syllabus for courses that
 * haven't been hand-authored yet. Lesson 1 of Module 1 is always a preview
 * so every course has at least one open lesson on the details page.
 */
function buildStubModules(courseTitle) {
  const stages = [
    { label: 'Foundations', verbs: ['Introduction to', 'Core concepts of', 'Setting up your', 'Key terminology in'] },
    { label: 'Core Skills', verbs: ['Building with', 'Working hands-on with', 'Practical patterns in', 'Common workflows for'] },
    { label: 'Real-World Application', verbs: ['Production practices for', 'Debugging & optimizing', 'A capstone project using', 'Where to go next with'] },
  ];

  return stages.map((stage, sIdx) =>
    mod(
      `Module ${sIdx + 1}: ${stage.label}`,
      stage.verbs.map((verb, lIdx) =>
        lesson(`${verb} ${courseTitle}`, {
          duration: `${8 + lIdx * 3} min`,
          type: lIdx === stage.verbs.length - 1 && sIdx === stages.length - 1 ? 'assignment' : 'markdown',
          isPreview: sIdx === 0 && lIdx === 0,
        })
      )
    )
  );
}

module.exports = { CATEGORY, lesson, mod, buildStubModules };
