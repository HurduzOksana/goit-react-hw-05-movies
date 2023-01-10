import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b6da31fc92a69bac7a66403e27502d5d',
  },
});

// Cписок найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці

export const getTrending = async () => {
  const { data } = await instance.get(`/trending/movie/day`);

  return data;
};

// Пошук фільму за ключовим словом на сторінці фільмів.

export const getMovie = async query => {
  const { data } = await instance.get('/search/movie', {
    params: { query },
  });

  return data;
};

// Запит повної інформації про фільм для сторінки кінофільму.

export const getFullInfo = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);

  return { data };
};

// Запит інформації про акторський склад для сторінки кінофільму.

export const getMovieCast = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);

  return data;
};

// Запит оглядів для сторінки кінофільму.

export const getReview = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);

  return data;
};
