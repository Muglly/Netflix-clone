import React, { useState, useEffect } from 'react';
import { getMovies } from '../Api/TmdbApi';

export default function Row({ title, path }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      setMovies(data?.results);
    } catch (error) {
      console.log('error fetchMovies ', error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => {
          return <img key={movie.id} src={movie.poster_path} alt={movie.name}></img>;
        })}
      </div>
    </div>
  );
}
