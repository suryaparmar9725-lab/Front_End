import React from 'react'

const Cartsummary = ({ cartItems }) => {
  return (
    <div>
       <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛒 Cart Summary</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - ₹{item.price}
              </li>
            ))}
          </ul>

          {cartItems.length >= 3 && (
            <button>Checkout Now</button>
          )}
        </>
      )}
    </div>
    </div>
  )
}

export default Cartsummary
