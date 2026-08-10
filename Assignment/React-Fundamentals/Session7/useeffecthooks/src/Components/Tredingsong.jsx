import React, { useEffect } from 'react'

const Tredingsong = () => {
    useEffect(() => {
    console.log("Component mounted");
  }, []);
  return (
    <div>
        <div>
      <h2>Trending Songs</h2>
      <p>Check the browser console to see the mount message.</p>
    </div>
    </div>
  )
}

export default Tredingsong
