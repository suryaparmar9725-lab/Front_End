import axios from 'axios';
import React, { useState } from 'react'

const AddComments = () => {

     const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          username: username,
          comment: comment,
        }
      );

      setResponseData(response.data);

      // Clear form
      setUsername("");
      setComment("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      
      <div style={{ width: "400px", margin: "30px auto" }}>
      <h2>Add New Comment</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username</label>
          <br />
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Comment</label>
          <br />
          <textarea
            placeholder="Write your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button className='btn btn-primary' type="submit">Submit Comment</button>
      </form>

      {responseData && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h3>Response</h3>
          <p><strong>ID:</strong> {responseData.id}</p>
          <p><strong>Username:</strong> {responseData.username}</p>
          <p><strong>Comment:</strong> {responseData.comment}</p>
        </div>
      )}
    </div>
    </div>
  )
}

export default AddComments
