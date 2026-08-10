import React, { useEffect, useState } from 'react'

const IplScore = () => {

     const [scores, setScores] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Check if status is exactly 200
        if (response.status !== 200) {
          throw new Error("Failed to load scores");
        }

        const data = await response.json();
        setScores(data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchScores();
  }, []);

  if (error) {
    return <h2>Error loading scores</h2>;
  }

  return (
    <div>
         <div>
      <h2>IPL Scores</h2>
      <ul>
        {scores.map((team) => (
          <li key={team.id}>
            <strong>{team.name}</strong> - {team.company.name}
          </li>
        ))}
      </ul>
    </div>
      
    </div>
  )
}

export default IplScore
