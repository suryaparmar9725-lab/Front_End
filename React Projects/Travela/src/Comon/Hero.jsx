import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <div className="container-fluid bg-breadcrumb">
  <div className="container text-center py-5" style={{maxWidth: 900}}>
    <h3 className="text-white display-3 mb-4">About Us</h3>
    <ol className="breadcrumb justify-content-center mb-0">
      <Link to={'/'} className="breadcrumb-item"> Home</Link>
      <li className="breadcrumb-item"><a href="#">Pages</a></li>
      <li className="breadcrumb-item active text-white">Contact</li>
    </ol>    
  </div>
</div>

      
    </div>
  )
}

export default Hero
