import React, { useRef, useState } from 'react'

const Feedback = () => {

     const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  
  const messageRef = useRef(null);

  
  const focusMessage = () => {
    messageRef.current.focus();
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Message:", message);

    
    setName("");
    setMessage("");
  };


  return (
    <div>
      <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Message:</label>
          <br />
          <textarea
            ref={messageRef}
            placeholder="Enter your feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button className='btn btn-warning' type="submit">Submit</button>

        <button
        className='btn btn-secondary'
          type="button"
          onClick={focusMessage}
          style={{ marginLeft: "10px" }}
        >
          Focus Message
        </button>
      </form>
    </div>
    </div>
  )
}

export default Feedback
