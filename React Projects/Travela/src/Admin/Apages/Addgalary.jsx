import React, { useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Addgalary = () => {

    const redirect = useNavigate();

    const [form,setform] = useState({
        id : '',
        name:'',
        lastUpdateDate:'',
        image : ''
    })

    const getChnage = (e) =>{
        setform({
            ...form,
            id : new Date().getTime().toString(),
            [e.target.name]  : e.target.value
        })
    }

    const HandelSubmit = async(e) =>{
        e.preventDefault();
        
        
                
        try {
            const res = await axios.post('http://localhost:3000/galary')
                setform({
                     id : '',
        name:'',
        lastUpdateDate:'',
        image : ''
                })
                redirect('/agalary')
                toast.success('Data Update Successfully')
        } catch (error) {
            toast.error("data not found")
        }
    }

  return (
    <div>
      <Aheader/>
      <Ahero title='Galary Manage' name='Galary'/>

              <div className="container-fluid  booking py-5">
    <div className="container  py-5">
    <div className="row g-5 align-items-center ">
    
      <div className="col-lg-6 mx-auto">
        <h1 className="text-white mb-3"> Add new Galary</h1>
       
        <form onSubmit={HandelSubmit}>
           <div className="row g-3">
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getChnage} value={form.name} name='name' required   className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="name">Title</label>
              </div>
            </div>
          
           
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="date" onChange={getChnage} value={form.lastUpdateDate} required name='lastUpdateDate'   className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="date"></label>
              </div>
            </div>
           
            
           
           
            <div className="col-12">
              <div className="form-floating">
                {/* <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{height: 100}} defaultValue={""} /> */}
                 <input type="url" onChange={getChnage} value={form.image} name='image' required  className="form-control bg-white border-0" id="name"  placeholder="Your Name" />
                <label htmlFor="image">Your Image URL</label>
                
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary text-white w-100 py-3" type="submit">Galary Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Addgalary
