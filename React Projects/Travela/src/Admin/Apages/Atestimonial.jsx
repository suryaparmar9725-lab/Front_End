import React, { useState } from "react";
import Aheader from "../Acomon/Aheader";
import Ahero from "../Acomon/Ahero";
import axios from "axios";

const Atestimonial = () => {
  const [Services, setSrvices] = useState([]);

  const getservices = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Services");
      setSrvices(res.data);
    } catch (err) {
      document.write("DATA NOT FOUND", err);
    }
  };
  return (
    <div>
      <Aheader />
      <Ahero title="Testimonial" name="testimonial" />

      <div className="container">
        <div className="row mt-5">
          {Services &&
            Services.map((dets, idx) => {
              return (
                <div className="card mb-3" key={idx} style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={dets.icon}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{dets.title}</h5>
                        <p className="card-text">
                          {dets.desc}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Atestimonial;
