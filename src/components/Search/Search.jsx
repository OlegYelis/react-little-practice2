import { Component } from 'react';

export class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  keyDownHandler = evt => {
    if (evt.key === 'Enter') {
      this.props.searchHandler(this.state.search, this.state.type);
    }
  };

  filterHandler = evt => {
    this.setState(
      () => ({ type: evt.target.value }),
      () => {
        this.props.searchHandler(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            type="search"
            placeholder="search"
            className="validate"
            value={this.state.search}
            onChange={evt => this.setState({ search: evt.target.value })}
            onKeyDown={this.keyDownHandler}
          />
          <button
            onClick={() =>
              this.props.searchHandler(this.state.search, this.state.type)
            }
            className="btn search-btn"
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="all"
              onChange={this.filterHandler}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="movie"
              onChange={this.filterHandler}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              onChange={this.filterHandler}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
