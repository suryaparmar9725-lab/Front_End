import React, { useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
// import FormHandle from '../../Cusomehook/FormHandle'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AtourAdd = () => {
const redirect = useNavigate()
const [form,setform] = useState({
    id : '',
    title : '',
    category:'',
    image: ''
})

const getChange = (e) =>{
    setform({
        ...form,
        id: new Date().getTime().toString(),
        [e.target.name] : e.target.value
    })
    console.log(form)
}

const HandleSubmt = async (e) =>{
    e.preventDefault();

    try{
        const res = await axios.post('http://localhost:3000/Tour',form)
        setform({
            id : '',
            title : '',
            category:'',
            image: ''
    })

        redirect('/ATour')


    }catch(err){
        document.write('DATA NOT FOUND',err)
    }
}
  return (
    <div>
        
        <Aheader/>
        <Ahero title='Tour Add' name='touradd'/>


            
      <div className="container-fluid  booking py-5">
    <div className="container  py-5">
    <div className="row g-5 align-items-center ">
    
      <div className="col-lg-6 mx-auto">
        <h1 className="text-white mb-3">Book A Tour Deals</h1>
        <p className="text-white mb-4">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
        <form onSubmit={HandleSubmt}>
          <div className="row g-3">
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getChange} value={form.title} name='title' __ className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
           
            
            <div className="col-md-12">
              <div className="form-floating">
                <select required onChange={getChange} value={form.category} name='category' className="form-select bg-white border-0" id="select1">
                  <option value="national">national</option>
                  <option value="international">international</option>
                  
                </select>
                <label htmlFor="select1">Category</label>
              </div>
            </div>
           
           
            <div className="col-12">
              <div className="form-floating">
                {/* <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{height: 100}} defaultValue={""} /> */}
                 <input type="url" onChange={getChange} value={form.image} name='image' className="form-control bg-white border-0" id="name" required placeholder="Your Name" />
                <label htmlFor="img">Your Image URL</label>
                
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary text-white w-100 py-3" type="submit">Tour Add</button>
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

export default AtourAdd
