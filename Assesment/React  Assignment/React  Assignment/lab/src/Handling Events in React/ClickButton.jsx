import React, { useState } from "react";

function ClickButton() {
  const [text, setText] = useState("Not Clicked");

  return (
    <div>
      <button onClick={() => setText("Clicked!")}>
        {text}
      </button>
    </div>
  );
}

export default ClickButton;
