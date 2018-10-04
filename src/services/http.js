import axios from 'axios';
import EventBus from '@/core/event-bus';
import LoginService from './LoginService';

const axiosInstance = axios.create({
  baseURL: '/api',
});

axiosInstance.interceptors.request.use((config) => {
  if (config && config.url === '/api/login') {
    return config;
  }

  const token = LoginService.obterToken();
  config.headers.Authorization = `Bearer ${token}`;

  return config;
}, err => Promise.reject(err));

axiosInstance.interceptors.response.use(undefined, (err) => {
  if (err.response.status === 401) {
    EventBus.$emit('logout');
  }

  return Promise.reject(err);
});

export default axiosInstance;
