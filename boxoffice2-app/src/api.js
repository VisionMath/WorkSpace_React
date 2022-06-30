import axios from 'axios';

const ID_KEY = 'ID_KEY';
const SECRET_KEY = 'SECRET_KEY';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-Naver-Client-Id': ID_KEY,
    'X-Naver-Client-Secret': SECRET_KEY,
    'Access-Control-Allow-Origin': '*'
  }
});

export const getMoviesFromNaver = (word, amount) => {
  const res =  api.get('/v1/search/movie.json', {
    params: {
      query: word,
      display: amount
    }
  }).then((response) => (response))
  return await res
};

export const naverMoviesApi = {
  search: word => api.get('/v1/search/movie.json', {
    params: {
      query: word,
      display: 20
    }
  })
};
