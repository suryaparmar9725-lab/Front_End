import React, { useEffect, useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
import axios from 'axios'
import { toast } from 'react-toastify'

const ATour = () => {

  const [tour ,settour] = useState([])
  

  const getdata = async(category) =>{
      try{
        const res  = await axios.get(`http://localhost:3000/Tour?${category}`)
        settour(res.data)
      }catch(err){
        document.write('DATA NOT FOUND',err)
      }
  }

  useEffect(()=>{
    getdata('category=national')
  
  },[])

  // Delete Data 
  const DeleteTourData = async(id) =>{
    try {
      const res = await axios.delete(`http://localhost:3000/Tour/${id}`)
      toast.success('Tour Delete Successfull')
      
      
    } catch (error) {
        toast.error('DATA NOT FOUND')
    }
  }
  

  return (
    <div>

<Aheader/>
<Ahero title='Tour Manage' name='tour'/>


      <div className="container-fluid ExploreTour pt-5">
  <div className="container ">
    <button className="btn btn-success">Add Tour</button>
    <div className="mx-auto text-center mb-5" style={{maxWidth: 900}}>
      <h5 className="section-title px-3">Explore Tour</h5>
      <h1 className="mb-4">The World</h1>
      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.

      </p>
    </div>
    <div className="tab-class text-center">
      <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
        <li className="nav-item">
          <a onClick={()=>getdata("category=national")} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#NationalTab-1">
           <span className="text-dark" style={{width: 250}}>National Tour Category</span>           </a>
        </li>
        <li className="nav-item">
          <a onClick={()=>getdata("category=international")} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#InternationalTab-2">
            <span className="text-dark" style={{width: 250}}>International tour Category</span>
          </a>
        </li>
      </ul>
      {/* <div className="tab-content">
        <div id="NationalTab-1" className="tab-pane fade show p-0 active">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="national-item">
                <img src="img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                <div className="national-content">
                  <div className="national-info">
                    <h5 className="text-white text-uppercase mb-2">Weekend Tour</h5>
                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
                <div className="national-plus-icon">
                  <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="national-item">
                <img src="img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                <div className="national-content">
                  <div className="national-info">
                    <h5 className="text-white text-uppercase mb-2">Holiday Tour</h5>
                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
                <div className="national-plus-icon">
                  <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="national-item">
                <img src="img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                <div className="national-content">
                  <div className="national-info">
                    <h5 className="text-white text-uppercase mb-2">Road Trip</h5>
                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
                <div className="tour-offer bg-info">15% Off</div>
                <div className="national-plus-icon">
                  <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="national-item">
                <img src="img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                <div className="national-content">
                  <div className="national-info">
                    <h5 className="text-white text-uppercase mb-2">Historical Trip</h5>
                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
                <div className="national-plus-icon">
                  <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="national-item">
                <img src="img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Image" />
                <div className="national-content">
                  <div className="national-info">
                    <h5 className="text-white text-uppercase mb-2">Family Tour</h5>
                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
                <div className="tour-offer bg-warning">50% Off</div>
                <div className="national-plus-icon">
                  <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="national-item">
                <img src="img/explore-tour-6.jpg" className="img-fluid w-100 rounded" alt="Image" />
                <div className="national-content">
                  <div className="national-info">
                    <h5 className="text-white text-uppercase mb-2">Beach Tour</h5>
                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
                <div className="national-plus-icon">
                  <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="InternationalTab-2" className="tab-pane fade show p-0">
          <div className="InternationalTour-carousel owl-carousel">
            <div className="international-item">
              <img src="img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
              <div className="international-content">
                <div className="international-info">
                  <h5 className="text-white text-uppercase mb-2">Australia</h5>
                  <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 8 Cities</a>
                  <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>143+ Tour Places</span></a>
                </div>
              </div>
              <div className="tour-offer bg-success">30% Off</div>
              <div className="international-plus-icon">
                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
              </div>
            </div>
            <div className="international-item">
              <img src="img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
              <div className="international-content">
                <div className="international-info">
                  <h5 className="text-white text-uppercase mb-2">Germany</h5>
                  <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 12 Cities</a>
                  <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>21+ Tour Places</span></a>
                </div>
              </div>
              <div className="international-plus-icon">
                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
              </div>
            </div>
            <div className="international-item">
              <img src="img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
              <div className="international-content">
                <div className="tour-offer bg-warning">45% Off</div>
                <div className="international-info">
                  <h5 className="text-white text-uppercase mb-2">Spain</h5>
                  <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 9 Cities</a>
                  <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>133+ Tour Places</span></a>
                </div>
              </div>
              <div className="international-plus-icon">
                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
              </div>
            </div>
            <div className="international-item">
              <img src="img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
              <div className="international-content">
                <div className="international-info">
                  <h5 className="text-white text-uppercase mb-2">Japan</h5>
                  <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 8 Cities</a>
                  <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>137+ Tour Places</span></a>
                </div>
              </div>
              <div className="international-plus-icon">
                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
              </div>
            </div>
            <div className="international-item">
              <img src="img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Image" />
              <div className="international-content">
                <div className="tour-offer bg-info">70% Off</div>
                <div className="international-info">
                  <h5 className="text-white text-uppercase mb-2">London</h5>
                  <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 17 Cities</a>
                  <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>26+ Tour Places</span></a>
                </div>
              </div>
              <div className="international-plus-icon">
                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>
<div className="container">
  <div className="row">

     <table className='table  table-hover'>
          <thead>
            <tr className='bg-dark text-white text-center'>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                tour && tour.map((dets,idx)=>{
                    return(
                      <tr className='text-center ' key={dets.id}>

                        <td>{dets.id}</td>
                        <td>{dets.title}</td>
                        <td>{dets.category}</td>
                        <td><img src={dets.image} style={{height:'100px',objectFit:'cover',width:'200px'}} alt="" /></td>
                        <td>
                          <button className="btn btn-success" 
                           data-bs-toggle="modal"
                        data-bs-target={`#tour${dets.id}`}
                          >View</button>
                          <button className="btn btn-primary mx-3"> Edit</button>
                          <button className="btn btn-danger" onClick={()=>DeleteTourData(dets.id)}>Delete</button>

                          {/* modal */}
                          <div
                          className="modal fade"
                          id={`tour${dets.id}`}
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
                <img className="img-fluid w-100 rounded-top" style={{height:'300px',objectFit:'cover'}}  src={dets.image} alt="Image" />
                <div className="blog-icon">
                  <a href="#" className="my-auto"></a>
                </div>
              </div>
              <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                <small className="flex-fill text-center border-end py-2">{dets.category}{dets.name}</small>
                {/* <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a> */}
              </div>
            </div>
            <div className="blog-content border border-top-0 rounded-bottom p-4">
              {/* <p className="mb-3">Posted By: {dets.post} </p> */}
              <a href="#" className="h4">{dets.title}</a>
              <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
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

export default ATour
