import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Hello is Home</h1>
      <header>
        <Link to="/">Home</Link> <br />
        <Link to="/about">about</Link><br />
        <Link to="/contact">Contact</Link>
      </header>
    </div>
  )
}

export default Home
