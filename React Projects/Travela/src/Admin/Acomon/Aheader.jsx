import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Aheader = () => {
  const redirect = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('Aid')){
      redirect('/adminlogin')
    }
  })

  const Logout = () =>{
    localStorage.removeItem('Aid')
    localStorage.removeItem('Aname')
    redirect('/adminlogin')
    toast.success('Logou Successfully')
  }

   return (
    <div>
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              {/* <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a> */}
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <a href="#">
                <small className="me-3 text-light">
                  <i className="fa fa-user me-2" />
                  Register
                </small>
              </a>
              {/* <NavLink to={"/adminlogin"}>
                <small className="me-3 text-light">
                  <i className="fa fa-sign-in-alt me-2" />
                  Login
                </small>
              </NavLink> */}
              {
                (()=>{
                  if(localStorage.getItem('Aid')){
                    return (
                      <span className="text-white mx-3">Hello {localStorage.getItem('Aname')}</span>
                    )
                  }
                })()
              }
              {
                (()=>{
                  if(localStorage.getItem('Aid')){
                    return(
                      <Link to={'/adminlogin'}>
                        <span className="text-white" onClick={Logout}>Logout</span>
                      </Link>
            
                    )
                  }else{
                    <span className="text-white">Login</span>
                  }
                })()
              }
             
             
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          {/* <a href='#' className="navbar-brand p-0"> */}
          <NavLink to={"/dash"} className="m-0">
            <h1 className="text-info">DashBoard</h1>
          </NavLink>
          {/* <img src="img/logo.png" alt="Logo"> */}
          {/* </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
               {/* <NavLink to='/' className="nav-item nav-link ">Home</NavLink> */}
      {/* <NavLink to= '/about' className="nav-item nav-link">About</NavLink> */}
      {/* <NavLink to='/Aservices' className="nav-item nav-link">Services</NavLink> */}
      {/* <NavLink to='/Packages' className="nav-item nav-link">Packages</NavLink>  */}
              {/* <NavLink to="/blogmanage" className="nav-item nav-link">
                Blog Manage
              </NavLink> */}
                   <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="/Aservices" className="dropdown-item">
                    Service Manage
                  </NavLink>
                  
                 
                  {/* <NavLink to={'/not'} className="dropdown-item">404 Page</NavLink> */}
                </div>
              </div>
           
                <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="/blogmanage" className="dropdown-item">
                    Blog Manage
                  </NavLink>
                  <NavLink to="/Blogadd" className="dropdown-item">
                    Blog   Add
                  </NavLink>
                 
                  {/* <NavLink to={'/not'} className="dropdown-item">404 Page</NavLink> */}
                </div>
              </div>
           
           
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Tour
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="/ATour" className="dropdown-item">
                    Tour Manage
                  </NavLink>
                  <NavLink to="/ATourAdd" className="dropdown-item">
                    Tour  Add
                  </NavLink>
                 
                  {/* <NavLink to={'/not'} className="dropdown-item">404 Page</NavLink> */}
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="/adesti" className="dropdown-item">
                    Destination
                  </NavLink>
                  <NavLink to="/ATour" className="dropdown-item">
                    Explore Tour
                  </NavLink>
                  <NavLink to="/travelbooking" className="dropdown-item">
                    Travel Booking
                  </NavLink>
                  <NavLink to="/agalary" className="dropdown-item">
                    Our Gallery
                  </NavLink>
                  <NavLink to={"/travlguid"} className="dropdown-item">
                    Travel Guides
                  </NavLink>
                  <NavLink to={"/Atesti"} className="dropdown-item">
                    Testimonial
                  </NavLink>
                  {/* <NavLink to={'/not'} className="dropdown-item">404 Page</NavLink> */}
                </div>
              </div>
              <NavLink
                to={"/Acontect"}
                href="contact.html"
                className="nav-item nav-link"
              >
                Contact
              </NavLink>
            </div>
            <a
              href="#"
              className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4"
            >
              Book Now
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Aheader;
