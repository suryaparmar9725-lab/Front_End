import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Addtesti = () => {

    const redirect = useNavigate()
// cretae form
const [addMember,setaddMember] = useState({
    id : '',
    ClientName : '',
    About : '',
    Rol : '',
    Rate : '',
    Img : ''

})

const GetHandle = (e) =>{
    setaddMember({
        ...addMember,
        id : new Date().getTime().toString(),
        [e.target.name] : e.target.value
    })
}

// post Data , send Data
const PostData = async(event) =>{
    event.preventDefault()

    const {ClientName,About,Rol,Rate,Img} = addMember;

    if(ClientName == '' || About == '' || Rol == '' || Rate == '' || Img == ''){
        toast.warning('Field is Required*')
        return false
    }

    try {
        const res = await axios.post(`http://localhost:3000/Testimonials`,addMember)
        setaddMember({
             id : '',
    ClientName : '',
    About : '',
    Rol : '',
    Rate : '',
    Img : ''
        })
        redirect('/TestiManage')
        toast.success('Member Added Successfull')
    } catch (error) {
        toast.error('Data Not Found')
    }


}

  return (
    <div>
        
        <div className="container">
            <div className="row">
                <form onSubmit={PostData} action="" className='m-5 p-5 rounded shadow-lg' style={{width:''}}>
                <h3 className='mb-5'>Add Memebers</h3>

                    {/*Client Name */}
                    <label htmlFor="" className='text-primary'>Client Name</label><br />
                    <input type="text"
                    onChange={GetHandle}
                    value={addMember.ClientName}
                    className='px-3 py-1 mb-3 w-100' placeholder='Enter Client Name' name="ClientName" id="" /> <br />
                    {/*about */}
                    <label htmlFor="" className='text-primary'>About</label><br />
                    <textarea
                     onChange={GetHandle}
                    value={addMember.About}
                    type="text" className='px-3 py-1 mb-3 w-100' placeholder='Enter About Client...' name="About" id="" /><br />
                    {/*Rol */}
                    <label htmlFor="" className='text-primary'>Rol</label><br />
                    <input
                     onChange={GetHandle}
                    value={addMember.Rol}
                    type="text" className='px-3 py-1 mb-3 w-100' placeholder='Enter Rol...' name="Rol" id="" /><br />
                    {/*Rate */}
                    <label htmlFor="" className='text-primary'>Rate</label><br />
                    <input 
                     onChange={GetHandle}
                    value={addMember.Rate}
                    type="text" className='px-3 py-1 mb-3 w-100' placeholder='Enter Rate...' name="Rate" id="" /><br />
                    {/*Image */}
                    <label htmlFor="" className='text-primary'>Image</label><br />
                    <input 
                     onChange={GetHandle}
                    value={addMember.Img}
                    type="url" className='px-3 py-1 mb-3 w-100' placeholder='Enter Image URL...' name="Img" id="" /><br />
                   
                   <div>
                    <button className="me-3" style={{padding:'.5vw 2vw',border:'0',background:'rgb(6, 106, 228)',color:'white',borderRadius:'5px',cursor:'pointer'}}>
                            +Add Member
                    </button>
                    <NavLink to={'/TestiManage'}  className="btn btn-danger">Cancel</NavLink>
                   </div>
                    

                </form>
            </div>
        </div>

    </div>
  )
}

export default Addtesti
