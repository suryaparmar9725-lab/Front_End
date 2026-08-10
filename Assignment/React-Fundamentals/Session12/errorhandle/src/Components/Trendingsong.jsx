import React, { useEffect, useState } from 'react'

const Trendingsong = () => {

    const [songs, setSongs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setSongs(data.slice(0, 3)); // Get first 3 posts
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, []);

  if (error) {
    return <h2>Error loading data</h2>;
  }

  return (
    <div>
      
       <div>
      <h2>Trending Songs</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Trendingsong
