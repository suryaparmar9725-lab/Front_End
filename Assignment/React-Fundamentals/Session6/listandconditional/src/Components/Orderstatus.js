import React from 'react'

const Orderstatus = ({ isDelivered }) => {
  return (
    <div>
       <div>
      <h2>
        {isDelivered ? "Order Delivered 🎉" : "Order on the way 🚚"}
      </h2>
    </div>
    </div>
  )
}

export default Orderstatus
