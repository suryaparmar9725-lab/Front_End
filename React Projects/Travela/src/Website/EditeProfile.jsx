import React, { useEffect, useState } from 'react'
import Header from '../Comon/Header'
import Ahero from '../Admin/Acomon/Ahero'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'



const EditeProfile = () => {
  const redirect = useNavigate()
  
  useEffect(()=>{
    getUse()
  },[])

  // create Edit form
  const [EditForm,setEditForm] = useState({
    id : '',
    name : '',
    email :'',
    password : ''
  })

  // getUser
  const getUse = async() =>{
      try {
        const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem('Uid')}`)
        console.log(res.data);
        setEditForm(res.data)
        
        
      } catch (error) {
          toast.error('Data not Found')
      }
  }

  // getChange 
  const getChange = (e) =>{
      setEditForm({
        ...EditForm,
        [e.target.name] : e.target.value
      })
  }

  // getUPDATE DATA
  const updateData = async(e) =>{
      e.preventDefault()

      try {
        
        const res = await axios.put(`http://localhost:3000/users/${EditForm.id}`,EditForm)
        setEditForm({
          id : '',
    name : '',
    email :'',
    password : ''
        })
        redirect('/')
        localStorage.setItem('Uname',EditForm.name)
        toast.success('Profile Update Successfully')
      } catch (error) {
          toast.error('Data Not Found')
      }
  }

  let a = 0
  const Showpass = () =>{
      let pass = document.querySelector('.pass')
      let btn = document.querySelector('.showbtn')
      if(a == 0){
        pass.type = 'text'
        btn.textContent = 'Hide Password'
        a = 1
      }else{
        pass.type = 'password'
        btn.textContent = 'Show Password'
        a = 0
      }
      
  }

  

  return (
    <div>
      <Header/>
      <Ahero title='Edite Profile' name='Edit'  />
      <div className="container">
        <div className="row">
          <form  onSubmit={updateData}   className="my-5 w-50   mx-auto">
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                onChange={getChange}
                value={EditForm.name}
                name='name'
                type="text"
                className="form-control"
                
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
               onChange={getChange}
                value={EditForm.email}
                name='email'
                type="email"
                className="form-control"
                
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Your  Password</label>
              <input
                onChange={getChange}
                value={EditForm.password}
                name='password'
                type="password"
                className="form-control pass"
                
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Update Profile

            </button>
          </form>
              <button className='btn showbtn btn-success mb-5 '>Show Password</button>
            
        </div>
      </div>
      
    </div>
  )
}

export default EditeProfile
