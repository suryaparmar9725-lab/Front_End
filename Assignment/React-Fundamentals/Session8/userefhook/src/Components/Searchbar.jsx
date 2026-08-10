import React, { useEffect, useRef } from 'react'

const Searchbar = () => {
    const inputRef = useRef(null);

     useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
         <div style={{ padding: "20px" }}>
      <input
        ref={inputRef}
        className='mb-3'
        type="text"
        placeholder="Search..."
        style={{
          padding: "8px",
          width: "250px",
          marginRight: "10px",
        }}
      />
      <button className='btn btn-primary'>Search</button>
    </div>
    </div>
  )
}

export default Searchbar
