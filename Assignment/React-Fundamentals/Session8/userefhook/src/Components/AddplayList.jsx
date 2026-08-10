import React, { useRef, useState } from 'react'

const AddplayList = () => {

     const [song, setSong] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const inputRef = useRef(null);

  const handleAddSong = () => {
    if (song.trim() === "") return;

    // Add the new song to the playlist
    setPlaylist([...playlist, song]);

    // Clear the input field
    setSong("");

    // Focus the input field again
    inputRef.current.focus();
  };

  return (
    <div>
        <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Add to Playlist</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter song name"
        value={song}
        className='mb-3'
        onChange={(e) => setSong(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginRight: "10px",
        }}
      />

      <button className='btn btn-secondary' onClick={handleAddSong}>Add</button>

      <h3>Playlist</h3>
      {playlist.length === 0 ? (
        <p>No songs added yet.</p>
      ) : (
        <ul>
          {playlist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
      
    </div>
  )
}

export default AddplayList
