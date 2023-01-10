import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { MoviesDetails } from './pages/MovieDetails/MovieDetails';
// import { Cast } from './pages/Cast/Cast';
// import { Reviews } from './pages/Reviews/Reviews';
// import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';

export const UserRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          {/* <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route> */}
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Header />}>
          <Route path="*" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes> */}
    </>
  );
};

export default UserRoutes;
