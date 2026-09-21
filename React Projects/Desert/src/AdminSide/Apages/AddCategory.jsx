import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import ManagandAddNavbar from '../Acommon/ManagandAddNavbar';




const AddCategory = () => {

    const redirect = useNavigate();

      

    // create form
    const [form,setform] = useState({
          id : '',
          title: '',
          Item: '',
          img : ''
    })

    // form handel
    const getChange = (e) =>{
        setform({
          ...form,
          id : new Date().getTime().toString(),
          [e.target.name] : e.target.value
        })
    }

    // Submit form
    const Submit  = async(e) =>{
        e.preventDefault();
      const {title , Item , img} = form;

      if(title == '' || Item == '' || img == ''){
        toast.error('Feild is Empty')
        return false
      }

      try {
        const res = await axios.post('http://localhost:3000/Category',form)
        setform({
          id : '',
          title:'',
          Item:'',
          img : ''
        })
        redirect('/catmanage')
        toast.success('Category Added Successfully')
        
      } catch (error) {
          toast.error('DATA NOT FOUND')
      }

    }

  return (
    <div>
      <ManagandAddNavbar/>
      <div className="container mb-5">
    <div className="text-center mb-5" data-aos="fade-up">
      
      <h2 className="stitle">Add <span>Category</span></h2>
      <div className="sline" />
    </div>

    

    {/* form open */}

<div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-lg-7">
      <div className="card border-0 shadow-lg rounded-4">
        <div className="card-header text-center bg-danger text-white py-4 rounded-top-4">
          <h2 className="fw-bold mb-1 text-white">
            🍰 Add Dessert Category
          </h2>
          <p className="mb-0">
            Create a new dessert category for your menu.
          </p>
        </div>
        <div className="card-body p-4">
          <form onSubmit={Submit}>
            {/* Category Name */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Category Name
              </label>
              <input type="text" onChange={getChange} value={form.title} name='title' className="form-control form-control-lg" placeholder="e.g. Cakes, Ice Cream, Donuts" />
            </div>
            {/* Available Items */}
            <div className="mb-4">
              <label className="form-label  fw-semibold">
                Available Desserts
              </label>
              <input type="number"  onChange={getChange} value={form.Item} name='Item' className="form-control form-control-lg" placeholder="Enter number of desserts" />
            </div>
            {/* Category Image */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Category Image URL
              </label>
              <input type="text"  onChange={getChange} value={form.img} name='img' className="form-control form-control-lg" placeholder="Paste category image URL" />
            </div>
            {/* Description */}
            
            <div className="d-flex justify-content-end gap-3">
              
              <button type="submit" className="btn btn-danger px-4">
                🍩 Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>




    {/* form close */}


             


    </div>
    </div>
  )
}

export default AddCategory
