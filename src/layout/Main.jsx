import { Movies } from 'components/Movies/Movies';
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

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        {movies.length ? <Movies movies={movies} /> : <h3>Loading...</h3>}
      </main>
    );
  }
}
