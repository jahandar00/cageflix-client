import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import MovieDetail from "./movieDetail/MovieDetail";
import SearchResults from "./searchResults/SearchResults";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import NoResults from "./noResult/NoResult";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/noresult" element={<NoResults/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
