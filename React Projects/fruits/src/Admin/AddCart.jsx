import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddCart = () => {

const rdrct = useNavigate()

// create form
const [addcart,setaddcart] = useState({
    id : '',
    ProductName:'',
    Price : '',
    Image : ''

})

// form handle
const GetHandle = (e) =>{
    setaddcart({
        ...addcart,
        id : new Date().getTime().toString(),
        [e.target.name] : e.target.value
    })
}

// Send Data / Post Data
const PostData = async(e)=>{
    e.preventDefault()
   
    const {ProductName , Price,Image} = addcart;

    if(Price == '' || ProductName == '' || Image == ''){
        toast.warning('Field is Empty')
        return false
    }

    try {
        const res = await axios.post(`http://localhost:3000/Cart`,addcart)
        setaddcart({
             id : '',
    ProductName:'',
    Price : '',
    Image : ''
        })
        rdrct('/CartManage')
        toast.success('Item Added Successfull✅')
    } catch (error) {
        toast.error("Data Not Found")
    }
}

  return (
    <div>

         <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="card-header bg-primary text-white text-center py-4 border-0">
              <h3 className="fw-bold mb-1">Add To Cart</h3>
              <p className="mb-0 small">Add your product details</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={PostData}>
                {/* Product Name Field */}
                <div className="mb-4">
                  <label htmlFor="ProductName" className="form-label text-white fw-semibold">
                    Product Name
                  </label>
                  <input
                  onChange={GetHandle}
                  value={addcart.ProductName}
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="ProductName"
                    name="ProductName"
                    placeholder="Enter Item name"
                  />
                </div>

                {/* Price Field */}
                <div className="mb-4">
                  <label htmlFor="Price" className="form-label fw-semibold">
                    Price (₹)
                  </label>
                  <input
                  onChange={GetHandle}
                  value={addcart.Price}
                    type="number"
                    className="form-control form-control-lg rounded-3"
                    id="Price"
                    name="Price"
                    placeholder="Enter product price"
                  />
                </div>

                {/* Image URL Field */}
                <div className="mb-4">
                  <label htmlFor="Image" className="form-label fw-semibold">
                    Product Image URL
                  </label>
                  <input
                  onChange={GetHandle}
                  value={addcart.Image}
                    type="url"
                    className="form-control form-control-lg rounded-3"
                    id="Image"
                    name="Image"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                {/* Submit Button */}
               <div className='d-flex'>
                 <button
                  type="submit"
                  className="btn btn-primary text-white  rounded-3 fw-semibold"
                >
                  <i className="bi bi-cart-plus me-2"></i>
                  Add To Cart
                </button>
                <NavLink to={'/CartManage'} className="btn btn-danger mx-3">Cancel</NavLink>
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

export default AddCart
