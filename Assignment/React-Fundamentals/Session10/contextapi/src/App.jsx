import React, { useContext, useState } from "react";


import UserContext from "./Components/UserContetex";
import Navbar from "./Components/Navbar";
import ThemeContext from "./Components/ThemeContext";

function App() {
  const user = {
    username: "Surendra",
    loggedIn: true,
  };

  function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="bg-primary px-3 py-2 border-0 text-white" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}
 const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }; 


  return (
   <div>
    <div className="p-5">
      <h2>👉  User Context</h2>
       <UserContext.Provider value={user}>
      <Navbar />
    </UserContext.Provider>
    </div>
    
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#ffffff" : "#333333",
          color: theme === "light" ? "#000000" : "#ffffff",
          minHeight: "100vh",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Theme Context API Demo</h1>
        <p>Current Theme: {theme}</p>

        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
   </div>
  );
}

export default App;