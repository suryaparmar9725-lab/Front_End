import React, { useState } from 'react'

const Rating = () => {

      const [rating, setRating] = useState(0);

  return (
    <div>
        <h3> Zomato Rating</h3>

 <div
      style={{
        width: "350px",
        margin: "30px auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2>Zomato Restaurant Rating</h2>

      <div style={{ fontSize: "40px", cursor: "pointer" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              color: star <= rating ? "gold" : "#ccc",
              margin: "5px",
            }}
          >
            ★
          </span>
        ))}
      </div>

      <h3>Your Rating: {rating} / 5</h3>
    </div>
            </div>
  )
}

export default Rating
