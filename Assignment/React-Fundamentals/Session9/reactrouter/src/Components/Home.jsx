import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>

        <div className='m-5'>
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'/deal'}className='mx-5'> Deals </NavLink>
            <NavLink to={'/cart'}> Cart </NavLink>
        </div>

      <div className='bg-success text-white p-5'>
      <h2>Home Page</h2>
      <p>Welcome to our online store!</p>
    </div>
    </div>
  )
}

export default Home
