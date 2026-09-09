import axios from 'axios';

export default (context = {}) => {
  const { req } = context;

  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://localhost:3000',
      headers: req ? req.headers : {},
    });
  }

  return axios.create({
    baseURL: '/',
  });
};