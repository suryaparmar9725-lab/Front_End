import React, { useEffect, useState } from "react";
import UseGet from "../CustomHook/UseGet";
import ManageHeader from "./ManageHeader";
import { toast } from "react-toastify";
import axios from "axios";
import { NavLink } from "react-router-dom";

const FruitManage = () => {
  const { Data, GetData } = UseGet(`http://localhost:3000/Fruits`);

  useEffect(() => {
    GetData();
  }, []);

// EditModal

const [EditModal,setEditModal ] = useState(false)
const [editData,seteditData] = useState({
    id : '',
    Tag:'',
    FruitName : '',
    Desc : '',
    Price : '',
    Image : ''
})

// Open Modal
const OpenModal = (dets) =>{
    setEditModal(dets)
    seteditData(dets)
}

const GetHandle = (e) =>{
seteditData({
    ...editData,
    [e.target.name] : e.target.value
})
}

const UpdateEditData = async(e) =>{
    e.preventDefault()
    try {
        const res  = await axios.put(`http://localhost:3000/Fruits/${editData.id}`,editData)
        GetData()
        setEditModal(false)
        toast.success('Data Updated')
    } catch (error) {
        toast.error('Data Not Found')
    }
}


const Delete = async(id)=>{
    try {
        const res = await axios.delete(`http://localhost:3000/Fruits/${id}`)
        GetData()
        toast.success('Item Deleted')
    } catch (error) {
        toast.error('Data Not Found')
    }
}


  return (
    <div>
      <ManageHeader />

      <div className="container">
        <NavLink to={'/AddFruit'} className="btn my-2 btn-success">Add Fruits </NavLink>
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tag</th>
                <th>FruitName</th>
                <th>Desc</th>
                <th>Price</th>
                <th>Image</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {Data &&
                Data.map((dets) => {
                  return (
                    <tr key={dets.id}>
                      <td>{dets.id}</td>
                      <td>{dets.Tag}</td>
                      <td>{dets.FruitName}</td>
                      <td>{dets.Desc}</td>
                      <td>${dets.Price}</td>
                      <td>
                        <img
                          src={dets.Image}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          alt=""
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target={`#view${dets.id}`}
                        >
                          View
                        </button>
                        <button className="btn btn-primary mx-2"
                        onClick={()=>OpenModal(dets)}
                        >Edit</button>
                        <button className="btn btn-danger"
                        onClick={()=>Delete(dets.id)}
                        >Delete</button>
                      </td>
                      {/* View Modal Open */}
                      <div
                        className="modal fade"
                        id={`view${dets.id}`}
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <div className="card" style={{ width: "100%" }}>
                                <img
                                  src={dets.Image}
                                  className="card-img-top "
                                  alt="..."
                                  style={{width:'100%',height:'450px',objectFit:'cover',objectPosition:'center'}}
                                />
                                <div className="card-body">
                                  <h5 className="card-title">{dets.Tag}</h5>
                                  <h5 className="card-title">
                                    {dets.FruitName}
                                  </h5>
                                  <p className="card-text">{dets.Desc}</p>
                                  <a href="#" className="btn btn-primary">
                                    Order
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer"></div>
                          </div>
                        </div>
                      </div>

                      {/* View Modal Close */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {/* Open Edit Modal  */}
          {
            EditModal && (
                   <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="card-header border-0 text-white text-center py-4"
              style={{ backgroundColor: '#81c408' }}>
              <h2 className="fw-bold mb-1">Edit Fruit</h2>
              <p className="mb-0">Update your fruit details</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={UpdateEditData}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Tag</label>
                  <input type="text" onChange={GetHandle} value={editData.Tag} name="Tag"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter fruit tag" />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Fruit Name</label>
                  <input  onChange={GetHandle} value={editData.FruitName} type="text" name="FruitName"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter fruit name" />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea  onChange={GetHandle} value={editData.Desc} name="Desc" rows="4"
                    className="form-control rounded-3"
                    placeholder="Enter fruit description"></textarea>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Price (₹)</label>
                  <input  onChange={GetHandle} value={editData.Price} type="text" name="Price"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter price" />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Image URL</label>
                  <input type="url"  onChange={GetHandle} value={editData.Image} name="Image"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter image URL" />
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  <button type="submit"
                    className="btn btn-lg text-white fw-semibold rounded-pill px-4"
                    style={{ backgroundColor: '#81c408' }}>
                    Update Fruit
                  </button>
                  <button onClick={()=>setEditModal(false)}
                    className="btn btn-outline-secondary btn-lg rounded-pill px-4">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
            )
          }
          {/* Close Edit Modal  */}
        </div>
      </div>
    </div>
  );
};

export default FruitManage;
