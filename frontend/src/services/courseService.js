import api from './api';

/**
 * Dedicated course data service. api.js still exists for auth/progress
 * calls — this file is the single source of truth for anything course
 * catalog related, matching the field names on the new Course schema
 * (category, level, price, lessonsCount, isPreview, content).
 */

// GET /api/courses?category=&level=&search=
export const getCourses = (params = {}) =>
  api.get('/courses', { params }).then((r) => r.data);

// GET /api/courses/:slug — full course incl. modules/lessons
export const getCourseBySlug = (slug) =>
  api.get(`/courses/${slug}`).then((r) => r.data);

// GET /api/courses/:slug/lessons/:lessonId
export const getLesson = (slug, lessonId) =>
  api.get(`/courses/${slug}/lessons/${lessonId}`).then((r) => r.data);

// GET /api/courses/meta/categories — live per-category course counts
export const getCategoryCounts = () =>
  api.get('/courses/meta/categories').then((r) => r.data);

export default { getCourses, getCourseBySlug, getLesson, getCategoryCounts };
