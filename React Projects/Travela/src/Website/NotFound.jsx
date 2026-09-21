import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
   <div className="container-fluid min-vh-100 bg-light">
      <div className="row min-vh-100 align-items-center">

        {/* Left Side */}
        <div className="col-lg-6 text-center p-5">
          <h1
            className="fw-bold text-primary"
            style={{
              fontSize: "10rem",
              lineHeight: "1",
            }}
          >
            404
          </h1>

          <h2 className="fw-bold mb-3">
            Oops! Page Not Found
          </h2>

          <p className="text-muted fs-5 mb-4">
            The page you are looking for might have been removed,
            renamed, or is temporarily unavailable.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/" className="btn btn-primary btn-lg">
              Back To Home
            </Link>

            <button
              className="btn btn-outline-secondary btn-lg"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 text-center p-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
            alt="404"
            className="img-fluid"
            style={{
              maxWidth: "400px",
              width: "100%",
            }}
          />
        </div>

      </div>

      {/* Extra Section */}
      <div className="container py-5">
        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <h4>🏠 Home Page</h4>
                <p className="text-muted">
                  Visit our homepage and explore all features.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <h4>📞 Contact Us</h4>
                <p className="text-muted">
                  Need help? Reach out to our support team.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <h4>❓ FAQs</h4>
                <p className="text-muted">
                  Find answers to commonly asked questions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">
          © 2026 Your Website. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default NotFound
