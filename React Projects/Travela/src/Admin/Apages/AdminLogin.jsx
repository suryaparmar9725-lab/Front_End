import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const redirect = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('Aid')){
      redirect('/dash')
    }

    
  },[])

  // create form
  const [form,setform] = useState({
    email : '',
    password : ''
  })

  // form Handel
  const getChange = (e) =>{
      setform({
        ...form,
        [e.target.name] : e.target.value
      })
  }
  
  // form Submit
  const Submit = async(e)=>{
    e.preventDefault();

    const {email,password} = form;

    if(email == '' || password == ''){
      toast.error('please field data')
      return false
    }

    try {
      const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
     
      // email chekc 
      if(res.data.length === 0){
        toast.error('Email not match')
        return false
      }

      const admin = res.data[0]
    console.log(admin);

    // password check
    if(password != admin.password){
      toast.error('Passwrod not Match')
      return false;
    }

    localStorage.setItem('Aid',admin.id)
    localStorage.setItem('Aname',admin.name)
    redirect('/dash')
    toast.success('Login Successfully')
          
    } catch (error) {
        toast.error('data not found')
    }
  }

  return (
    <div>
      <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card shadow border-0 p-4"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome Back</h2>
          <p className="text-muted">Login to your account</p>
        </div>

        <form onSubmit={Submit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              onChange={getChange}
              value={form.email}
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
             onChange={getChange}
             value={form.password}
             name="password"
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

          
        </form>


      </div>
    </div>
    </div>
  )
}

export default AdminLogin

