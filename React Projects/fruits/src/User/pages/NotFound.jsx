import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div>
       <div className="container-fluid py-5">
      <div className="container py-5 text-center">
        <h1 className="display-1 fw-bold" style={{ color: '#81c408' }}>
          404
        </h1>

        <h2 className="display-5 fw-bold mb-3">
          Page Not Found
        </h2>

        <p className="text-muted fs-5 mb-4">
          Sorry, the page you are looking for does not exist!
        </p>

        <div className="mb-4">
          <i
            className="fa fa-leaf"
            style={{ fontSize: '80px', color: '#ffb524' }}
          ></i>
        </div>

        <Link
          to="/"
          className="btn rounded-pill px-4 py-3 text-white"
          style={{ backgroundColor: '#81c408' }}
        >
          <i className="fa fa-home me-2"></i>
          Go Back Home
        </Link>
      </div>
    </div>
    </div>
  )
}

export default NotFound
