const API_KEY = '07c62ca6a5ca37b367f23057a0566606';

const categories = [
  {
    name: 'trending',
    title: 'Em alta',
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: 'netflixOriginals',
    title: 'Originais Netflix',
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    name: 'topRated',
    title: 'Populares',
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: 'comedy',
    title: 'Comédias',
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  {
    name: 'romances',
    title: 'Romances',
    path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`,
  },
  {
    name: 'documentaries',
    title: 'Documentários',
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
  {
    name: 'documentaries',
    title: 'Documentários',
    path: `/movie/latest?api_key=${API_KEY}&language=pt-BR`,
  },
];

export const getMovies = async (path) => {
  try {
    const url = `https://api.themoviedb.org/3/${path}`;

    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.log('error getMovies ', error);
  }
};
