import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import ManagandAddNavbar from '../Acommon/ManagandAddNavbar';

const AddMenu = () => {

    const redirect = useNavigate();

    // create form
    const [form ,setform] = useState({
        id : '',
        tag:'',
        category:'',
        title:'',
        desc:'',
        price : '',
        image : ''  
          
    })

    // Form Handel 
    const GetChnage = (e) =>{

        setform({
            ...form,
            id : new Date().getTime().toString(),
            [e.target.name] : e.target.value
        })

    }

    // form submit
    const Submit = async(e) =>{
        e.preventDefault()
        
        const {tag,category,title,desc,price,image} = form;

        if(tag == '' || category == '' || title == '' || desc == '' || price == '' || image == ''){
          toast.error('Field is Empty!')
          return false
        }

        try {
          const res = await axios.post(`http://localhost:3000/Menu`,form)
          setform({
             id : '',
        tag:'',
        category:'',
        title:'',
        desc:'',
        price : '',
        image : ''  
          })
          toast.success('Menu Add Successfully✅')
          redirect('/menumanage')
        } catch (error) {
            toast.error('DATA NOT FOUND!')
        }

    }

  return (
    <div>
      <ManagandAddNavbar/>
      
    <div className="container mb-5">
    <div className="text-center mb-5" data-aos="fade-up">
      
      <h2 className="stitle">Add <span>Menu</span></h2>
      Add Your New  Menu
      <div className="sline" />
    </div>
    <div className="container my-5">
  <div className="card shadow border-0">
    <div className="card-header bg-dark text-white">
      <h3 className="mb-0 text-white">Add Menu Item</h3>
    </div>

    <div className="card-body">
      <form onSubmit={Submit}>

        <div className="row">

          {/* Tag */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Tag</label>
            <select onChange={GetChnage} value={form.tag} name='tag' className="form-select">
              <option value="">Select Tag</option>
              <option>Hot</option>
              <option>New</option>
              <option>Best Seller</option>
            </select>
          </div>

          {/* Category */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Category</label>
            <select onChange={GetChnage} value={form.category} name='category' className="form-select">
              <option value="">Select Category</option>
              <option>Burger</option>
              <option>Pizza</option>
              <option>French Fries</option>
              <option>Wraps</option>
              <option>Desserts</option>
              <option>Chicken</option>
              <option>Pasta</option>
            </select>
          </div>

          {/* Title */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Title</label>
            <input
            onChange={GetChnage} value={form.title} name='title'
              type="text"
              className="form-control"
              placeholder="Enter Menu Title"
            />
          </div>

          {/* Price */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Price</label>
            <input
            onChange={GetChnage} value={form.price} name='price'
              type="text"
              className="form-control"
              placeholder="$14.99"
            />
          </div>

          {/* Description */}
          <div className="col-12 mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
            onChange={GetChnage} value={form.desc} name='desc'
              rows="4"
              className="form-control"
              placeholder="Enter Description"
            ></textarea>
          </div>

          {/* Image */}
          <div className="col-12 mb-3">
            <label className="form-label fw-bold">Image</label>
            <input
            onChange={GetChnage} value={form.image} name='image'
              type="url"
              className="form-control"
              placeholder='Enter Image URL'
            />
          </div>

        </div>

        <button className="btn btn-success px-5">
          Add Menu
        </button>

      </form>
    </div>
  </div>
</div>

    </div>

    </div>
  )
}

export default AddMenu
