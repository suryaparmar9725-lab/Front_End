import axios from 'axios'
import React, { useState } from 'react'

const UseViewCard = (api) => {
    
    const [view,setview] = useState([])

    const SingleView = async(id) =>{
        try{
            const res = await axios.get(`${api}/${id}`)
            setview(res.data)
        }catch(err){
            document.write('DATA NOT FOUND',err)
        }
    }   

    return{
        view,SingleView
    }
}

export default UseViewCard
