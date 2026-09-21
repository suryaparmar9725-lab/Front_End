import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {

  const redirect = useNavigate();

useEffect(()=>{
  if(localStorage.getItem('Uid')){
    redirect('/')
  }
})
  
  // create form
  const [form,setform]= useState({
    email : '',
    password: ''
  })
  // form handle
  const getChange = (e) =>{
      setform({
        ...form,
        [e.target.name] : e.target.value
      })
  }
  // submit data

  const Submit = async(e) =>{
    e.preventDefault();

    const {email,password} = form;

    if(email == '' || password == ''){
      toast.error('Please Field Data First')
      return false
    }

    try {
      
      const res = await axios.get(`http://localhost:3000/users?email=${email}`)
      console.log(res.data);

      // emial Check
      if(res.data.length === 0){
        toast.error('Email not found')
        return false
      }

      // make user
      const user = res.data[0]
      console.log(user);

      // password Check
      if(password != user.password){
        toast.error('Password Does Not Match')
        return false
      }
      // status Check
      if(user.status === 'Block'){
        toast.error('accound Blocked')
        return false
      }

      
      localStorage.setItem('Uid',user.id)
      localStorage.setItem('Uname', user.name)
      redirect('/')
      toast.success('login successfully')
      
    } catch (error) {
        toast.error('DATA NOT FOUND')
    }

  }


  return (
    <div>
      <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card shadow border-0 p-4"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <Link to={'/userregister'} className='btn btn-primary mb-5' style={{width:'fit-content'}}>⬅ </Link>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome Back</h2>
          <p className="text-muted">Login to your account</p>
        </div>
{/* form */}
        <form onSubmit={Submit} >
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            {/*Email  */}
            <input
           onChange={getChange}
           value={form.email}
           name='email'
           type="email"
           className="form-control"
           placeholder="Enter your email"
           />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
           {/*  password*/}
            <input
           onChange={getChange}
           value={form.password}
           name='password'
           
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            

            
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>

        
        <p className="text-center mt-4 mb-0">
          Don't have an account?{" "}
          <Link to='/userregister' className="text-decoration-none fw-bold">
            Sign Up
          </Link>
        </p>
        </form>

      </div>
    </div>

    </div>
  )
}

export default Login
