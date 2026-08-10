import React from 'react'

const Profilecards = ({ name, profilePic, bio }) => {
  return (
    <div>
      
       <div
      style={{
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        margin: "20px auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={profilePic}
        alt={name}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
    </div>
  )
}

export default Profilecards
