import { NavLink } from 'react-router-dom'
import Header from '../../UserSide/UCommon/Header'
import ManagandAddNavbar from '../Acommon/ManagandAddNavbar'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'





const CategoryManage = () => {

  const [category,setCategory] = useState([])

  useEffect(()=>{
    GetCategory()
  },[])

  // Fetch Data
  const GetCategory = async() =>{
      try {
        const res = await axios.get('http://localhost:3000/Category')
        setCategory(res.data)
        
      } catch (error) {
          toast.error('DATA NOT FOUND')
      }
  }

  // Single View Data 
const [catdata ,setcatdata] = useState({
  id : '',
  title:'',
  Item: '',
  img : ''
})

const SingleView = async(id) =>{
  try {

    const res = await axios.get(`http://localhost:3000/Category/${id}`)
    setcatdata(res.data)
  } catch (error) {
    toast.error('Data not Found')
  }
}

// Edite Data 
const [EditModal,setEditModal] = useState(null)
const [Editdata,setEditdata]  = useState({
  id : '',
  title:'',
  Item:'',
  img : ''
})

const getChnage = (e) =>{
  setEditdata({
    ...Editdata,
    [e.target.name] : e.target.value
  })
}

const EditModalData = (data) =>{
  setEditModal(data)
  setEditdata(data)

}
// Update Data / Edite Data
const Update = async(e)=>{
  e.preventDefault()
  
  try {

    const res = await axios.put(`http://localhost:3000/Category/${Editdata.id}`,Editdata)
    toast.success('Data Update Successfully')
    setEditModal(null)
    GetCategory()
  } catch (error) {
      toast.error('DATA NOT FOUND')
  }

}

// Delete Data 
const Delete = async(id)=>{
  try {
    const res = await axios.delete(`http://localhost:3000/Category/${id}`)
    toast.success('Data Delete Successfully')
    GetCategory()
  } catch (error) {
    toast.error('DATA NOT FOUND')
  }
}

  return (
    <div>
     
     <ManagandAddNavbar/>

    <section id="category">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      
      <h2 className="stitle">Category <span>Manage</span></h2>
      <div className="sline" />
    
    </div>
    <div className="container">

      <div className="row">
      <NavLink  to={'/Addcategory'} className="btn-primary  mt-3 mb-3 btn "> Add Category</NavLink>
       <table className='table table-hover'>
          <thead className='text-center' >
            <tr>
            <th>Title</th>
            <th>Item</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody className='text-center'>
            {
              category && category.map((dets)=>{
                return(
                  <tr key={dets.id}>
                      <td>{dets.title}</td>
                      <td>{dets.Item}</td>
                      <td><img src={dets.img} style={{width:'100px',objectFit:'cover',borderRadius:'10px'}} alt="" /></td>
                      <td>
                        <button className="btn btn-success"
                         onClick={()=>SingleView(dets.id)}
                           data-bs-toggle="modal" data-bs-target={`#view${dets.id}`}
                        >View</button>
                        <button className="btn btn-primary mx-3" onClick={()=>EditModalData(dets)}>Edit</button>
                        <button className="btn btn-danger" onClick={()=>Delete(dets.id)}>Delete</button>
                      </td>

                  {/* View Model Open */}
<div>
  {/* Button trigger modal */}
  {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button> */}
  {/* Modal */}
  <div className="modal fade" id={`view${dets.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{dets.title}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <img style={{borderRadius:'10px',width:'100%',height:'400px',objectFit:'cover'}} src={dets.img} alt="" />
        </div>
        <h1>{dets.Item} <span className='fs-5'>Item</span></h1>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
</div>

                  {/* View Model Close */}

                  </tr>
                )
              })
            }
          </tbody>
       </table>
     
  {/* Open  Edit/Update Model */}
     {
          EditModal && (
   <form className='mt-5'>
  {/* Title */}
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" onChange={getChnage} value={Editdata.title} name='title' className="form-control" id="title" placeholder="Enter title" />
  </div>
  {/* Item */}
  <div className="mb-3">
    <label htmlFor="item" className="form-label">Item</label>
    <input type="text" onChange={getChnage} value={Editdata.Item} name='Item' className="form-control" id="item" placeholder="Enter item" />
  </div>
  {/* Image URL */}
  <div className="mb-3">
    <label htmlFor="imageUrl" className="form-label">Image URL</label>
    <input type="url" onChange={getChnage} value={Editdata.img} name='img' className="form-control" id="imageUrl" placeholder="Enter image URL" />
  </div>
  <button onClick={Update} type="submit" className="btn btn-primary">
    Update 
  </button>
  <button type="submit" onClick={()=>setEditModal(null)} className="btn btn-secondary mx-3">
    Cancel
  </button>
</form>


          )
     }
<div>

  
</div>

            

      </div>
    </div>
  </div>
</section>

      
    </div>
  )
}

export default CategoryManage
