import { Component } from 'react';

export class Search extends Component {
  state = {
    search: '',
  };

  keyDownHandler = evt => {
    if (evt.key === 'Enter') {
      this.props.searchHandler(this.state.search);
    }
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
            onClick={() => this.props.searchHandler(this.state.search)}
            className="btn search-btn"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
