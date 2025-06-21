import { useState, useEffect } from "react";
import "./navbar.scss";
import { Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/")
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="./logo.png" alt="Logo" onClick={handleNavigate} />  
        </div>
        <div className="right">
          <div className="searchBar">
           
            <input
              type="text"
              placeholder="Search Cage movies..."
              // value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link to="/search" state={{ query: searchQuery }} className="link">
              <Search className="icon" />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
