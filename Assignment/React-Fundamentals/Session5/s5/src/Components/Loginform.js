import React, { useState } from 'react'

const Loginform = () => {
     const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    alert(
      `Username: ${username}\nPassword: ${password}`
    );
  };
  return (
    <div>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <br />
          <input
          style={{padding:'10px'}}
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <br />
          <input
          style={{padding:'10px'}}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{padding:'.5vw 3vw',background:'blue',color:'white',border:'0'}}>Login</button>
      </form>
    </div>
    </div>
  )
}

export default Loginform
