import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api, { loginRequest, registerRequest } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadMe = useCallback(async () => {
    const token = localStorage.getItem('techforge_token');
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const { data } = await api.get('/auth/me');
      setUser(data);
    } catch {
      localStorage.removeItem('techforge_token');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMe();
  }, [loadMe]);

  const login = async (email, password) => {
    const res = await loginRequest({ email, password });
    localStorage.setItem('techforge_token', res.token);
    setUser(res.data);
    return res.data;
  };

  const register = async (name, email, password) => {
    const res = await registerRequest({ name, email, password });
    localStorage.setItem('techforge_token', res.token);
    setUser(res.data);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('techforge_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, isAuthenticated: !!user, login, register, logout, refresh: loadMe }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
