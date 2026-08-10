import React, { useState } from 'react'

const Playlisadd = () => {
     const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (songName.trim() === "" || artist.trim() === "") {
      alert("Please enter both song name and artist.");
      return;
    }

    const newSong = {
      song: songName,
      artist: artist,
    };

    setPlaylist([...playlist, newSong]);

    // Clear input fields
    setSongName("");
    setArtist("");
  };
  return (
    <div>
         <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🎵 Spotify Playlist Adder</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Song Name:</label>
          <br />
          <input
          style={{padding:'10px'}}
            type="text"
            placeholder="Enter song name"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Artist:</label>
          <br />
          <input
          style={{padding:'10px'}}
            type="text"
            placeholder="Enter artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>

        <button type="submit">Add Song</button>
      </form>

      <hr />

      <h3>Playlist</h3>

      {playlist.length === 0 ? (
        <p>No songs added yet.</p>
      ) : (
        <ul>
          {playlist.map((item, index) => (
            <li key={index}>
              <strong>{item.song}</strong> - {item.artist}
            </li>
          ))}
        </ul>
      )}
    </div>
      
    </div>
  )
}

export default Playlisadd
