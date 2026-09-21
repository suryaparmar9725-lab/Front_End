import axios from 'axios'
import React, { useState } from 'react'

const CustomHook = (apipath) => {

    const [api,setApi] = useState([])

    const FetchData = async() =>{
        try{

            const res = await axios.get(apipath)
            setApi(res.data)
        }catch(err){
            document.write('DATA NOT FOUND',err)
        }
    }
    return{
        api,FetchData
    }

}

export default CustomHook
