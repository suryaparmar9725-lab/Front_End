import React, { useEffect, useState } from "react";
import Aheader from "../Acomon/Aheader";
import Ahero from "../Acomon/Ahero";
import axios from "axios";
import CustomHook from "../../Cusomehook/CustomHook";

const AdminExplore = () => {
  const {api , FetchData} = CustomHook('http://localhost:3000/ExploreTour')

  useEffect(()=>{
    FetchData()

    
  },[])

  return (
    <div>
      <Aheader />
      <Ahero title="Explore Tour" name="ExploreTour" />
      <div className="container">
        <div className="row mt-5">
          {api &&
            api.map((dets, idx) => {
              return (
                <div className="card mx-3 mt-3" key={idx} style={{ width: "18rem" }}>
                  <img src={dets.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{dets.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AdminExplore;
