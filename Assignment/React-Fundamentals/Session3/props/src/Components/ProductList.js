import React from 'react'
import PropTypes from "prop-types";


const ProductList = ({ productName, price }) => {
  return (
    <div>
      <h1>Product List </h1>
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
      <h2>{productName}</h2>
      <p>
        <strong>Price:</strong> ₹{price}
      </p>
    </div>

    </div>
  )

  // Prop type validation
ProductList.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
}

export default ProductList
