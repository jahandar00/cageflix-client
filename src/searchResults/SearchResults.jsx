import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import ListItem from "../components/listItem/ListItem";
import "./searchResults.scss"

function SearchResults() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = location.state?.query || "";

  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);

  // Fetch movies from backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/movies.json");
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchMovies();
  }, []);

  // Fuzzy search when query or movies change
  useEffect(() => {
    if (!movies.length || !query) return;

    const options = {
      keys: ["title", "desc", "genre", "actors"],
      threshold: 0.4,
      ignoreLocation: true,
      minMatchCharLength: 2,
    };

    const fuse = new Fuse(movies, options);
    const result = fuse.search(query);
    const matched = result.map((r) => r.item);
    setResults(matched);

    // Navigate to noresult if nothing matched
    if (matched.length === 0) {
      navigate("/noresult");
    }
  }, [query, movies, navigate]);

  return (
    <div className="list">
      <span className="listTitle">Search results for: "{query}"</span>

      <div className="movieGrid">
        {results.map((movie, index) => (
          <ListItem key={movie._id} movie={movie} index={index} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
