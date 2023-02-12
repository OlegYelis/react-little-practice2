import { Movies } from 'components/Movies/Movies';
import { Preloader } from 'components/Preloader';
import { Search } from 'components/Search/Search';
import { Component } from 'react';

export class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=4c9339f6&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }));
  }

  searchHandler = str => {
    fetch(`http://www.omdbapi.com/?apikey=4c9339f6&s=${str}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        <Search searchHandler={this.searchHandler} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}
