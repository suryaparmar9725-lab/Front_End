import React, { useState } from 'react'

const SongVote = () => {
     const [votes, setVotes] = useState(0);

  const upVote = () => {
    setVotes(votes + 1);
  };

  const downVote = () => {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  };

  return (
    <div>
      <h1>Song Vote</h1>
        <div
      style={{
        width: "350px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <h2>🎵 Calm Down</h2>
      <p>Artist: Rema & Selena Gomez</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "15px",
        }}
      >
        <button
          onClick={upVote}
          style={{
            padding: "10px 15px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ⬆️
        </button>

        <h3>{votes}</h3>

        <button
          onClick={downVote}
          style={{
            padding: "10px 15px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ⬇️
        </button>
      </div>
    </div>

    </div>
  )
}

export default SongVote
