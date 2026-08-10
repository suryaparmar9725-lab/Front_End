import React from 'react'
import { NavLink } from 'react-router-dom'

const Deals = () => {
  return (
    <div>
         <div className='m-5'>
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'/deal'} className='mx-5'> Deals </NavLink>
            <NavLink to={'/cart'}> Cart </NavLink>
        </div>
        <div className='bg-secondary text-white p-5'>
      <h2>Deals Page</h2>
      <p>Check out today's best offers and discounts.</p>
    </div>
    </div>
  )
}

export default Deals
