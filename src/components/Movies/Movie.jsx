export const Movie = ({ Title, Year, Type, Poster, imdbID }) => {
  return (
    <div id={imdbID} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {Poster === 'N/A' ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x420?text=${Title}`}
          />
        ) : (
          <img className="activator" src={Poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year} <span className="right">{Type}</span>
        </p>
      </div>
    </div>
  );
};
