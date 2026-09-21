import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const AddChef = () => {

    const redirect = useNavigate();

    // create Form
    const [form,setform] = useState({
        id : '',
        name: '',
        rol : '',
        image : '',
        exp : ''  
    })
    // form handle
    const getChange = (e) =>{
        setform({
            ...form,
            id : new Date().getTime().toString(),
            [e.target.name] : e.target.value  
        })
    }

    const Submit  = async(e)=>{
        e.preventDefault();
        
        const {name,exp,rol,image} = form;

        if(name == '' || exp == '' || rol == '' || image == ''){
 toast.error('Field is Empty!')
  return false
        }

        try {
            const res = await axios.post(`http://localhost:3000/chef`,form)
            
            setform({
                id : '',
        name: '',
        rol : '',
        image : '',
        exp : ''  
            })
            toast.success('Chef Add Successfully')
            redirect('/chef')
        } 
        catch (error){
            toast.error('DATA NOT FOUND')
        }

    }

  return (
    <div>
  <div className="container mt-4">
  <div className="card shadow border-0 rounded-4">
    <div className="card-header bg-primary text-white text-center">
      <h4 className="mb-0 text-white">Add Chef</h4>
    </div>
    <div className="card-body">
      <form onSubmit={Submit}>
          {/* Name */}
        <div className="mb-3">
          <label className="form-label fw-bold">Chef Name</label>
          <input onChange={getChange} value={form.name} name='name' type="text" className="form-control" placeholder="Enter Chef Name" />
        </div>
        {/* Role */}
        <div className="mb-3">
          <label className="form-label fw-bold">Chef Role</label>
          <select onChange={getChange} value={form.rol} name='rol' className="form-select">
            <option selected>Select Role</option>
            <option>Head Chef</option>
            <option>Grill Master</option>
            <option>Pastry Chef</option>
            <option>Sous Chef</option>
            <option>Executive Chef</option>
          </select>
        </div>
      
        {/* Experience */}
        <div className="mb-3">
          <label className="form-label fw-bold">Experience</label>
          <input onChange={getChange} value={form.exp} name='exp' type="text" className="form-control" placeholder="e.g. 10 Years Experience" />
        </div>
        {/* Image */}
        <div className="mb-4">
          <label className="form-label fw-bold">Chef Image</label>
          <input type="url" onChange={getChange} value={form.image} name='image' placeholder='Enter Image URL...' className="form-control" />
        </div>
        {/* Buttons */}
        <div className="text-end">
         
          <button type="submit" className="btn btn-primary">
            Add Chef
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default AddChef
