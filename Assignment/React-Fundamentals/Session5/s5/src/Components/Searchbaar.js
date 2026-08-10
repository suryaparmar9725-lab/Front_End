import React, { useState } from 'react'

const Searchbaar = () => {
     const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
       <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛒 Flipkart Product Search</h2>

      <input
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={handleChange}
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <h3>Current Search:</h3>
      <p>{search || "Start typing a product name..."}</p>
    </div>
    </div>
  )
}

export default Searchbaar
