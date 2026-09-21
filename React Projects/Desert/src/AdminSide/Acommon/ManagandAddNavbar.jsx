import React from 'react'
import { NavLink } from 'react-router-dom'

const ManagandAddNavbar = () => {
  return (
    <div>
<div>
  <nav className="navbar navbar-expand-lg   shadow-sm">
    <div className="container">
      <a className="navbar-brand fw-bold" href="#">🍰 Dessert Admin</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
         
          <li className="nav-item">
            <NavLink className="nav-link" to={'/catmanage'}>Category Manage</NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" to={'/menumanage'}>Manage Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/chef'}>Chef Manage</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 
</div>

      
    </div>
  )
}

export default ManagandAddNavbar
