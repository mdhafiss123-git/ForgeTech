import { useState, useEffect } from 'react';
import { fetchCourses } from '../services/api';

/**
 * Thin data hook around GET /api/courses. Re-fetches whenever the
 * `domain` or `difficulty` filters change (server-side filtering),
 * while CourseCatalog also does instant client-side search on top.
 */
export function useCourses({ domain, difficulty } = {}) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetchCourses({ domain, difficulty })
      .then((res) => mounted && setCourses(res.data))
      .catch((err) => mounted && setError(err))
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, [domain, difficulty]);

  return { courses, loading, error };
}
