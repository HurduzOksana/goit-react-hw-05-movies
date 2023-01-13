import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import React from 'react';
// import { Header } from './components/Header/Header';
// import { Home } from './pages/Home/Home';
// import { Movies } from './pages/Movies/Movies';
// import { MoviesDetails } from './pages/MovieDetails/MovieDetails';
// import { Cast } from './pages/Cast/Cast';
// import { Reviews } from './pages/Reviews/Reviews';

const Header = lazy(() => import('./components/Header/Header'));
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));

export const UserRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;
