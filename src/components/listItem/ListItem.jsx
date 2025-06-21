import "./listItem.scss";
import { Link } from "react-router-dom";

export default function ListItem({ movie }) {
  const isValid = (value) => value && value !== "N/A" && value !== "\\N";

  return (
    <div className="listItem">
      <Link to={`/movie/${movie._id}`} state={{ movie }}>
        <img
          src={isValid(movie.poster) ? movie.poster : "/alternative.png"}
          alt={movie.title}
        />
        <div className="overlay">
          <div className="info">
            {isValid(movie.title) && <h4>{movie.title}</h4>}
            {isValid(movie.runtime) && <span>{movie.runtime}</span>}
            {isValid(movie.year) && <p>{movie.year}</p>}
            {isValid(movie.genre) && <div className="genre">{movie.genre}</div>}
          </div>
        </div>
      </Link>
    </div>
  );
}
