import React from 'react'

const DeafultProps = ({ username, followers, profilePic }) => {
  return (
    <div>
<div
      style={{
        width: "280px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      <img
        src={profilePic}
        alt={username}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <h2>{username}</h2>
      <p>
        <strong>{followers}</strong> Followers
      </p>
    </div>
    
      
    </div>
  )
  // Default props
DeafultProps.defaultProps = {
  followers: 0,
  profilePic: "",
};
}

export default DeafultProps
