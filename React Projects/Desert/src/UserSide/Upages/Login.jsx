import { NavLink, useNavigate } from 'react-router-dom'
import UseLogin from '../../CustomHooks/UseLogin'
import { useEffect } from 'react'

const Login = () => {

  const {form,getChange,Submit} = UseLogin(`http://localhost:3000/Users`)
  const redirect = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('Uid')){
      redirect('/')
  }
  },[])

  return (
    <div>
        <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6 col-sm-8 col-12">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center fw-bold mb-4">Login</h2>

              <form onSubmit={Submit}>

    
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                 onChange={getChange}
                 value={form.email}
                 name='email'

                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                  onChange={getChange}
                 value={form.password}
                 name='password'
               
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  
                 
                </div>

                {/* Login Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Login
                  </button>
                </div>
              </form>

              <p className="text-center mt-4 mb-0">
                Don't have an account?{" "}
                <NavLink  to="/Register" className="text-decoration-none fw-semibold">
                  Register
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Login
