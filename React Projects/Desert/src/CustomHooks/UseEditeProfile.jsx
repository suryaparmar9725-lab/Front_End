import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UseEditeProfile = (api) => {

    const Redirect = useNavigate()

    const [form,setform] = useState({
        id : '',
        name : '',
        email: '',
        password: ''
    })
    const GetUser = async() =>{
        try {

            const res = await axios.get(`${api}/${localStorage.getItem('Uid')}`)
            setform(res.data)
        } catch (error) {
            toast.error('DATA NOT FOUND')
        }
    }

    const GetChnage = (e) =>{
            setform({
                ...form,
                [e.target.name] : e.target.value
            })
    }

    const GetUpdate = async(e) =>{
        e.preventDefault()

        try {
            const res = await axios.put(`${api}/${form.id}`,form)
            setform({

            })
            Redirect('/')
            localStorage.setItem('Uname',form.name)
            toast.success('Profile Update Successfully')
        } catch (error) {
            toast.error('DATA NOT FOUND')
        }

    }


    return {
        form,GetChnage,GetUser,GetUpdate
    }

}

export default UseEditeProfile
