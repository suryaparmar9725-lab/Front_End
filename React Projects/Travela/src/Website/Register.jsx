import React, { useEffect, useState } from "react";

import Ahero from "../Admin/Acomon/Ahero";
import Header from "../Comon/Header";
import { Link, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  // const redirect = useNavigate();

  // const [form, setform] = useState({
  //   id: "",
  //   name: "",
  //   email: "",
  //   password: "",
  //   status : ""
  // });

  // const getChnage = (e) => {
  //   setform({
  //     ...form,
  //     id: new Date().getTime().toString(),
  //     status: "unblock",
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const Submit = async (e) => {
  //   e.preventDefault();

  //   const { name, email, password } = form;

  //   if (name == "" || email == "" || password == "") {
  //     toast.error("Please Fill Data ");
  //     return false;
  //   }

  //   try {
  //     const res = await axios.post(`http://localhost:3000/users`, form);
  //     console.log(res.data);
  //     toast.success("Register Successfully");
  //     redirect("/login");
  //     setform({
  //       id: "",
  //       name: "",
  //       email: "",
  //       password: "",
  //       status:""
  //     });
  //   } catch (error) {
  //     toast.error("Api Not Found");
  //   }
  // };

  const rdct = useNavigate()

  // create from
  const [registerForm,setform] = useState({
    id : '',
    name : '',
    email : '',
    password : ''
  })

  // form handle
  const GetChange = (e) =>{
      setform({
        ...registerForm,
        id : new Date().getTime().toString(),
        status : 'unblock',
        [e.target.name] : e.target.value
      })
  }

  // Submit Form
  const SubmitForm = async(e) =>{
      e.preventDefault()

      const {name,email,password} = registerForm;

      if(name == '' || email == '' || password == ''){
        toast.error('Field is Empty')
        return false
      }

      try {
        const res = await axios.post('http://localhost:3000/users',registerForm)
        toast.success('Register Successfull')
        rdct('/login')
        setform({
           id : '',
    name : '',
    email : '',
    password : ''
        })
        
      } catch (error) {
          toast.error('DATA NOT FOUND')
      }
  }

  
  return (
    <div>
      <Header  />
      <Ahero title="Register Account " name="Register " />

      <div className="container">
        <div className="row">
          <form onSubmit={SubmitForm} className="my-5 w-50   mx-auto">
            {/* Name */}
            <h3 className="mt-2 mb-4">Register Your Account</h3>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
               onChange={GetChange}
               value={registerForm.name}
               name="name"
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
              onChange={GetChange}
               value={registerForm.email}
               name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={GetChange}
               value={registerForm.password}
               name="password"
                type="password"
                className="form-control"
                
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
