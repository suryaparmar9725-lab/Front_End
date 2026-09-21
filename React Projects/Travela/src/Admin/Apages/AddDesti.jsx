import React, { useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
import { useNavigate } from 'react-router-dom'
import FormHandle from '../../Cusomehook/FormHandle'
import axios from 'axios'

const AddDesti = () => {
    const redirect = useNavigate()

    const [form,setform] = useState({
      id : '',
      title:'',
      image : ''
    })
   
    const GetChange = (e) =>{
        setform({
          ...form,
          id : new Date().getTime().toString(),
          [e.target.name] : e.target.value
        })
    }

    const HandleSubmit = async(e) =>{
        e.preventDefault();

        try {
          const res = await axios.post('http://localhost:3000/Destination',form)
          setform({
            id : '',
            title:'',
            image : ''
          })
          
          redirect('/adesti')
        } catch (error) {
            document.write('DATA NOT FOUND',error)
        }
    }


  return (
    <div>
        <Aheader/>
        <Ahero title='Add Destination' name='Destination Add'/>

       <div className="container-fluid  booking py-5">
    <div className="container  py-5">
    <div className="row g-5 align-items-center ">
    
      <div className="col-lg-6 mx-auto">
        <h1 className="text-white mb-3">Add New Destination</h1>
        
        <form onSubmit={HandleSubmit}>
          <div className="row g-3">
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={GetChange} value={form.title} name='title'  required className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="name">Title</label>
              </div>
            </div>
           
           
           
           
            <div className="col-12">
              <div className="form-floating">
                {/* <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{height: 100}} defaultValue={""} /> */}
                 <input type="url" onChange={GetChange} value={form.image} name='image'   className="form-control bg-white border-0" id="name" required placeholder="Your Name" />
                <label htmlFor="img">Your Image URL</label>
                
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Destination</button>
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

export default AddDesti
