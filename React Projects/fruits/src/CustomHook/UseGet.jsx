import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const UseGet = (api) => {
    
    const [Data ,setData] = useState([])

    const GetData = async() =>{
        try {
            const res = await axios.get(`${api}`) 
            setData(res.data)
        } catch (error) {
            toast.error('Data Not Found')
        }
    }

    return{
        Data,GetData
    }

}

export default UseGet
