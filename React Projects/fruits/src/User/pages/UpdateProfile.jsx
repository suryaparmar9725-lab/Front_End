
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'





const UpdateProfile = () => {
const redirect = useNavigate()  

  useEffect(()=>{
    GetUser()
  },[])

const [editform,seteditform] = useState({
  id : '',
  firstname:'',
  LastName : '',
  Email : '',
  Password : '',
  Gender : '',
  Address : ''
})

// getU ser
const GetUser = async(e)=>{
  try {
    const res = await axios.get(`http://localhost:3000/Users/${localStorage.getItem('Uid')}`)
    seteditform(res.data)
  } catch (error) {
    toast.error('data Not found')
  }
}

const GetHandle = (e) =>{
  seteditform({
    ...editform,
    [e.target.name] : e.target.value
  })
}

const Submit = async(e) =>{
  e.preventDefault()

  try {
    const res = await axios.put(`http://localhost:3000/Users/${editform.id}`,editform)
    seteditform({
       id : '',
  firstname:'',
  LastName : '',
  Email : '',
  Password : '',
  Gender : '',
  Address : ''
    })
    localStorage.setItem('Uname',editform.firstname)
    localStorage.setItem('Usurname',editform.LastName)
    redirect('/')

    toast.success('Profile Updated Successfully')

  } catch (error) {
    toast.error('Data Not Found')
  }


}
  
  
  return (
    <div>
     
     <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-primary text-white text-center py-4">
              <h3 className="mb-1 text-white">Update Profile</h3>
              <p className="mb-0">Edit your profile information</p>
            </div>

            <div className="card-body p-4">
              <form onSubmit={Submit} >
                {/* First Name Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">firstname</label>
                  <input
                onChange={GetHandle}
                value={editform.firstname}
                    type="text"
                    name="firstname"
                    className="form-control"
                    placeholder="Enter first name"
                  />
                </div>

                {/* Last Name Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">LastName</label>
                  <input
                  onChange={GetHandle}
                value={editform.LastName}
                    type="text"
                    name="LastName"
                    className="form-control"
                    placeholder="Enter last name"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                onChange={GetHandle}
                value={editform.Email}
                    type="email"
                    name="Email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Password</label>
                  <input
                  onChange={GetHandle}
                value={editform.Password}
                                  type="password"
                    name="Password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                {/* Gender Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Gender</label>
                  <select
               onChange={GetHandle}
                value={editform.Gender}
                    name="Gender"
                    className="form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Address Field */}
                <div className="mb-4">
                  <label className="form-label fw-bold">Address</label>
                  <textarea
              onChange={GetHandle}
                value={editform.Address}
                    name="Address"
                    className="form-control"
                    rows="3"
                    placeholder="Enter address"
                  ></textarea>
                </div>

                {/* Update Profile Button */}
                <button type="submit" className="btn btn-primary text-white py-2">
                  Update Profile
                </button>

                <NavLink to={'/'} className="btn btn-danger mx-3">Close</NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default UpdateProfile
