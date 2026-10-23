import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

  const redirect = useNavigate()

 useEffect(()=>{
   if(localStorage.getItem('Uid')){
    redirect('/')
  }
 },[])

// create form
const [Login,setLogin] = useState({
  Email : '',
  Password : ''
})

const Gethandle  = (e) =>{
  setLogin({
    ...Login,
    [e.target.name] : e.target.value
  })
}

const SubmitData = async(e)=>{
  e.preventDefault()
  
  const {Email,Password} = Login

  if(Email == '' || Password == '' ){
    toast.warning('Field is Empty!')
    return false
  }

try {
  const res = await axios.get(`http://localhost:3000/Users?Email=${Email}`)

  // email check
  if(res.data.length === 0){
    toast.error('Email Not Match!')
    return false
  }

  // Make USer
  const User = res.data[0]

  // password check
  if(User.Password != Password){
    toast.error('Password Not Match!')
    return false
  }

localStorage.setItem('Uid',User.id)
localStorage.setItem('Uname',User.firstname)
localStorage.setItem('Usurname',User.LastName)
toast.success('Login Successfull')
redirect('/')

} catch (error) {
  toast.error('Data Not Found')
}

}

  return (
    <div>
        <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white text-center py-4">
              <h3 className="fw-bold mb-1">Login Form</h3>
              <p className="mb-0">Welcome Back!</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={SubmitData}>
                {/* email */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">email</label>
                  <input
                  onChange={Gethandle}
                  value={Login.Email}
                    type="email"
                    className="form-control form-control-lg rounded-3"
                    name="Email"
                    placeholder="Enter your email"
                  />
                </div>

                {/* password */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">password</label>
                  <input
                   onChange={Gethandle}
                  value={Login.Password}
                    type="password"
                    className="form-control form-control-lg rounded-3"
                    name="Password"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="btn btn-primary mb-3 btn-lg w-100 text-white rounded-3 fw-semibold"
                >
                  Login
                </button>
                <NavLink to={'/Register'} className=' fs-4  btn text-info  mx-auto'> Register</NavLink>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Login
