import { Movies } from 'components/Movies/Movies';
import { Preloader } from 'components/Preloader';
import { Search } from 'components/Search/Search';
import { useEffect, useState } from 'react';

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=4c9339f6&s=matrix')
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const searchHandler = (str, type) => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=4c9339f6&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <main className="container content">
      <Search searchHandler={searchHandler} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};
