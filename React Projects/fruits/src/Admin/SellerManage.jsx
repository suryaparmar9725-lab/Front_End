import React, { useEffect, useState } from 'react'
import ManageHeader from './ManageHeader'
import UseGet from '../CustomHook/UseGet'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const SellerManage = () => {

  const {Data,GetData}=  UseGet(`http://localhost:3000/Bestseller`)

  useEffect(()=>{
    GetData()
  },[])

// Edit MOdal & editData
const [editModal,seteditModal] = useState(false)
const [editData,seteditData] = useState({
  id : '',
  Name : '',
  Rating : '',
  Price : '',
  Image : ''
})

// OPen Modal
const OpenModal = (details) =>{
  seteditData(details)
  seteditModal(details)
}

const GetHandle = (e) =>{
  seteditData({
    ...editData,
    [e.target.name] : e.target.value
  })
}


// Update Data / edit data
const  Update = async(e) =>{
  e.preventDefault()

  try {
    const res = await axios.put(`http://localhost:3000/Bestseller/${editData.id}`,editData)
    GetData()
    seteditModal(false)
    toast.success('Item Update Successfully')
  } catch (error) {
    toast.error('Data Not found')
  }

}

// Delete Data 
const Delete = async(id)=>{
  try {
    const res = await axios.delete(`http://localhost:3000/Bestseller/${id}`)
    GetData()
    toast.success('Item Delete Successfully')
  } catch (error) {
    toast.error(`Items can't Delete!`)
  }
}

  return (
    <div>

      <ManageHeader/>
      <div className="container my-5">
        <NavLink className='btn btn-warning ' to={'/AddSeller'}> + Add Items</NavLink>
        <div className="row">
            <table className="table-hover table">
                   <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Rating</th>
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
                          <td>{dets.Name}</td>
                          <td>✨{dets.Rating}</td>
                          <td>${dets.Price}</td>
                          <td><img src={dets.Image} style={{width:'100px',
                            height:'100px',objectFit:'cover',
                            borderRadius:'10px'
                          }} alt="" /></td>
                          <td>
                            <button className="btn btn-success"
                            data-bs-toggle="modal"
                          data-bs-target={`#view${dets.id}`}
                            >View</button>
                            <button className="btn btn-info mx-2 text-white"
                            onClick={()=>OpenModal(dets)}
                            >Edit</button>
                            <button className="btn btn-danger"
                            onClick={()=>Delete(dets.id)}
                            >Remove</button>
                          </td>

                          {/* View Modal Open */}
 <div className="modal fade" id={`view${dets.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="card" style={{ width: "100%" }}>
                                <img
                                  src={dets.Image}
                                  className="card-img-top "
                                  alt="..."
                                  style={{width:'100%',height:'450px',objectFit:'cover',objectPosition:'center'}}
                                />
                                <div className="card-body">
                                  <h5 className="card-title">✨{dets.Rating}</h5>
                                  <h5 className="card-title">
                                    {dets.Name}
                                  </h5>
                                  <p className="card-text">{dets.Price}</p>
                                  <a href="#" className="btn btn-primary">
                                    Order
                                  </a>
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

{/* Edit Modal Open */}
{
  editModal && (
     <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
              <h3 className="mb-1 fw-bold">Edit Seller</h3>
              <p className="mb-0 small">Update seller details</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={Update}>
                {/* Name Field */}
                <div className="mb-4">
                  <label htmlFor="Name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                  onChange={GetHandle}
                  value={editData.Name}
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="Name"
                    name="Name"
                    placeholder="Enter seller name"
                  />
                </div>

                {/* Rating Field */}
                <div className="mb-4">
                  <label htmlFor="Rating" className="form-label fw-semibold">
                    Rating
                  </label>
                  <input
                     onChange={GetHandle}
                  value={editData.Rating}
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="Rating"
                    name="Rating"
                    placeholder="Enter seller rating"
                  />
                </div>

                {/* Price Field */}
                <div className="mb-4">
                  <label htmlFor="Price" className="form-label fw-semibold">
                    Price
                  </label>
                  <input
                     onChange={GetHandle}
                  value={editData.Price}
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="Price"
                    name="Price"
                    placeholder="Enter price"
                  />
                </div>

                {/* Image Field */}
                <div className="mb-4">
                  <label htmlFor="Image" className="form-label fw-semibold">
                    Image URL
                  </label>
                  <input
                     onChange={GetHandle}
                  value={editData.Image}
                    type="url"
                    className="form-control form-control-lg rounded-3"
                    id="Image"
                    name="Image"
                    placeholder="Enter image URL"
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex gap-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg text-white rounded-3 flex-fill fw-semibold"
                  >
                    Update Seller
                  </button>
                  <button
                    onClick={()=>seteditModal(false)}
                    className="btn btn-outline-danger btn-lg rounded-3 flex-fill"
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

export default SellerManage
