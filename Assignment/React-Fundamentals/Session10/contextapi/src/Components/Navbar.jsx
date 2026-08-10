import React, { useContext } from "react";
import UserContext from "./UserContetex";


function Navbar() {
  const { username } = useContext(UserContext);

  return (
    <nav
      style={{
        backgroundColor: "#2874F0",
        color: "white",
        borderRadius:'10px',
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Flipkart</h2>
      <h3>Welcome, {username}</h3>
    </nav>
  );
}

export default Navbar;