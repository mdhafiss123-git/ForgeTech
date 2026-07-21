import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('techforge_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// --- Courses ---
export const fetchCourses = (params) => api.get('/courses', { params }).then((r) => r.data);
export const fetchCourseBySlug = (slug) => api.get(`/courses/${slug}`).then((r) => r.data);
export const fetchLesson = (slug, lessonId) =>
  api.get(`/courses/${slug}/lessons/${lessonId}`).then((r) => r.data);

// --- Progress ---
export const fetchAllProgress = () => api.get('/progress').then((r) => r.data);
export const fetchContinueLearning = () => api.get('/progress/continue').then((r) => r.data);
export const markLessonComplete = (courseId, lessonId) =>
  api.post(`/progress/${courseId}/lessons/${lessonId}/complete`).then((r) => r.data);

// --- Auth ---
export const loginRequest = (payload) => api.post('/auth/login', payload).then((r) => r.data);
export const registerRequest = (payload) => api.post('/auth/register', payload).then((r) => r.data);
export const forgotPasswordRequest = (email) =>
  api.post('/auth/forgot-password', { email }).then((r) => r.data);
export const resetPasswordRequest = (token, password) =>
  api.post(`/auth/reset-password/${token}`, { password }).then((r) => r.data);

// --- Exams & Certificates ---
export const fetchExam = (slug) => api.get(`/exams/${slug}`).then((r) => r.data);
export const submitExam = (slug, answers) =>
  api.post(`/exams/${slug}/submit`, { answers }).then((r) => r.data);
export const fetchCertificate = (certificateId) =>
  api.get(`/certificates/${certificateId}`).then((r) => r.data);

export default api;
