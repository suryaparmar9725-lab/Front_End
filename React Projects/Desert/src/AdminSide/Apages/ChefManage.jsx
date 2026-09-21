import React, { useEffect, useState } from 'react'
import ManagandAddNavbar from '../Acommon/ManagandAddNavbar'
import { toast } from 'react-toastify'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ChefManage = () => {

    const [chef , setChef] = useState([])
    

    useEffect(()=>{
        GetChef()
    },[])

    const GetChef = async()=>{
        try {
            const res = await axios.get('http://localhost:3000/chef')
            setChef(res.data)
        } catch (error) {
            toast.error('DATA NOT FOUND!')
        }
    }


   const DeleteChef = async(id) =>{
        try {
            const res = await axios.delete(`http://localhost:3000/chef/${id}`)
            toast.success('Chef Delete Successfully')
            GetChef()
            
        } catch (error) {
            toast.error('DATA NOT FOUND')
        }
   } 


  return (
    <div>
     
<ManagandAddNavbar/>
      <div className="text-center mb-5 " data-aos="fade-up">
      
      <h2 className="stitle mt-3 mb-5">Chef  <span>Manage</span></h2>
        <h3 className='mb-3'>Manage Your Chef's  </h3> 
      <div className="sline" />


      <NavLink to={'/addchef'} className="btn btn-primary w-75 mt-3 mb-3">Add Chef</NavLink>
        <div className="container">
            <div className="row table-responsive">
                <table className='table table-hover mt-4'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Rol </th>
                            <th>Name</th>
                            <th>Experience</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            chef && chef.map((dets)=>{
                                    return (
                                        <tr key={dets.id}>
                                            <td>{dets.id}</td>
                                            <td>{dets.rol}</td>
                                            <td>{dets.name}</td>
                                            <td>{dets.exp}</td>
                                            <td><img src={dets.image} style={{width:'100px', height:'150px',borderRadius:'10px',objectFit:'cover'}} alt="" /></td>
                                            <td>
                                                <button className="btn btn-success"
                                               
                                                >View</button>
                                                <button className="btn btn-primary m-3">Edit</button>
                                                <button className="btn btn-danger" onClick={() => DeleteChef(dets.id)}>Delete</button>
                                            </td>
                                        {/* View  Modal Open */}


                                        {/* View  Modal Close */}
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </div>
  )
}

export default ChefManage
