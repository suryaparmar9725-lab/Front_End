import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddFruit = () => {

    const redirect = useNavigate()

    const [addfruit,setaddfruit] = useState({
        id : '',
        Tag : '',
        FruitName : '',
        Desc : '' ,
         Price : '',
          Image : ''
    })

    // handle form
    const GetHandle = (e) =>{
        setaddfruit({
            ...addfruit,
            id : new Date().getTime().toString(),
            [e.target.name] : e.target.value
        })
    }


    const Submit = async(e)=>{
        e.preventDefault()
        
        const {Tag,FruitName,Desc,Price,Image} = addfruit

        if(Tag == '' || FruitName == '' || Desc == '' || Price == '' || Image == ''){
            toast.warning('Field is Empty')
            return false
        }
         
        try {
            const res = await axios.post(`http://localhost:3000/Fruits`,addfruit)
            setaddfruit({
                id : '',
        Tag : '',
        FruitName : '',
        Desc : '' ,
         Price : '',
          Image : ''
            })
            redirect('/FruitManage')
            toast.success('Item Add Successfully')
        } catch (error) {
            toast.error('Data Not Found')
        }


    }

  return (
    <div>

     <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div
              className="card-header text-white text-center py-4 border-0"
              style={{ backgroundColor: "#81c408" }}
            >
              <h2 className="fw-bold mb-1 text-white">Add New Fruit</h2>
              <p className="mb-0">Add your fresh fruit details</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={Submit}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Tag</label>
                  <input
                  onChange={GetHandle}
                  value={addfruit.Tag}
                    type="text"
                    name="Tag"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter fruit tag"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Fruit Name</label>
                  <input
                  onChange={GetHandle}
                  value={addfruit.FruitName}
                    type="text"
                    name="FruitName"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter fruit name"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    onChange={GetHandle}
                  value={addfruit.Desc}
                    name="Desc"
                    rows="4"
                    className="form-control rounded-3"
                    placeholder="Enter fruit description"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Price (₹)</label>
                  <input
                    onChange={GetHandle}
                  value={addfruit.Price}
                    type="text"
                    name="Price"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter fruit price"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Image URL</label>
                  <input
                    onChange={GetHandle}
                  value={addfruit.Image}
                    type="url"
                    name="Image"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter image URL"
                  />
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  <button
                    type="submit"
                    className="btn btn-lg text-white fw-semibold rounded-pill px-4"
                    style={{ backgroundColor: "#81c408" }}
                  >
                    Add Fruit
                  </button>

                  <NavLink
                    to={'/FruitManage'}
                    className="btn btn-outline-secondary btn-lg rounded-pill px-4"
                  >
                    Back
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

export default AddFruit
