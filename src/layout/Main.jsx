import { Movies } from 'components/Movies/Movies';
import { Preloader } from 'components/Preloader';
import { Search } from 'components/Search/Search';
import { Component } from 'react';

export class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=4c9339f6&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }));
  }

  searchHandler = (str, type) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=4c9339f6&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search searchHandler={this.searchHandler} />
        {!loading ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}
