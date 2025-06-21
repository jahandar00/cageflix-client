import { useEffect, useState } from "react";
import "./movieList.scss";
import ListItem from "../listItem/ListItem";

export default function MovieList({ movies }) {
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredMovies = movies.filter((movie) => movie.type === "movie");

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="list">
      <span className="listTitle">Nicolas Cage Movies</span>
      <div className="movieGrid">
        {filteredMovies.slice(0, visibleCount).map((movie, index) => (
          <ListItem key={movie._id} movie={movie} index={index} />
        ))}
      </div>

      {visibleCount < filteredMovies.length && (
        <div className="loadMoreContainer">
          <button className="loadMoreButton" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
