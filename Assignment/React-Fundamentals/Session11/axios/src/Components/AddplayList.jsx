import axios from 'axios';
import React, { useState } from 'react'

const AddplayList = () => {

      const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: playlistName,
          body: description,
        }
      );

      console.log(response.data);

      setMessage("✅ Playlist added successfully!");

      // Clear the form
      setPlaylistName("");
      setDescription("");
    } catch (error) {
      console.error("Error adding playlist:", error);
      setMessage("❌ Failed to add playlist.");
    }
  };


  return (
    <div>
<div style={{ width: "400px", margin: "30px auto" }}>
      <h2>Add Playlist</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Playlist Name:</label>
          <br />
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="Enter playlist name"
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Description:</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
            rows="4"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button className='btn btn-success' type="submit">Add Playlist</button>
      </form>

      {message && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
      
    </div>
  )
}

export default AddplayList
