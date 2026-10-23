import React from 'react'
import { Link } from 'react-router-dom'

const ManageHeader = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-white shadow-sm py-5 mb-5">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-success" to="/">
          Fruitables
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#manageNavbar"
          aria-controls="manageNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="manageNavbar">
          <ul className="navbar-nav ms-auto gap-lg-2">
            <li className="nav-item">
              <Link to={'/FruitManage'} className="nav-link fw-semibold" >
                Fruit Manage
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/VegManage">
                Vege Manage
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/SellerManage">
                Bestseller Manage
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/TestiManage">
                Testi Manage
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/CartManage">
                <i className="bi bi-cart3 me-1"></i>
                Cart Manage
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default ManageHeader
