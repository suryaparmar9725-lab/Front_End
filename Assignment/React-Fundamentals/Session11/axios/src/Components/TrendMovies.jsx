import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TrendMovies = () => {

    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY"
        );

        setMovies(response.data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div>
     
       <div>
      <h2>Trending Movies</h2>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default TrendMovies
