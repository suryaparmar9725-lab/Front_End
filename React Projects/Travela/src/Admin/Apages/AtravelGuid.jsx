import React, { useEffect, useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'
import axios from 'axios'
import CustomHook from '../../Cusomehook/CustomHook'

const AtravelGuid = () => {

    const {api,FetchData} = CustomHook('http://localhost:3000/TravelGuid');

    useEffect(()=>{
        FetchData()
    },[])


  return (
    <div>
        <Aheader/>
        <Ahero title='Travel Guid' name='TravelGuids'/>

        <div className="container">
            <div className="row mt-5">
{
    api && api.map((dets,idx)=>{
        return(

      <div className="card p-2 mx-3"  key={idx} style={{width: '18rem' ,height:'400px'}}>
  <img src={dets.image} className="card-img-top" style={{objectFit:'cover' , height:'60%'}} alt="..." />
  <div className="card-body">
    <h2>{dets.name}</h2>
    <p className="card-text">{dets.Designation}</p>
  </div>
</div>


        )
    })
}
            </div>
        </div>
    </div>
  )
}

export default AtravelGuid
