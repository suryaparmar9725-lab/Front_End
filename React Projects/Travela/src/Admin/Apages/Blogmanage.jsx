import React, { useEffect, useState } from "react";
import Aheader from "../Acomon/Aheader";
import Ahero from "../Acomon/Ahero";
import axios from "axios";
import CustomHook from "../../Cusomehook/CustomHook";
import UseViewCard from "../../Cusomehook/UseViewCard";
import { toast } from "react-toastify";


const Blogmanage = () => {
  const { api, FetchData } = CustomHook("http://localhost:3000/blog")

  useEffect(() => {
    FetchData();
  }, []);
  const [blogdata,setblogdata] = useState({
      id:'',
      post:'',
      image : '',
      title:'',
      desc: '',
      date : ''

  })

   
  // Delete Data
    const DeleteBlog = async(id) =>{
        try {
          const res = await axios.delete(`http://localhost:3000/blog/${id}`);

          toast.success('DATA DELETED SUCCESSFULLY')
          FetchData()
        } catch (error) {
            toast.error('DATA NOT FOUND')
        }
    }

  const Singlevire = async(id) =>{
    try {
      const res = await axios.get(`http://localhost:3000/blog/${id}`)
      setblogdata(res.data)
    } catch (error) {
        document.write(error,'DATA NOT FOUND')
    }
  }
  // Edite Data
  const [editModel , setModal]  = useState(null)
  const [editData,setEditData] = useState({
      id: '',
      image: '',
      post:  '',
      title: '',
      desc: '' ,
      date: ''
  })

  const getChangeData = (e) =>{
      setEditData({
        ...editData,
        [e.target.name] : e.target.value
      })
  }

const EditModal = (data) =>{
  setModal(data)
  setEditData(data)
  console.log(data)
}

// Update Data

const UpdateData = async(e)=>{
  e.preventDefault();

  try {
    const res = await axios.put(`http://localhost:3000/blog/${editData.id}`,editData)
    toast.success('Data Updated Successfully')
    setModal(null)
    FetchData() 
  } catch (error) {
      toast.error('DATA NOT FOUND!')
  }
}
  return (
    <div>
      <Aheader />
      <Ahero title="Blog Manage" name="Blog" />

      <div className="container">
        <table className="table mt-5 table-hover">
          <thead>
            <tr className="bg-dark text-center">
              <th>ID</th>
              <th>Name</th>
              <th>Title</th>
              <th>Post Date</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {api &&
              api.map((dets) => {
                return (
                  <tr className="text-center" key={dets.id}>
                    <td>{dets.id}</td>
                    <td>{dets.post}</td>
                    <td>{dets.title}</td>
                    <td>{dets.date}</td>
                    <td>
                      <img style={{ width: "100px" }} src={dets.image} alt="" />
                    </td>
                    <td>
                      <button
                      onClick={()=>Singlevire(dets.id)}
                        className="btn btn-success "
                        data-bs-toggle="modal"
                        data-bs-target={`#blog${dets.id}`}
                      >
                        View
                      </button>
                      <button className="btn btn-primary mx-3" onClick={()=>EditModal(dets)}>Edit</button>
                      <button className="btn btn-danger" onClick={()=>DeleteBlog(dets.id)}>Delete</button>
                      <div>
                        {/* Button trigger modal */}

                        {/* Modal */}

                        <div
                          className="modal fade"
                          id={`blog${dets.id}`}
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
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{dets.date}</small>
                {/* <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a> */}
              </div>
            </div>
            <div className="blog-content border border-top-0 rounded-bottom p-4">
              <p className="mb-3">Posted By: {dets.post} </p>
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
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>  
        {
          editModel && (
                <div className="container-fluid  booking py-5">
    <div className="container  py-5">
    <div className="row g-5 align-items-center ">
    
      <div className="col-lg-6 mx-auto">
        <h1 className="text-white mb-3">Book A Tour Deals</h1>
        <p className="text-white mb-4">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
        <form>
          <div className="row g-3">
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getChangeData} value={editData.title} name='title'  className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="title">Your Title</label>
              </div>
            </div>
           
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getChangeData} value={editData.post} name='post'  className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="title">Post Name</label>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="date" onChange={getChangeData} value={editData.date} name='date'  className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="title">Edit Date</label>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getChangeData} value={editData.desc} name='desc'  className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="title">Edit Description</label>
              </div>
            </div>
           
            
            <div className="col-12">
              <div className="form-floating">
                {/* <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{height: 100}} defaultValue={""} /> */}
                 <input type="url" onChange={getChangeData} value={editData.image} name='image' className="form-control bg-white border-0" id="name" required placeholder="Your Name" />
                <label htmlFor="img">Your Image URL</label>
                
              </div>
            </div>
            <div className="col-12">
              <button onClick={UpdateData} className="btn btn-primary text-white w-100 py-3" type="submit">Update Blog</button>
            </div>
            <div className="col-12">
              <button onClick={()=>setModal(null)} className="btn btn-primary text-white w-100 py-3" type="submit">Cancel Blog</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
          )
        }
      </div>
    </div>
  );
};

export default Blogmanage;
