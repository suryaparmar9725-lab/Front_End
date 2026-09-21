import React, { useEffect, useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
import axios from 'axios'
import CustomHook from '../../Cusomehook/CustomHook'
import { NavLink } from 'react-router-dom'

const Adesination = () => {
    const {api,FetchData} = CustomHook('http://localhost:3000/Destination')

    useEffect(()=>{
        FetchData()

        

    },[])

    return (
    <div>
        <Aheader/>
        <Ahero title='Destination Manage' name='Destination'/>

{/* container open */}
        <div className="container">
    <div className="row mt-5">
      <NavLink to={'/Adddesti'} className="btn btn-outline-success  mb-5">Add Destination</NavLink>

        {
          

                    <table className='table table-hover'>
                       <thead>
                        <tr className='bg-dark text-white text-center' >
                             
                            <th>ID</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Action</th>
                       
                        </tr>
                       </thead>
                       <tbody >
                        {
                            api && api.map((dets,idx)=>{
                               return(

                                <tr key={dets.id} className='text-center'>
                                    <td>{dets.id}</td>
                                    <td>{dets.title}</td>
                                    <td><img src={dets.image} style={{width:'100px'}} alt="" /></td>
                                    <td>
                                        <button className="btn btn-success" data-bs-toggle='modal' data-bs-target={`#desti${dets.id}`}>view</button>
                                        <button className="btn btn-primary mx-3">Edit</button>
                                        <button className="btn btn-danger">Delete</button>

                                       <div>
  {/* Button trigger modal */}

  {/* Modal */}
  <div className="modal fade" id={`desti${dets.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{dets.title}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <img src={dets.image} style={{height:'300px',borderRadius:'10px'}} alt="" />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-outline-secondary " data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-outline-primary">Save changes</button>
        </div>
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
           
        }



    </div>
        </div>
        
{/* container close */}
      
    </div>
  )
}

export default Adesination

