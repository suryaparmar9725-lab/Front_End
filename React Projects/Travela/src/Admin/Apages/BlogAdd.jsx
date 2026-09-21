import React, { useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const BlogAdd = () => {

    const redirect = useNavigate();

    const [form,setform] = useState({
        id : '',
        image : '',
        post :'',
        title:'',
        desc:'',
        date:''

    })

    // Delete Data 

   

    const getChange = (e) =>{
        setform({
            ...form,
            id:new Date().getTime().toString(), 
            [e.target.name] : e.target.value
        })
        // console.log(form)

    }
    // form Handling;

    const SubmitHandle = async(e) =>{ 
        e.preventDefault();

        const {id,image,post,title,desc,date} = form
        if(id == '' || image == '' || post == '' || title == '' || desc == '' || date == ''){
          toast.error('Pleas Field Data')
          return false
        }

        try{
            const res = await axios.post('http://localhost:3000/blog',form)
            setform({
            id : '',
            image : '',
            post :'',
            title:'',
            desc:'',
            date:''
            })
            redirect('/blogmanage')
            toast.success('Blog Add Successfull')

        }catch(err){
            document.write('DATA NOT FOUND',err)
        }
    }

  return (
    <div>
        <Aheader/>
        <Ahero title='Blog Add' name='Blog Add'/>

      <div className="container-fluid  booking py-5">
    <div className="container  py-5">
    <div className="row g-5 align-items-center ">
    
      <div className="col-lg-6 mx-auto">
        <h1 className="text-white mb-3"> Add Blogs</h1>
       
        <form onSubmit={SubmitHandle}>
           <div className="row g-3">
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getChange} value={form.post} name='post'   className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="text" onChange={getChange} value={form.title} name='title'   className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="title">Your Title</label>
              </div>
            </div>
           
            <div className="col-md-12 ">
              <div className="form-floating">
                <input type="date" onChange={getChange} value={form.date} name='date'  className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                <label htmlFor="date">Post Date</label>
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
                 <input type="url" onChange={getChange} value={form.image} name='image'  className="form-control bg-white border-0" id="name"  placeholder="Your Name" />
                <label htmlFor="image">Your Image URL</label>
                
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Blog</button>
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

export default BlogAdd
