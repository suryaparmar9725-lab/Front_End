import React from 'react'

const Miniprofile = () => {
  return (
    <div>
        <div
      style={{
        width: "300px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        fontFamily:'cursive',
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        alt="Profile"
        style={{
          width: "120px",
          height: "120px",
          objectFit:'cover',
          objectPosition:'top',
          borderRadius: "50%",
        }}
      />

      <h2>Surendra Parmar</h2>

      <p>
        🚀 Learning React | 💻 Frontend Developer | 📸 Welcome to my mini
        Instagram profile!
      </p>
    </div>
    </div>
  )
}

export default Miniprofile
