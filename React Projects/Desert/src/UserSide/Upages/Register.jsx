import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import UseRegister from '../../CustomHooks/UseRegister'






const Register = () => {

const { form,GetChnage,Submit} = UseRegister(`http://localhost:3000/Users`)


  return (
    <div>

     <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-sm-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center fw-bold mb-4 "><i className="fa-regular  text-primary fa-user"></i> Register</h2>

              <form onSubmit={Submit}>
{/* image */}
 


                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                 onChange={GetChnage}
                 value={form.name}
                 name='name'
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                 onChange={GetChnage}
                 value={form.email}
                 name='email'
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input
               onChange={GetChnage}
                 value={form.password}
                 name='password'
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </form>

              <p className="text-center mt-3 mb-0">
                Already have an account?{" "}
                <NavLink  to="/Login" className="text-decoration-none">
                  Login
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

export default Register
