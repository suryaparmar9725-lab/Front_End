import React, { useEffect, useState } from 'react'

const ModifySongs = () => {

     const [songs, setSongs] = useState([]);
  const [error, setError] = useState(false);

  const fetchSongs = async () => {
    try {
      setError(false); // Clear previous error

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setSongs(data.slice(0, 3)); // Display first 3 titles
    } catch (err) {
      console.error(err);
      setError(true);
      setSongs([]); // Clear previous data on error
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>

        <div>
      <h2>Modify Trending  Songs</h2>

      <button className='btn btn-primary' onClick={fetchSongs}>Reload</button>

      {error ? (
        <p style={{ color: "red" }}>Error loading data</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
      )}
    </div>
      
    </div>
  )
}

export default ModifySongs
