import React, { useRef, useState } from 'react'

const Loginform = () => {

 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 const usernameRef = useRef(null);

 
const handleLogin = () => {
    // Display entered values (for demo)
    console.log("Username:", username);
    console.log("Password:", password);

    // Clear the input fields
    setUsername("");
    setPassword("");

    // Focus the username input after clearing
    usernameRef.current.focus();
  };

  return (
    <div>
        <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h2>Login Form</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          ref={usernameRef}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <button className='btn btn-success' onClick={handleLogin}>Login</button>
    </div>
    </div>
  )
}

export default Loginform
