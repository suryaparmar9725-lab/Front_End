import React, { useEffect, useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
import axios from 'axios'
import CustomHook from '../../Cusomehook/CustomHook'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const Aservices = () => {

  const {api,FetchData} = CustomHook('http://localhost:3000/Services')

  const [editmodel , setmodel] = useState(null)
  const [edit,setEdit] = useState({
    id :'',
    title: '',
    desc : '',
    icon : ''
  })

  useEffect(()=>{
      FetchData()
  },[])

  if(api.title){
    toast.error('pleas Field Data')
    return false
  }
// DeleteData
  const DeleteData = async(id) =>{
      try {
        const res = await axios.delete(`http://localhost:3000/Services/${id}`)
        toast.success('Data Delete Successfully')
        FetchData()
      } catch (error) {
          toast.error('DATA NOT FOUND')
      }
  }

  const OpnModal = (data) =>{
    setmodel(data)
    setEdit(data)
    console.log(data);
    
  }

  const getchnagedata = (e) =>{
    setEdit({
      ...edit,
      [e.target.name] : e.target.value
    })
  }

  // updateTour

const UpdateTour = async(e)=>{
  e.preventDefault();

  if(edit.title === ""|| edit.desc === "" || edit.icon === ""){
    toast.error('please Field Data!')
    return false
  }

  try {
    const res = await axios.put(`http://localhost:3000/Services/${edit.id}`,edit)
    toast.success('Data Update Successfully')
    setmodel(null)
    FetchData()
  } catch (error) {
      toast.error('DATA NOT FOUND!')
  }

}

  return (
    <div>
        <Aheader/>
        <Ahero title='Manage Services' name='Services'/>
   

<div className="container">
    <div className="row mt-5">
<NavLink to={'/Aserviceadd'} className="btn btn-success mt-5 mb-3">Add Services</NavLink>
   <table className='table table-hover'>
 <thead>
      <tr className='text-center bg-primary text-white'>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Icon</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
      api && api.map((dets)=>{
          return(
            <tr key={dets.id} className='text-center'>
              <td>{dets.id}</td>
              <td>{dets.title}</td>
              <td >{dets.desc}</td>
              <td><img src={dets.icon} style={{width:'100px',height:'150px',objectFit:'cover'}} alt='Image Not Found!' /></td>
              <td>
                <button className="btn btn-success"
                data-bs-toggle="modal"
                        data-bs-target={`#services${dets.id}`}
                >View</button>
                <button className="btn btn-primary mx-2" onClick={()=>OpnModal(dets)}>Edit</button>
                <button className="btn btn-danger" onClick={()=>DeleteData(dets.id)}>Delete</button>


             {/* Modal */}

                        <div
                          className="modal fade"
                          id={`services${dets.id}`}
                          tabIndex={-1}
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                              </div>
                              <div className="modal-body">
                                <div className="row g-4 justify-content-center">
        <div className="">
          <div className="blog-item">
            <div className="blog-img">
              <div className="blog-img-inner">
                <img className="img-fluid w-100 rounded-top" src={dets.icon} style={{height:'350px',objectFit:'cover'}} alt="Image" />
                <div className="blog-icon">
                  <a href="#" className="my-auto"></a>
                </div>
              </div>
              <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                
                {/* <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a> */}
              </div>
            </div>
            <div className="blog-content border border-top-0 rounded-bottom p-4">
              
              <a href="#" className="h4">{dets.title}</a>
              <p className="my-3">{dets.desc}</p>
              <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
            </div>
          </div>
        </div>
        </div>
                              </div>
                              <div className="modal-footer">
                                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button> */}
                              </div>
                            </div>
                          </div>
                        </div>

              </td>
            </tr>
          )
      })
     }
    </tbody>
   </table>

   {/* Update Data open*/}
    {
      editmodel && (
               <div className="container-fluid  booking py-5">
    <div className="container  py-5">
    <div className="row g-5 align-items-center ">
    
      <div className="col-lg-6 mx-auto">
        <h1 className="text-white mb-3"> Update Data</h1>
       
        <form>
           <div className="row g-3">
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text"  onChange={getchnagedata} value={edit.title} name='title'   required className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="name">Services Title</label>
              </div>
            </div>
          
           
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getchnagedata} value={edit.desc} name='desc'  required className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="desc">Description</label>
              </div>
            </div>
           
            
           
           
            <div className="col-12">
              <div className="form-floating">
                {/* <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{height: 100}} defaultValue={""} /> */}
                 <input type="url" onChange={getchnagedata} value={edit.icon} name='icon'   className="form-control bg-white border-0" id="name" required placeholder="Your Name" />
                <label htmlFor="image">Your Image URL</label>
                
              </div>
            </div>
            <div className="col-6">

              <button onClick={UpdateTour} className="btn btn-primary text-white w-100 py-3" type="submit">Update Data </button>
            </div>
            <div className="col-6">

              <button onClick={()=>setmodel(null)} className="btn btn-primary text-white w-100 py-3" type="submit">Cancel Data </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
      )
    }
   {/* Update Data close*/}

    </div>
</div>

    </div>
  )
}

export default Aservices
