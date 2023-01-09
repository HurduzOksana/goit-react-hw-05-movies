import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/movie/550';
// const API_KEY = 'b6da31fc92a69bac7a66403e27502d5d';

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

export const getMovie = async () => {
  const { data } = await instance.get(`/trending/get-trending`);

  return data;
};

// Запит повної інформації про фільм для сторінки кінофільму.

// Запит інформації про акторський склад для сторінки кінофільму.

// Запит оглядів для сторінки кінофільму.
