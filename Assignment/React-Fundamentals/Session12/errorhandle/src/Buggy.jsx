import React, { useEffect, useState } from 'react'

const Buggy = () => {

    const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/invalidurl"
        );

        // Check for non-200 HTTP status
        if (!response.ok) {
          throw new Error("HTTP Error");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
       <div>
      {error ? (
        <h2>Error loading data</h2>
      ) : (
        <ul>
          {Array.isArray(data) &&
            data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
        </ul>
      )}
    </div>
    </div>
  )
}

export default Buggy
