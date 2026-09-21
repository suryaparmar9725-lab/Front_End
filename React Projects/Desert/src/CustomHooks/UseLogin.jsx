import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UseLogin = (api) => {

    const redirect = useNavigate()
    
    const [form,setform] = useState({
        email : '',
        password : ''
    })

    const getChange = (e) =>{
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const Submit = async(e)=>{
            e.preventDefault()
          const {email,password} = form

          if(email == '' || password == ""){
            toast.error('Feild is Empty')
            return false
          } 

          try {
            const res = await axios.get(`${api}?email=${email}`)
           
            // email validation
            if(res.data.length === 0){
                toast.error('Email Does not Match')
                return false
            }
            // make user
            const user = res.data[0]

            // password validation
            if(password != user.password){
                toast.error('Password Does not Match')
                return false
            }
            localStorage.setItem('Uid',user.id)
            localStorage.setItem('Uname',user.name)
            redirect('/')
            toast.success('Login Successfuly')
            
          } catch (error) {
            toast.error('DATA NOT FOUND')
          }
    }

    return{
        form,getChange,Submit
    }

}

export default UseLogin
