import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Restaurents = () => {


     const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        // Replace this URL with any public API that returns restaurant data
        const response = await axios.get(
          "https://mocki.io/v1/570c5e5c-8c8b-4c1e-8c8b-4c1e8c8b4c1e"
        );

        setRestaurants(response.data);
        setFilteredRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);

        // Fallback sample data
        const sampleRestaurants = [
          { id: 1, name: "Pizza Hut" },
          { id: 2, name: "Domino's Pizza" },
          { id: 3, name: "KFC" },
          { id: 4, name: "Burger King" },
          { id: 5, name: "McDonald's" },
          { id: 6, name: "Subway" },
        ];

        setRestaurants(sampleRestaurants);
        setFilteredRestaurants(sampleRestaurants);
      }
    };

    fetchRestaurants();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredRestaurants(filtered);
  };


  return (
    <div>

         <div style={{ width: "400px", margin: "30px auto" }}>
      <h2>Restaurant Search</h2>

      <input
        type="text"
        placeholder="Search restaurant..."
        value={search}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      <ul>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </ul>
    </div>
      
    </div>
  )
}

export default Restaurents
