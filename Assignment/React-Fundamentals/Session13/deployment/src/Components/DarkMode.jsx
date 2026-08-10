import React, { useState } from 'react'

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
        <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
        transition: "0.3s",
      }}
    >
      <h1>My React App</h1>
      <p>Welcome to my Netlify deployed app!</p>

      <button style={{padding:'5px 10px',border:'0',background:'green',color:'white'}} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
    </div>
  )
}

export default DarkMode
