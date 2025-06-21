import "./noResult.scss";
import { SentimentDissatisfied } from "@mui/icons-material";

export default function NoResults({ query }) {
  return (
    <div className="noResults">
      <SentimentDissatisfied className="icon" />
      <h2>No results found</h2>
      <p>
        We couldn't find any result.
      </p>
      <p>Please check your spelling or try a different search term.</p>
    </div>
  );
}
