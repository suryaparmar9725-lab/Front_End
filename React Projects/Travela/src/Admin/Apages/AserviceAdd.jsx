import React, { useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Icons, toast } from 'react-toastify'

const AserviceAdd = () => {

    const redirect = useNavigate();
    const [form,setform] = useState({
        id: '',
        title:'',
        desc:'',
        icon : ''
    })

    const getChange = (e) =>{
        setform({
            ...form,
            id:new Date().getTime().toString(),
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    const HandelSubmit  = async(e)=>{
        e.preventDefault();


        const {title,desc,icon} = form

        if(title == ''|| desc == '' || icon == ''){
          toast.error('field is Empty!')
          return false
        }

        try {
            const res = await axios.post('http://localhost:3000/Services',form)
            setform({
                   id: '',
        title:'',
        desc:'',
        icon : ''
            })

            redirect('/Aservices')
            
        } catch (error) {
                document.write('DATA NOT FOUND',error)
        }
    }

  return (
    <div>
        <Aheader/>
        <Ahero title='Add Service' name='services add'/>
      
          <div className="container-fluid  booking py-5">
    <div className="container  py-5">
    <div className="row g-5 align-items-center ">
    
      <div className="col-lg-6 mx-auto">
        <h1 className="text-white mb-3"> Add Services</h1>
       
        <form onSubmit={HandelSubmit}>
           <div className="row g-3">
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getChange} value={form.title} name='title'   className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="name">Services Title</label>
              </div>
            </div>
          
           
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getChange} value={form.desc} name='desc'  className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="desc">Description</label>
              </div>
            </div>
           
            
           
           
            <div className="col-12">
              <div className="form-floating">
                {/* <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{height: 100}} defaultValue={""} /> */}
                 <input type="url" onChange={getChange} value={form.icon} name='icon'  className="form-control bg-white border-0" id="name"  placeholder="Your Name" />
                <label htmlFor="image">Your Image URL</label>
                
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary text-white w-100 py-3" type="submit">Service Add</button>
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

export default AserviceAdd
