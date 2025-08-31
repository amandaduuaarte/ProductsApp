import axios from 'axios';

export const httpClient = () => {
  const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'},
  });

  return {api};
};
