  import { NavLink } from 'react-router-dom'
import UseEditeProfile from '../../CustomHooks/UseEditeProfile'
import { useEffect } from 'react'






const EditeProfile = () => {

  const { form,GetChnage,GetUser,GetUpdate} = UseEditeProfile(`http://localhost:3000/Users`)

  useEffect(()=>{
    GetUser()
    
  },[])
 
  return (
    <div>
        <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center  mb-4 " style={{fontFamily:'cursive'}}><i className="fa-solid fa-pen-to-square"></i> Edit Profile</h2>

              <form onSubmit={GetUpdate}>
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
                  <label className="form-label">New Password</label>
                  <input
                   onChange={GetChnage}
                  value={form.password}
                  name='password'
                    type="password"
                    className="form-control"
                    placeholder="Enter new password"
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-success w-100">
                    Update Profile
                  </button>

                  <NavLink to={'/'} type='reset' className='btn btn-secondary'>
    cancel
                  </NavLink>
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

export default EditeProfile
