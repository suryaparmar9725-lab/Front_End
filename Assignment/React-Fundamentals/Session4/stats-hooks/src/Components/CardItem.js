import React, { useState } from 'react'

const CardItem = () => {
     const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
        <div
      style={{
        width: "320px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVonS20MzoX825EnlM73r8_J6h5YXH56CFFU9Es2B6A&s=10"
            class="img-fluid rounded-top"
            style={{width:'100%',objectFit:'cover'}}
            alt=""
        />
        
      <h2>Samsung Galaxy S25</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "15px",
        }}
      >
        <button
          onClick={decreaseQuantity}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          -
        </button>

        <h3>{quantity}</h3>

        <button
          onClick={increaseQuantity}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>
      
    </div>
  )
}

export default CardItem
