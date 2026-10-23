import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const Testimonial = () => {
  return (
    <div>
   <Header/>
{/* Testimonial Start */}
<div className="container-fluid py-5 " style={{marginTop:'10vw'}}> 
  <div className="container py-5">
    <div className="text-center mx-auto mb-5" style={{maxWidth: 700}}>
      <h4 className="text-success mb-3">Our Testimonial</h4>
      <h1 className="display-5 fw-bold text-dark">Our Client Saying!</h1>
    </div>
    <div className="d-flex justify-content-end gap-3 mb-3">
      <button className="btn btn-outline-warning rounded-pill px-4" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <i className="bi bi-arrow-left" /> ←
      </button>
      <button className="btn btn-outline-warning rounded-pill px-4" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <i className="bi bi-arrow-right" /> →
      </button>
    </div>
    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-light rounded-4 p-4 h-100">
                <p className="text-secondary mb-4">
                  Lorem Ipsum is simply dummy text of the printing Ipsum
                  has been the industry's standard dummy text ever since
                  the 1500s,
                </p>
                <hr className="border-warning opacity-100" />
                <div className="d-flex align-items-center gap-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" className="rounded-3" width={100} height={100} style={{objectFit: 'cover'}} alt="Client" />
                  <div>
                    <h4 className="text-dark mb-2">Client Name</h4>
                    <p className="text-secondary mb-2">Profession</p>
                    <div className="text-success">
                      ★★★★★
                    </div>
                  </div>
                  <div className="ms-auto text-warning fs-1">❞</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-light rounded-4 p-4 h-100">
                <p className="text-secondary mb-4">
                  Lorem Ipsum is simply dummy text of the printing Ipsum
                  has been the industry's standard dummy text ever since
                  the 1500s,
                </p>
                <hr className="border-warning opacity-100" />
                <div className="d-flex align-items-center gap-4">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" className="rounded-3" width={100} height={100} style={{objectFit: 'cover'}} alt="Client" />
                  <div>
                    <h4 className="text-dark mb-2">Client Name</h4>
                    <p className="text-secondary mb-2">Profession</p>
                    <div className="text-success">★★★★★</div>
                  </div>
                  <div className="ms-auto text-warning fs-1">❞</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-light rounded-4 p-4 h-100">
                <p className="text-secondary mb-4">
                  Great service and excellent quality. I am very happy
                  with the overall experience and would recommend it.
                </p>
                <hr className="border-warning opacity-100" />
                <div className="d-flex align-items-center gap-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="rounded-3" width={100} height={100} style={{objectFit: 'cover'}} alt="Client" />
                  <div>
                    <h4 className="text-dark mb-2">Client Name</h4>
                    <p className="text-secondary mb-2">Profession</p>
                    <div className="text-success">★★★★★</div>
                  </div>
                  <div className="ms-auto text-warning fs-1">❞</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-light rounded-4 p-4 h-100">
                <p className="text-secondary mb-4">
                  Wonderful experience from start to finish.
                  The quality and support exceeded my expectations.
                </p>
                <hr className="border-warning opacity-100" />
                <div className="d-flex align-items-center gap-4">
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" className="rounded-3" width={100} height={100} style={{objectFit: 'cover'}} alt="Client" />
                  <div>
                    <h4 className="text-dark mb-2">Client Name</h4>
                    <p className="text-secondary mb-2">Profession</p>
                    <div className="text-success">★★★★★</div>
                  </div>
                  <div className="ms-auto text-warning fs-1">❞</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Testimonial End */}
<Footer/>
    </div>
  )
}

export default Testimonial
