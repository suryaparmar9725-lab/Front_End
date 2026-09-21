
import { NavLink ,Link, useNavigate } from 'react-router-dom'
import {  useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';



const Header = () => {

const [showSearch, setShowSearch] = useState(false);

const searchRef = useRef(null);

const Redirect = useNavigate()

const Logout = ()=>{
  localStorage.removeItem('Uid')
  localStorage.removeItem('Uname')
  Redirect('/Login')
  toast.success('Logout Successfully')
}




  useEffect(()=>{
    
    if(!localStorage.getItem('Uid')){
      Redirect('/Login')
    }
   

     const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target)
    ) {
      setShowSearch(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
  })



  return (
    <div className=''>
      
         <nav className="navbar navbar-expand-lg" id="nav">
  <div className="container">
    <NavLink to={'/'} className="navbar-brand" href="#">
      <div className="blogo">
        <div className="bico"><i className="fas fa-utensils" /></div>
        <div>
          <div className="bname">Sar<span>ab</span></div>
          <div className="bsub">Fast Food &amp; Restaurant</div>
        </div>
      </div>
    </NavLink>
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
        <NavLink to={'/'} className='nav-link'>Home</NavLink>
        <NavLink to={'/Uabout'} className='nav-link'>About</NavLink>
        <NavLink to={'/Umenu'} className='nav-link'>Menu</NavLink>
        <NavLink to={'/UChef'} className='nav-link'>Chefs</NavLink>
        <NavLink to={'/Ureserve'} className='nav-link'>Reservation</NavLink>
        <NavLink to={'/Ureview'} className='nav-link'>Review</NavLink>
        <NavLink to={'/Ucontact'} className='nav-link'>Contact</NavLink>
      </ul>
      <div className="d-flex align-items-center gap-1">
        {/* FIX 1: Search button */}
        
<div className="position-relative" ref={searchRef}>

  <button
    className="btn btn-light"
    onClick={() => setShowSearch(!showSearch)}
  >
    <i className="fas fa-search"></i>
  </button>

  {showSearch && (
    <div
      className="position-absolute end-0 mt-2 bg-white shadow rounded p-2"
      style={{ width: "250px", zIndex: 999 }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        autoFocus
      />
    </div>
  )}

</div>


        {/* <a href="#menu" className="nav-link nav-cta"> Sign Up</a> */}
        {/* {
          (()=>{
            if(localStorage.getItem('Uid')){
              return(
                <Link to={'/Editprofile'}>
                   <span className=' text-black mx-2'>Hello😇, {localStorage.getItem('Uname')} </span>
                 
                </Link>
              
              )
            }
          })()
        }
        {
          (()=>{
            if(localStorage.getItem('Uid')){
              return(

                <button className="btn btn-danger" onClick={Logout}>Logout</button>
              )
            }else{
              return(
                <Link to={'/Login'}>
                  <span>Login</span>
                </Link>
              )
            }
          })()
        } */}

        {
          (()=>{
            if(localStorage.getItem('Uid')){
              return(
                <Link to={'/EditProfile'}>
                 <span className='text-dark '>Hello, {localStorage.getItem('Uname')}</span>
                </Link>
              )
            }
          })()
        }
        {
          (()=>{
            if(localStorage.getItem('Uid')){
              return(
                <Link>
                <button className="btn btn-danger" onClick={Logout}>Logout</button>
                </Link>
              )
            }else{
              return(
                <Link to={'/Login'}>
                <span>Login</span>
                </Link>
              )
            }
          })()
        }

      </div>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
