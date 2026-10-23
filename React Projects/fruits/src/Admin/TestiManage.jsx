import React, { useEffect, useState } from 'react'
import ManageHeader from './ManageHeader'
import UseGet from '../CustomHook/UseGet'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const TestiManage = () => {

    const {Data,GetData} = UseGet(`http://localhost:3000/Testimonials`)

    useEffect(()=>{
        GetData()
    },[])

// Edit Modal & Edit Data
const [EditModal,setEditModal] = useState(false)
const [EditData,setEditData] = useState({
    id : '',
    ClientName:'',
    About : '',
    Rol : '',
    Rate : '',
    Img : ''
})

// OPen Modal
const OpenModal = (details) =>{
    setEditData(details)
    setEditModal(details)
}

const GetHandle = (e) =>{
    setEditData({
        ...EditData,
        [e.target.name] : e.target.value
    })
}

// Update Data 
const UpdateData = async(e)=>{
    e.preventDefault()
    
    try {
        const res = await axios.put(`http://localhost:3000/Testimonials/${EditData.id}`,EditData)
        GetData()
        setEditModal(false)
        toast.success('Data Update Successfully')
    } catch (error) {
        toast.error('Data Not Found')
    }

}

const RemoveData = async(id)=>{
    try {
        const res = await axios.delete(`http://localhost:3000/Testimonials/${id}`)
        GetData()
        toast.success('Item Removed✅')
        
    } catch (error) {
        toast.error(`Somthing Went Wrong!`)
    }
}

  return (
    <div>
        <ManageHeader/>
        <div className="container-fluid ">
            <NavLink to={'/AddTestimonial'}  style={{padding:'1vw 3vw',border:'0',background:'rgb(6, 106, 228)',color:'white',borderRadius:'5px',cursor:'pointer'}}>+Add Members</NavLink>
            <div className="row">
                <table className="table table-hover mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Client Name</th>
                            <th>About</th>
                            <th>Rol</th>
                            <th>Rate</th>
                            <th>Image </th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data && Data.map((dets)=>(
                                <tr key={dets.id}>
                                    <td>{dets.id}</td>
                                    <td>{dets.ClientName}</td>
                                    <td className='w-25'>{dets.About}</td>
                                    <td>{dets.Rol}</td>
                                    <td className=''>{dets.Rate}</td>
                                    <td><img src={dets.Img}
                                    style={{width:'100px',height:'100px',objectFit:'cover',borderRadius:'10px'}}
                                    alt="" /></td>
                                    <td>
                                        <button className="btn btn-success"
                                        data-bs-toggle="modal"
                          data-bs-target={`#view${dets.id}`}
                                        >View</button>
                                        <button className="btn btn-primary mx-1 text-white"
                                        onClick={()=>OpenModal(dets)}
                                        >Edite</button>
                                        <button className="btn btn-danger"
                                        onClick={()=>RemoveData(dets.id )}
                                        >Remove</button>
                                    </td>
                                    {/* View Modal Open */}
                                     <div
                        className="modal fade"
                        id={`view${dets.id}`}
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
<div className="card" style={{width: '100%'}}>
  <img src={dets.Img} style={{width:'100%',height:'400px',objectFit:'cover',objectPosition:'top'}}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{dets.ClientName}</h5>
    <p className="card-text">{dets.About}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Rol : {dets.Rol}</li>
    <li className="list-group-item">Rate : {dets.Rate} </li>
    <li className="btn btn-success">Explore </li>
  </ul>

</div>

                            </div>
                            <div className="modal-footer"></div>
                          </div>
                        </div>
                      </div>
                                    {/* View Modal Close */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {/* Edit Modal OPen */}
{
    EditModal && (
         <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
              <h3 className="mb-1 fw-bold">Edit Testimonial</h3>
              <p className="mb-0">Update client testimonial details</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={UpdateData}>
                {/* Client Name Field */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Client Name
                  </label>
                  <input
                  onChange={GetHandle}
                  value={EditData.ClientName}
                    type="text"
                    name="ClientName"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter client name"
                  />
                </div>

                {/* About Field */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    About
                  </label>
                  <textarea
                  onChange={GetHandle}
                  value={EditData.About}
                    name="About"
                    className="form-control rounded-3"
                    rows="4"
                    placeholder="Enter testimonial description"
                  ></textarea>
                </div>

                {/* Role Field */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Role
                  </label>
                  <input
                  onChange={GetHandle}
                  value={EditData.Rol}
                    type="text"
                    name="Rol"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter client role"
                  />
                </div>

                {/* Rating Field */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Rating
                  </label>
                  <input
                  onChange={GetHandle}
                  value={EditData.Rate}
                    type="text"
                    name="Rate"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter rating"
                  />
                </div>

                {/* Image URL Field */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Image URL
                  </label>
                  <input
                  onChange={GetHandle}
                  value={EditData.Img}
                    type="url"
                    name="Img"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter image URL"
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex gap-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-3 text-white flex-grow-1"
                  >
                    Update Testimonial
                  </button>
                  <button
                    onClick={()=>setEditModal(false)}
                    className="btn btn-outline-secondary btn-lg rounded-3"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
                {/* Edit Modal Close */}
            </div>
        </div>
      
    </div>
  )
}

export default TestiManage
