import React, { useState } from "react";

function LiveInput() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here"
      />
      <p>{value}</p>
    </div>
  );
}

export default LiveInput;
