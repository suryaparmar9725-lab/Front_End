import React, { useEffect, useState } from 'react'

import ManageHeader from './ManageHeader'
import UseGet from '../CustomHook/UseGet'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const VegeManage = () => {

    const {Data,GetData} = UseGet(`http://localhost:3000/Vegetables`)

    useEffect(()=>{
        GetData()
    },[])

// Edit Data & EditModal
const [EditModal,setEditModal] = useState(false)
const [EditData ,setEditData] = useState({
    id : '',
    Tag : '',
    VegName : '',
    Desc : '',
    Price : '',
    Image : ''
})

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

// Update Data / EditData
const Update = async(e) =>{
    e.preventDefault()
    
    try {
        const res = await axios.put(`http://localhost:3000/Vegetables/${EditData.id}`,EditData)
        setEditModal(false)
        GetData()
        toast.success('Data Update Success')
    } catch (error) {
        toast.error('Data Not Found')
    }

}

// Dlete Data 
const Delete = async(id)=>{
    try {
        const res = await axios.delete(`http://localhost:3000/Vegetables/${id}`)
        GetData()
        toast.success('Data Deleted')
    } catch (error) {
        toast.error('Data Not Found')
    }
}

  return (
    <div>
<ManageHeader/>
        <div className="container mt-5">
            <NavLink to={'/AddVeg'} className="btn btn btn-secondary mb-3"> + Add Vege </NavLink>
            <div className="row">
                <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tag</th>
                                <th>VegName</th>
                                <th>Desc</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Manage</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data && Data.map((dets)=>(
                                    <tr key={dets.id}>
                                        <td>{dets.id}</td>
                                        <td>{dets.Tag}</td>
                                        <td>{dets.VegName}</td>
                                        <td className='w-25'>{dets.Desc}</td>
                                        <td>${dets.Price}</td>
                                        <td><img src={dets.Image} style={{width:'100px',height:'100px',objectFit:'cover',borderRadius:'10px'}} alt="" /></td>
                                        <td>
                                            <button className="btn btn-success"
                                            data-bs-toggle="modal" data-bs-target={`#View${dets.id}`}
                                            >View</button>
                                            <button className="btn btn-info mx-2"
                                            onClick={()=>OpenModal(dets)}
                                            >Edit</button>
                                            
                                            <button className="btn btn-danger"
                                            onClick={()=>Delete(dets.id)}
                                            >Delete</button>
                                        </td>
                                        {/* View Modal Open */}
  <div className="modal fade" id={`View${dets.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="card" style={{width: '100%'}}>
          <img src={dets.Image} className="card-img-top" style={{height:'380px',objectFit:'cover',width:'100%'}} alt="..." />
          <div className="card-body">
            <h5 className="card-title bg-success text-white px-2 py-1 rounded " style={{width:'fit-content'}}>{dets.Tag}</h5>
            <h3 className="card-title">{dets.VegName}</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p>₹{dets.Price}</p>
            <a href="#" className="btn btn-primary">Order Now</a>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>
</div>

                                        {/* View Modal Close */}
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                </table>

            </div>
                {/* Edit Modal Open */}
                {
                    EditModal && (
                         <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

            <div className="card-header bg-success text-white text-center py-4 border-0">
              <h3 className="fw-bold mb-1 text-white">Edit Vegetable</h3>
              <p className="mb-0 small">Update your vegetable details</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={Update}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Tag</label>
                  {/* Input for vegetable tag */}
                  <input
                  onChange={GetHandle}
                  value={EditData.Tag}
                    type="text"
                    name="Tag"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter vegetable tag"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Vegetable Name</label>
                  {/* Input for vegetable name */}
                  <input
                  onChange={GetHandle}
                  value={EditData.VegName

                  }
                    type="text"
                    name="VegName"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter vegetable name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  {/* Input for vegetable description */}
                  <textarea
                  onChange={GetHandle}
                  value={EditData.Desc}
                    name="Desc"
                    className="form-control rounded-3"
                    rows="4"
                    placeholder="Enter vegetable description"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Price (₹)</label>
                  {/* Input for vegetable price */}
                  <input
                  onChange={GetHandle}
                  value={EditData.Price}
                    type="text"
                    name="Price"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter price"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Image URL</label>
                  {/* Input for vegetable image URL */}
                  <input
                  onChange={GetHandle}
                  value={EditData.Image}
                    type="url"
                    name="Image"
                    className="form-control form-control-lg rounded-3"
                    placeholder="https://example.com/vegetable.jpg"
                  />
                </div>

                <div className="d-flex gap-3">
                  {/* Button to update vegetable details */}
                  <button
                    type="submit"
                    className="btn btn-success btn-lg rounded-3 flex-fill fw-semibold"
                  >
                    Update Vegetable
                  </button>

                  {/* Button to reset all form fields */}
                  <button
                    onClick={()=>setEditModal(false)}
                    className="btn btn-outline-secondary rounded-3"
                  >
                    Close
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
                {/* Edit Modal close */}
        </div>
      
    </div>
  )
}

export default VegeManage
