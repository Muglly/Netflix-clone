import React, { useState, useEffect } from 'react';
import './Banner.css';

import { getMovies } from '../../Api/TmdbApi';

export default function Banner() {
  const [movie, setMovie] = useState();

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === 'netflixOriginals'
      );

      const data = await getMovies(netflixOriginalsCategory.path);

      const movies = data?.results;

      const randomIndex = Math.floor(Math.random() * movies.length);

      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log('fetchRandomMovie: ', error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: 'center-center',
      }}
    ></header>
  );
}
