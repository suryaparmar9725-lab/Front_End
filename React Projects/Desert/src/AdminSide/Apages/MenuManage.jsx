import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import ManagandAddNavbar from "../Acommon/ManagandAddNavbar";

const MenuManage = () => {
  const [Menu, setMenu] = useState([]);

  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    GetMenu();
  }, []);

  const GetMenu = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Menu");
      setMenu(res.data);
    } catch (error) {
      toast.error("DATA NOT FOUND");
    }
  };

  // delete menu
  const Delete = async(id)=>{
   try {
     const res = await axios.delete(`http://localhost:3000/Menu/${id}`)
     toast.success('Menu Delete Successfully')
     GetMenu()
   } catch (error) {
      toast.error('DATA NOT FOUND')
   }

  }
  // Update Data / Edite Data 
  const [editmodal,seteditmodal] = useState(null)
  const [editdata,seteditdata] = useState({
    id : '',
        tag:'',
        category:'',
        title:'',
        desc:'',
        price : '',
        image : ''  
  })
  const getchange = (e)=>{
    seteditdata({
      ...editdata,
      [e.target.name] : e.target.value
    })
  }

  const Editmodal = (data) =>{
    seteditmodal(data)
    seteditdata(data)
  }
  
  const Update =async(e)=>{
    e.preventDefault()

    try {
      const res = await axios.put(`http://localhost:3000/Menu/${editdata.id}`,editdata)
      toast.success('Data Update Successfully')
      GetMenu()
      seteditmodal(null)
    } catch (error) {
        toast.error('DATA NOT FOUND')
    }
  }

  return (
    <div>
      <ManagandAddNavbar/>
      <div className="container">
        <div className="row">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="stitle">
              Menu <span>Manage</span>
            </h2>
            Manage Your Menu
            <div className="sline" />
          </div>

          <NavLink to={'/addmenu'} className="btn btn-primary mt-3 mb-5">Add menu</NavLink>

          <table className="table table-hover ">
            <thead>
              <tr className=" text-center">
                <th>ID</th>
                <th>Tag</th>
                <th>Category</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {Menu &&
                Menu.map((dets) => {
                  return (
                    <tr key={dets.id} className="text-center">
                      <td>{dets.id}</td>
                      <td>{dets.tag}</td>
                      <td>{dets.category}</td>
                      <td style={{ width: "10%" }}>{dets.title}</td>
                      <td className="w-25">{dets.desc}</td>
                      <td>{dets.price}</td>
                      <td>
                        <img
                          src={dets.image}
                          style={{
                            width: "80px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => setSelectedMenu(dets)}
                          data-bs-toggle="modal"
                          data-bs-target="#menuModal"
                         
                          
                        >
                          View
                        </button>
                        <button className="btn btn-primary mx-2"
                        
                      onClick={()=>Editmodal(dets)}
                        >Edit</button>
                        <button className="btn btn-danger" onClick={()=>Delete(dets.id)}>Delete</button>
                      </td>

                      {/* View Button Click Modal Open */}
                      <div className="modal fade " id="menuModal" tabIndex="-1">
                        <div
                          style={{ width: "400px" }}
                          className="modal-dialog modal-lg  modal-dialog-centered"
                        >
                          <div className="modal-content border-0">
                            <div className="modal-header">
                              <h5>{selectedMenu?.title}</h5>

                              <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>

                            <div className="modal-body">
                              {selectedMenu && (
                                <div className="mcard">
                                  <div className="mimg">
                                    <img
                                      src={selectedMenu.image}
                                      alt={selectedMenu.title}
                                      className="img-fluid w-100"
                                    />

                                    <div className="mbdg hot">
                                      ⭐ {selectedMenu.tag}
                                    </div>

                                    <div className="mhrt">
                                      <i className="far fa-heart"></i>
                                    </div>
                                  </div>

                                  <div className="mbody">
                                    <div className="mcat">
                                      {selectedMenu.category}
                                    </div>

                                    <div className="mtit">
                                      {selectedMenu.title}
                                    </div>

                                    <div className="mdesc">
                                      {selectedMenu.desc}
                                    </div>

                                    <div className="mfoot">
                                      <div>
                                        <div className="mprice">
                                          {selectedMenu.price}
                                        </div>

                                        <div className="mstars">
                                          ⭐ 4.9 (128)
                                        </div>
                                      </div>

                                      <button className="madd">
                                        <i className="fas fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* View Button Click Modal Close */}

                    </tr>
                  );
                })}
            </tbody>
          </table>
{/* Edite Modal open */}


{/* Edit Modal */}
{
    editmodal && (
      <div className="container">
        <div className="row">

           <form onSubmit={Update} className="shadow rounded-5" style={{padding:'5vw'}}>
          <h1 className=" text-center bg-primary text-white p-2 rounded  mb-5">Update Your Menu </h1>
          <div className="row g-4">
            {/* ID */}
           
            {/* Tag */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Tag
              </label>
              <input onChange={getchange} value={editdata.tag} name="tag" type="text" placeholder="Add tag" className="form-control rounded-3" />
                
             
            </div>
            {/* Category */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Category
              </label>
              <input onChange={getchange} value={editdata.category} name="category" type="text" className="form-control" placeholder="Category"/>
                
              
            </div>
            {/* Title */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Menu Title
              </label>
              <input onChange={getchange} value={editdata.title} name="title" type="text" className="form-control rounded-3" placeholder="Enter Menu Title" />
            </div>
            {/* Price */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Price ($)
              </label>
              <input onChange={getchange} value={editdata.price} name="price" type="text" className="form-control rounded-3" placeholder="Enter Price" />
            </div>
            {/* Description */}
            <div className="col-12">
              <label className="form-label fw-semibold">
                Description
              </label>
              <input onChange={getchange} value={editdata.desc} name="desc" type="text" className="form-control p-3 w-100 rounded-3" rows={4} placeholder="Enter Food Description" />
            </div>
            {/* Image Upload */}
            <div className="col-md-8">
              <label className="form-label fw-semibold">
                Upload Image
              </label>
              <input onChange={getchange} value={editdata.image} name="image" type="url" placeholder="Enter Image URL..." className="form-control rounded-3" />
            </div>
           
          </div>
          <div className="modal-footer bg-light">
        <button className="btn btn-secondary mx-3" onClick={()=>seteditmodal(null)}>Close</button>
        <button className="btn btn-primary px-5">
          <i className="fa-solid fa-floppy-disk me-2" />
          Update Menu
        </button>
      </div>
        </form>
        </div>
      </div>
  )
}


{/* Edite Modal close */}

        </div>
      </div>
    </div>
  );
};

export default MenuManage;
