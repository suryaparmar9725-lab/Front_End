import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = () => {


  const redirect = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('Uid')){
      redirect('/Login')
    }
  })

  const Logout = () =>{
    localStorage.removeItem('Uid')
    localStorage.removeItem('Uname')
    toast.success('Logout Succsss')
    redirect('/Login')
  }

  return (
    <div>
       <div className="container-fluid fixed-top">
  <div className="container topbar bg-primary d-none d-lg-block">
    <div className="d-flex justify-content-between">
      <div className="top-info ps-2">
        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary" /> <a href="#" className="text-white">123 Street, New York</a></small>
        <small className="me-3"><i className="fas fa-envelope me-2 text-secondary" /><a href="#" className="text-white">Email@Example.com</a></small>
      </div>
      <div className="top-link pe-2">
        <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
        <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
        <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
      </div>
    </div>
  </div>
  <div className="container px-0">
    <nav className="navbar navbar-light bg-white navbar-expand-xl">
      <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
      <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars text-primary" />
      </button>
      <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <NavLink to={'/'} className="nav-item nav-link ">Home</NavLink>
          <NavLink to={'/Shop'} className="nav-item nav-link">Shop</NavLink>
          <NavLink to={'/Testimonial'} className="nav-item nav-link">Testimonials</NavLink>
          <NavLink to={'/Cart'} className="nav-item nav-link">Cart</NavLink>
          <NavLink to={'/Checkout'} className="nav-item nav-link">Checkout</NavLink>

          <NavLink to={'/Contact'} className="nav-item nav-link">Contact</NavLink>
        </div>
        <div className="d-flex m-3 me-0">
          <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary" /></button>
          <a href="#" className="position-relative me-4 my-auto">
            <i className="fa fa-shopping-bag fa-2x" />
            <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px', left: 15, height: 20, minWidth: 20}}>3</span>
          </a>
          <a href="#" className="my-auto">
          
          </a>
          {
            (()=>{
              if(localStorage.getItem('Uid')){
                return(
                  <NavLink to={'/UpdateProfile'} className='text-dark'>Welcome, <br />{localStorage.getItem('Uname')} {localStorage.getItem('Usurname')}</NavLink>
                )
              }
            })()
          }
          {
           (()=>{
            if(localStorage.getItem('Uid')){
              return(
                <button style={{ border:'0',borderRadius:'25px',padding:'.1vw 2vw',color:'white'}} className="btn-primary mx-3" onClick={Logout}>
                  Logout
                </button>
              )
            }
           })()
          }
        </div>
      </div>
    </nav>
  </div>
</div>


   <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content rounded-0">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body d-flex align-items-center">
        <div className="input-group w-75 mx-auto d-flex">
          <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
          <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Header
