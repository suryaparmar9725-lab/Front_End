import React from 'react'

const Productcard = (props) => {
  return (
    <div>
      

     <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "20px auto",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Product Name : {props.productname}</h2>
      <p>
        <strong> Product Price:</strong> ₹{props.price}
      </p>
    </div>

    </div>
  )
}

export default Productcard
