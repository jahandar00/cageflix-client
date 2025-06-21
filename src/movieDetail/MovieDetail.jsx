import { useLocation } from "react-router-dom";
import "./movieDetail.scss";
import { useEffect } from "react";

export default function MovieDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const movie = location.state?.movie;

  const isValid = (value) => value && value !== "N/A" && value !== "\\N";

  if (!movie) {
    return <div className="movieDetail">Movie not found.</div>;
  }

  return (
    <div className="movieDetail">

      <div className="poster">
        <img
          src={isValid(movie.poster) ? movie.poster : "/alternative.png"}
          alt={movie.title}
        />
      </div>
      <div className="info">
        {isValid(movie.title) && <h1>{movie.title}</h1>}

        <div className="metadata">
          {isValid(movie.type) && <span className="type">{movie.type}</span>}
          {isValid(movie.year) && <span className="year">{movie.year}</span>}
          {movie.isAdult === "1" && <span className="adult">18+</span>}
          {isValid(movie.runtime) && <span className="runtime">{movie.runtime}</span>}
        </div>

        {isValid(movie.imdbRating) && (
          <div className="rating">⭐ {movie.imdbRating}/10</div>
        )}

        {isValid(movie.genre) && <div className="genre">{movie.genre}</div>}

        {isValid(movie.desc) && (
          <p className="description">{movie.desc}</p>
        )}

        {isValid(movie.actors) && (
          <div className="actors">
            <strong>Actors:</strong> {movie.actors}
          </div>
        )}
      </div>
    </div>
  );
}
