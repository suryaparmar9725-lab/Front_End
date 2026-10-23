import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddSeller = () => {

const redirect = useNavigate()

// create form
const [AddItem,setAddItem] = useState({
    id : '',
    Name : '',
    Rating : '',
    Price : '',
    Image : ''
})

const GetHandle = (e) =>{
    setAddItem({
        ...AddItem,
        id : new Date().getTime().toString(),
        [e.target.name] : e.target.value
    })
}

const SubmitData = async(e) =>{
    e.preventDefault()
    
    const {Name,Rating,Price,Image} = AddItem;

    if(Name == '' || Rating == '' || Price == '' || Image == ''){
        toast.warning('Field is Required*')
        return false
    }

    try {
        const res = await axios.post(`http://localhost:3000/Bestseller`,AddItem)
        setAddItem({
            id : '',
    Name : '',
    Rating : '',
    Price : '',
    Image : ''
        })
        redirect('/SellerManage')
        toast.success('Items Added Successfully')
    } catch (error) {
        toast.error('Data Not Found')
    }
}



  return (
    <div>
        <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
              <h3 className="mb-1">Add Seller</h3>
              <p className="mb-0">Add your seller details below</p>
            </div>

            <div className="card-body p-4">
              <form onSubmit={SubmitData}>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                  onChange={GetHandle}
                  value={AddItem.Name}
                    type="text"
                    className="form-control form-control-lg"
                    id="Name"
                    name="Name"
                    placeholder="Enter seller name"
                  />
                </div>

                {/* Rating Field */}
                <div className="mb-3">
                  <label htmlFor="Rating" className="form-label fw-semibold">
                    Rating
                  </label>
                  <input
                  onChange={GetHandle}
                  value={AddItem.Rating}
                    type="number"
                    className="form-control form-control-lg"
                    id="Rating"
                    name="Rating"
                    placeholder="Enter rating"
                  />
                </div>

                {/* Price Field */}
                <div className="mb-3">
                  <label htmlFor="Price" className="form-label fw-semibold">
                    Price
                  </label>
                  <input
                  onChange={GetHandle}
                  value={AddItem.Price}
                    type="text"
                    className="form-control form-control-lg"
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
                  value={AddItem.Image}
                    type="url"
                    className="form-control form-control-lg"
                    id="Image"
                    name="Image"
                    placeholder="Enter image URL"
                  />
                </div>

                {/* Submit Button */}
               <div className='d-flex gap-3'>
                 <button type="submit" className="btn btn-primary text-white">
                  Add Seller
                </button>
                <NavLink to={'/SellerManage'}  className="btn btn-danger ">
                  Cancel
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

export default AddSeller
