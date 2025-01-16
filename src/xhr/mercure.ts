import axios from 'axios';

const baseURL = import.meta.env.VITE_MERCURE_URL;
const publishToken = import.meta.env.VITE_SUBSCRIBE_TOKEN;

export const mercureAxiosInstance = axios.create({
  baseURL,
  headers: {
    'Authorization': `Bearer ${publishToken}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});

