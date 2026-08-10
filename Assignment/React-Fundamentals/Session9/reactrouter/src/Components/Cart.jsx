import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
         <div className='m-5'>
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'/deal'} className='mx-5'> Deals </NavLink>
            <NavLink to={'/cart'}> Cart </NavLink>
        </div>
       <div className='bg-warning p-5 text-black'>
      <h2>Cart Page</h2>
      <p>Your shopping cart is currently empty.</p>
    </div>
    </div>
  )
}

export default Cart
