import React, { useEffect, useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
import axios from 'axios'
import CustomHook from '../../Cusomehook/CustomHook'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminGalary = () => {
  const {api,FetchData} = CustomHook('http://localhost:3000/galary');

  useEffect(()=>{
      FetchData()

      
  },[])

  const DeleteData = async(id) =>{
    try {
      const res = await axios.delete(`http://localhost:3000/galary/${id}`)
      toast.success('Data Delete Successfully')
      FetchData()
    } catch (error) {
        toast.error('data not Found')
    }
  }

  return (
    <div>
      <Aheader/>
      <Ahero title='Admin galary Manage' name='AdminGalary'/>

      <div className="container">
        <div className="row mt-5">
<NavLink to={'/addgalary'}  className="btn btn-outline-success mt-5 mb-3">Add Galary</NavLink>
      <table className='table table-hover'>
          <thead>
            <tr className='text-center'>
              <th>ID</th>
              <th>Name</th>
              <th>LastUpdate</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>
         {
        api && api.map((dets)=>{
            return (

              <tr key={dets.id} className='text-center'>

                <td>{dets.id}</td>
                <td>{dets.name}</td>
                <td>{dets.lastUpdateDate}</td>
                <td><img src={dets.image} style={{width:'100px'}} alt="" /></td>
                <td>
                  <button className="btn btn-success"
                   data-bs-toggle="modal"
                        data-bs-target={`#galary${dets.id}`}
                  >View</button>
                  <button className="btn btn-primary mx-4">Edit</button>
                  <button className="btn btn-danger" onClick={()=>DeleteData(dets.id)}>Delete</button>
                   {/* Modal */}

                        <div
                          className="modal fade"
                          id={`galary${dets.id}`}
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
                <img className="img-fluid w-100 rounded-top" src={dets.image} alt="Image" />
                <div className="blog-icon">
                  <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                </div>
              </div>
              <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" /><h1>{dets.name}</h1></small>
                {/* <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a> */}
              </div>
            </div>
            <div className="blog-content border border-top-0 rounded-bottom p-4">
              <p className="mb-3">Last Update: {dets.lastUpdateDate} </p>
              <a href="#" className="h4">{dets.title}</a>
              <p className="my-3"></p>
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
    
     


        </div>
      </div>
    </div>
  )
}

export default AdminGalary
