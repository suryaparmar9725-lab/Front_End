import React from 'react'
// import { NavLink,Link } from 'react-router-dom'

const Aheader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" id="nav">
  <div className="container">
    <a href='' className="navbar-brand" href="#">
      <div className="blogo">
        <div className="bico"><i className="fas fa-utensils" /></div>
        <div>
          <div className="bname">Sar<span>ab</span></div>
          <div className="bsub">Fast Food &amp; Restaurant</div>
        </div>
      </div>
    </a>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
      <i className="fas fa-bars" style={{color: 'var(--primary)', fontSize: '1.35rem'}} />
    </button>
    <div className="collapse navbar-collapse" id="navmenu">
      <ul className="navbar-nav mx-auto">
        {/* <NavLink to={'/'}  className="nav-item"><a className="nav-link " href="#hero">Home</a></NavLink>
        <NavLink to={'/about'} className="nav-item"><a className="nav-link" href="#about">About</a></NavLink>
        <NavLink to={'/Amenu'} className="nav-item"><a className="nav-link" href="#menu">Menu</a></NavLink>
        <li className="nav-item"><a className="nav-link" href="#chefs">Chefs</a></li>
        <li className="nav-item"><a className="nav-link" href="#reservation">Reservation</a></li>
        <li className="nav-item"><a className="nav-link" href="#testimonials">Reviews</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact-section">Contact</a></li> */}
        <a href='' className='nav-link'>Home</a>
        <a href='' className='nav-link'>About</a>
        <a href='' className='nav-link'>Menu</a>
        <a href='' className='nav-link'>Chefs</a>
        <a href='' className='nav-link'>Reservation</a>
        <a href='' className='nav-link'>Review</a>
        <a href='' className='nav-link'>Contact</a>
      </ul>
      <div className="d-flex align-items-center gap-1">
        {/* FIX 1: Search button */}
        <button id="navSearchBtn" title="Search"><i className="fas fa-search" /></button>
        <a href="#menu" className="nav-link nav-cta"><i className="fas fa-shopping-bag me-1" />Order Now</a>
      </div>
    </div>
  </div>
</nav>

      
    </div>
  )
}

export default Aheader
