import React, { useState } from 'react'
import Aservices from '../Admin/Apages/Aservices'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormHandle = (api) => {

    const [form,setform] = useState({})
    const redirect = useNavigate()

    const getChange = (e) =>{
        
        setform({
            ...form,
            id : new Date().getTime().toString(),
            [e.target.name] : e.target.value
        })
    }

    const SubmitHandel = async(e) =>{
        e.preventDefault();

        try {
            const res = await axios.post(api,form)
            
            setform({
            
            })
        } catch (error) {
                document.write(error,'DATA NOT FOUND')
        }
        redirect('/ATour')

    }

    return{
        form,getChange,SubmitHandel
    }


}

export default FormHandle
