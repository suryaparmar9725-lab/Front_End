import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Likes: {count}</h2>
      <button onClick={handleLike} style={{padding: '5px 20px', background:'green',color:'white',border:'0',borderRadius:'5px '}}>👍 Like</button>
    </div>
  );
}

export default LikeButton;