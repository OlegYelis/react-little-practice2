import { useState } from 'react';

export const Search = ({ searchHandler }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const keyDownHandler = evt => {
    if (evt.key === 'Enter') {
      searchHandler(search, type);
    }
  };

  const filterHandler = evt => {
    setType(evt.target.value);
    searchHandler(search, evt.target.value);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          type="search"
          placeholder="search"
          className="validate"
          value={search}
          onChange={evt => setSearch(evt.target.value)}
          onKeyDown={keyDownHandler}
        />
        <button
          onClick={() => searchHandler(search, type)}
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
            onChange={filterHandler}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="movie"
            onChange={filterHandler}
            checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="series"
            onChange={filterHandler}
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};
