import React from 'react'
import Sociallinks from './Sociallinks'

const ProfileUpdate = ({ name, profilePic, bio, socialLinks }) => {
  return (
    <div>
         <div
      style={{
        width: "300px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
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

      <Sociallinks links={socialLinks} />
    </div>
      
    </div>
  )
}

export default ProfileUpdate
