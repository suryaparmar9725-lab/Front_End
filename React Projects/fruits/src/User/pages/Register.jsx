import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {

const redirect = useNavigate()

const [Register,setRegister] = useState({
    id : '',
       firstname: "",
    LastName: "",
    Email: "",
    Password: "",
    Gender: "",
    Address: ""
})

// form hande
const GetHandle = (e) =>{
    setRegister({
        ...Register,
        id : new Date().getTime().toString(),
        [e.target.name] : e.target.value
    })
}

const Submit = async(e)=>{
    e.preventDefault()

    const {firstname,LastName,Gender,Email,Password,Address} = Register

    if(firstname == '' || LastName == '' || Gender == '' || Email == '' || Password =='' || Address == ''){
        toast.error('Field is Required*')
        return false
    }

    try {
        const res = await axios.post(`http://localhost:3000/Users`,Register)
        setRegister({
             id : '',
       firstname: "",
    LastName: "",
    Email: "",
    Password: "",
    Gender: "",
    Address: ""
        })
        redirect('/Login')
        toast.success('Register Successfully')
    } catch (error) {
        toast.error('Somwthing Went Wrong!')
    }

}

  return (
    <div>
     <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white text-center py-4">
              <h3 className="fw-bold mb-0 text-white">Register Form</h3>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={Submit}>
                {/* firstname */}
                <div className="mb-3">
                  <label className="form-label">firstname</label>
                  <input
                  onChange={GetHandle}
                  value={Register.firstname}
                  type="text" className="form-control" name="firstname" />
                </div>

                {/* LastName */}
                <div className="mb-3">
                  <label className="form-label">LastName</label>
                  <input
                   onChange={GetHandle}
                  value={Register.LastName}
                  type="text" className="form-control" name="LastName" />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                   onChange={GetHandle}
                  value={Register.Email}
                  type="email" className="form-control" name="Email" />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input 
                   onChange={GetHandle}
                  value={Register.Password}
                  type="password" className="form-control" name="Password" />
                </div>

                {/* Gender */}
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select  onChange={GetHandle}
                  value={Register.Gender} className="form-select" name="Gender" defaultValue="">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label className="form-label">Address</label>
                  <input
                   onChange={GetHandle}
                  value={Register.Address}
                  type="text" className="form-control" name="Address" />
                </div>

                <button type="submit" className="btn btn-primary w-100 text-white py-2 fw-bold">
                  Register
                </button>
                <div className='d-flex align-items-center mx-auto'>
                    <p className='text-center mt-3'>You Have Account? </p>
                <NavLink to={'/Login'} className='fs-5'>Login</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
