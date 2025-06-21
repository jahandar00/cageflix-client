import { useEffect, useState } from "react";
import "./tvEpisodeList.scss";
import ListItem from "../listItem/ListItem";

export default function TvEpisodeList({ movies }) {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

  const filteredMovies = movies.filter((movie) => movie.type === "tvEpisode");

  return (
    <div className="list">
      <span className="listTitle">Nicolas Cage TV Episodes</span>
      <div className="movieGrid">
        {filteredMovies.map((movie, index) => (
          <ListItem key={movie._id} movie={movie} index={index} />
        ))}
      </div>

    </div>
  );
}
