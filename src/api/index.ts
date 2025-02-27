import axios from 'axios';
import { Course, User } from '../types';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Интерцептор для автоматической подстановки токена
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Добавим после создания экземпляра axios
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

export const auth = {
  login: (data: { email: string; password: string }) => 
    api.post<{ token: string }>('/api/login', data),
  logout: () => api.post('/api/logout'),
  getUser: () => api.get<User>('/api/user'),
};

export const coursesApi = {
  getCourses: () => api.get<Course[]>('/api/courses'),
  getCourse: (id: string) => api.get<Course>(`/api/course/${id}`),
};