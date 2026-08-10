import React, { useEffect, useState } from 'react'

const IplScore = () => {
     const [matchHeadline, setMatchHeadline] = useState("Loading...");

     useEffect(()=>{
        fetchData()
     },[])

     const fetchData = () =>{
         fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setMatchHeadline(data[0].title);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMatchHeadline("Failed to load match headline.");
      });
     }

  return (
    <div>
        <div>
             <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>IPL Score Fetcher</h2>
      <p>
        <strong>Current Match Headline:</strong> {matchHeadline}
      </p>
    </div>
        </div>
      
    </div>
  )
}

export default IplScore
