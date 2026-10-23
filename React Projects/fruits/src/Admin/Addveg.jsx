import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Addveg = () => {

const rdrct = useNavigate()

// create add form
const [addform,setaddform] = useState({
    id : '',
    Tag:'',
    VegName:'',
    Desc :'',
    Price : '',
    Image : ''
})

// handle form
const GetHandle = (e) =>{
    setaddform({
        ...addform,
        id : new Date().getTime().toString(),
        [e.target.name] : e.target.value
    })
}

// Post Data / Submit Data
const PostData = async(e) =>{
    e.preventDefault()
    
    const {Tag,VegName,Desc,Price,Image} = addform

    if(Tag == '' || VegName == '' || Desc == '' || Price == '' || Image == ''){
        toast.warning('Field is Empty')
        return false
    }

    try {
        const res = await axios.post(`http://localhost:3000/Vegetables`,addform)
        setaddform({
             id : '',
    Tag:'',
    VegName:'',
    Desc :'',
    Price : '',
    Image : ''
        })
        rdrct('/VegManage')
        toast.success('Vegetbale Added Successfully ')
    } catch (error) {
        toast.error('Data Not Found')
    }
}


  return (
    <div>
         <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-success text-white text-center py-4 rounded-top-4">
              <h3 className="mb-1 fw-bold text-white">Add Vegetable</h3>
              <p className="mb-0">Add fresh vegetable details</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={PostData}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Tag</label>
                  <input
                  onChange={GetHandle}
                  value={addform.Tag}
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    name="Tag"
                    placeholder="Enter vegetable tag"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Vegetable Name</label>
                  <input
                  onChange={GetHandle}
                  value={addform.VegName}
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    name="VegName"
                    placeholder="Enter vegetable name"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                  onChange={GetHandle}
                  value={addform.Desc}
                    className="form-control rounded-3"
                    name="Desc"
                    rows="3"
                    placeholder="Enter vegetable description"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Price (₹)</label>
                  <input
                  onChange={GetHandle}
                  value={addform.Price}
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    name="Price"
                    placeholder="Enter price"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Image URL</label>
                  <input
                  onChange={GetHandle}
                  value={addform.Image}
                    type="url"
                    className="form-control form-control-lg rounded-3"
                    name="Image"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

               <div className='d-flex'>
                 <button type="submit" className="btn btn-success btn-lg  rounded-3 fw-semibold">
                  Add Vegetable
                </button>
                <NavLink to={'/VegManage'} className="btn btn-danger mx-3">Cancel</NavLink>
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

export default Addveg
