import React, { useEffect, useState } from 'react'

import UseGet from '../CustomHook/UseGet'
import ManageHeader from './ManageHeader'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const CartManage = () => {
  const {Data,GetData} = UseGet(`http://localhost:3000/Cart`)
  useEffect(()=>{
    GetData()
  },[])

// Edit Modal & EditData 
const [editModal,seteditModal] = useState(false)
const [editData,seteditData] = useState({
  id : '',
  ProductName: '',
  Price : '',
  Image : ''
})

// open Modal
const OpenModal = (details) =>{
  seteditData(details)
  seteditModal(details)
}

// form handle 
const GetHandle = (e) =>{
  seteditData({
    ...editData,
    [e.target.name] : e.target.value
  })
}



// Update Data / Edit Data
const UpdateData = async (e) =>{
  e.preventDefault()

  try {
    const res = await axios.put(`http://localhost:3000/Cart/${editData.id}`,editData)
    GetData()
    seteditModal(false)
    toast.success('Data Updated Success')
  } catch (error) {
    toast.error("Data Can't Updated!")
  }
}

// Delete Data
const RemoveData = async(id)=>{
  try {
    const res = await axios.delete(`http://localhost:3000/Cart/${id}`)
    GetData()
    toast.success('Item Deleted Successully')
  } catch (error) {
   toast.error("Data Can't Delete!") 
  }
}
  return (
    <div>
<ManageHeader/>
          <div className="container">
            <div className="row">
              <NavLink to={'/AddCart'} className='btn btn-primary text-white my-3'>+Add Item</NavLink>
              <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>ProductName</th>
                      <th>Price </th>
                      <th>Image </th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Data && Data.map((dets)=>(
                        <tr key={dets.id}>
                          <td>{dets.id}</td>
                          <td>{dets.ProductName}</td>
                          <td>${dets.Price}</td>
                          <td><img src={dets.Image}
                          style={{width:'100px',height:'100px',objectFit:'cover',borderRadius:'10px'}}
                          alt="" /></td>
                          <td>
                            <button className="btn btn-success"
                                       data-bs-toggle="modal"
                          data-bs-target={`#view${dets.id}`}
                            >View</button>
                            <button className="btn btn-info mx-2"
                            onClick={()=>OpenModal(dets)}
                            >Edit</button>
                            <button className="btn btn-danger"
                            onClick={()=>RemoveData(dets.id)}
                            >Delete</button>
                       
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
                                  <h5 className="card-title">
                                    {dets.ProductName}
                                  </h5>
                                  <h5 className="card-title">Price : {dets.Price}</h5>
                                  <p className="card-text"></p>
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
              <h3 className="fw-bold mb-1">Edit Product</h3>
              <p className="mb-0 small">Update your product details</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={UpdateData}>
                {/* Product Name Field */}
                <div className="mb-4">
                  <label htmlFor="ProductName" className="form-label fw-semibold">
                    Product Name
                  </label>
                  <input
                  onChange={GetHandle}
                  value={editData.ProductName}
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="ProductName"
                    name="ProductName"
                    placeholder="Enter product name"
                  />
                </div>

                {/* Price Field */}
                <div className="mb-4">
                  <label htmlFor="Price" className="form-label fw-semibold">
                    Price (₹)
                  </label>
                  <input
                   onChange={GetHandle}
                  value={editData.Price}
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="Price"
                    name="Price"
                    placeholder="Enter product price"
                  />
                </div>

                {/* Image URL Field */}
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
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                {/* Update Button */}
                <button type="submit" className="btn text-white btn-primary  rounded-3 fw-semibold">
                  Update Product
                </button>
                <button onClick={()=>seteditModal(false)} className="btn btn-danger mx-3">Close</button>
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

export default CartManage
