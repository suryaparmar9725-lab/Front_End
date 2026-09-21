import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UseRegister = (api) => {
    
    const [form,setform] = useState({
        id: '',
        name : '',
        email:'',
        password : ''
    })
    const redirect = useNavigate()

    const GetChnage = (e) =>{
        setform({
            ...form,
            id : new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const Submit = async(e) =>{
        e.preventDefault();

        const {name,email,password} = form

        if(name == '' || email == '' || password == ''){
            toast.error('Field is Empty')
            return false
        }

        try {

            const res = await axios.post(api,form)
            setform({

            })
            redirect('/Login')
            toast.success('Register Successfully')

        } catch (error) {
            toast.error('DATA NOT FOUND')
        }

    }
    return{
        form,GetChnage,Submit
    }

}

export default UseRegister
