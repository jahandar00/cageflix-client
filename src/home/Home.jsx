import "./home.scss"
import Navbar from "../components/navbar/Navbar"
import Section from "../components/section/Section"
import Features from "../components/features/Features"
import { useEffect, useState } from "react"
import MovieList from "../components/movieList/MovieList"
import Footer from "../components/footer/Footer"
import TvEpisodeList from "../components/tvEpisodeList/TvEpisodeList"

export default function Home() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        console.log(data)
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
      });
  }, []);
    return (
        <div className='home'>
            <Navbar/>
            <Section/>
            <Features/>
            <MovieList movies = {movies} />
            <TvEpisodeList movies={movies}/>
            <Footer/>

        </div>
    )
}
