import React, { useState, useEffect } from 'react';
import './Banner.css';

import { categories, getMovies } from '../../Api/TmdbApi';

export default function Banner() {
  const [movie, setMovie] = useState({});

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

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: 'center-center',
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner-buttons-container">
          <button className="banner-button">Assistir</button>
          <button className="banner-button">Minha Lista</button>
        </div>
        <div className="banner-description">
          <span>{truncate(movie?.overview, 150)}</span>
        </div>
      </div>
    </header>
  );
}
