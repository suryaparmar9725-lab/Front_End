import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MovieHandle = () => {

    const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY"
        );

        setMovies(response.data.results.slice(0, 5));
      } catch (err) {
        setError("Failed to fetch movies. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Loading State
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error State
  if (error) {
    return <h2>{error}</h2>;
  }

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

export default MovieHandle
