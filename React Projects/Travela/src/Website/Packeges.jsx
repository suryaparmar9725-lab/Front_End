import React, { useEffect } from 'react'
import Header from '../Comon/Header'
import Carosol from '../Comon/Carosol'
import Footer from '../Comon/Footer'
import { Helmet } from 'react-helmet'
import Ahero from '../Admin/Acomon/Ahero'
import { NavLink , Link} from 'react-router-dom'

const Packeges = () => {
  

  return (
    <div>
       <Helmet>

              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
        

        {/* <!-- Template Javascript --> */}
        <script src="js/main.js"></script>
     </Helmet>
    <Header/>
    {/* <Carosol/> */}
    <Ahero title='Packages' name='Packages'/>
    <div className="container-fluid packages py-5">
  <div className="container py-5">
    <div className="mx-auto text-center mb-5" style={{maxWidth: 900}}>
      <h5 className="section-title px-3">Packages</h5>
      <h1 className="mb-0">Awesome Packages</h1>
    </div>
    <div className="packages-carousel owl-carousel">
      <div className="packages-item">
        <div className="packages-img">
          <img src="img/packages-4.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
          <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{width: '100%', bottom: 0, left: 0, zIndex: 5}}>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />Venice - Italy</small>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />3 days</small>
            <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />2 Person</small>
          </div>
          <div className="packages-price py-2 px-4">$349.00</div>
        </div>
        <div className="packages-content bg-light">
          <div className="p-4 pb-0">
            <h5 className="mb-0">Venice - Italy</h5>
            <small className="text-uppercase">Hotel Deals</small>
            <div className="mb-3">
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
            </div>
            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
          </div>
          <div className="row bg-primary rounded-bottom mx-0">
            <div className="col-6 text-start px-0">
              <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
            </div>
            <div className="col-6 text-end px-0">
              <Link to='/trbooking' className="btn-hover btn text-white py-2 px-4">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="packages-item">
        <div className="packages-img">
          <img src="img/packages-2.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
          <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{width: '100%', bottom: 0, left: 0, zIndex: 5}}>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />Venice - Italy</small>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />3 days</small>
            <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />2 Person</small>
          </div>
          <div className="packages-price py-2 px-4">$449.00</div>
        </div>
        <div className="packages-content bg-light">
          <div className="p-4 pb-0">
            <h5 className="mb-0">The New California</h5>
            <small className="text-uppercase">Hotel Deals</small>
            <div className="mb-3">
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
            </div>
            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
          </div>
          <div className="row bg-primary rounded-bottom mx-0">
            <div className="col-6 text-start px-0">
              <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
            </div>
            <div className="col-6 text-end px-0">
              <Link to={'/trbooking'} className="btn-hover btn text-white py-2 px-4">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="packages-item">
        <div className="packages-img">
          <img src="img/packages-3.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
          <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{width: '100%', bottom: 0, left: 0, zIndex: 5}}>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />Venice - Italy</small>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />3 days</small>
            <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />2 Person</small>
          </div>
          <div className="packages-price py-2 px-4">$549.00</div>
        </div>
        <div className="packages-content bg-light">
          <div className="p-4 pb-0">
            <h5 className="mb-0">Discover Japan</h5>
            <small className="text-uppercase">Hotel Deals</small>
            <div className="mb-3">
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
            </div>
            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
          </div>
          <div className="row bg-primary rounded-bottom mx-0">
            <div className="col-6 text-start px-0">
              <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
            </div>
            <div className="col-6 text-end px-0">
              <Link to="/trbooking" className="btn-hover btn text-white py-2 px-4">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="packages-item">
        <div className="packages-img">
          <img src="img/packages-1.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
          <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{width: '100%', bottom: 0, left: 0, zIndex: 5}}>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />Thayland</small>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />3 days</small>
            <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />2 Person</small>
          </div>
          <div className="packages-price py-2 px-4">$649.00</div>
        </div>
        <div className="packages-content bg-light">
          <div className="p-4 pb-0">
            <h5 className="mb-0">Thayland Trip</h5>
            <small className="text-uppercase">Hotel Deals</small>
            <div className="mb-3">
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
              <small className="fa fa-star text-primary" />
            </div>
            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
          </div>
          <div className="row bg-primary rounded-bottom mx-0">
            <div className="col-6 text-start px-0">
              <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
            </div>
            <div className="col-6 text-end px-0">
              <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer/>


    </div>
  )
}

export default Packeges
