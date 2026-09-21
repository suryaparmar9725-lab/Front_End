import React from 'react'
import Aheader from '../Acommon/Aheader'
import Footer from '../Acommon/Footer'

const Areview = () => {
  return (
    <div>
        <Aheader/>
         {/* TESTIMONIALS */}
<section id="testimonials">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <span className="slbl">What People Say</span>
      <h2 className="stitle">Our Customers <span>Feedback</span></h2>
      <div className="sline" />
    </div>
    <div className="swiper tesSwiper" data-aos="fade-up">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="tescard">
            <div className="tesq">"</div>
            <div className="tess"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
            <p className="testxt">Honestly the best burgers I've ever had. The smash burger is incredible - perfectly crispy edges, juicy inside, and those pickles! We come every Friday now.</p>
            <div className="tesauth">
              <img src="https://media.istockphoto.com/id/1473034913/photo/male-chef-preparing-a-bowl-of-noodle.webp?a=1&b=1&s=612x612&w=0&k=20&c=TRSsC-8u1cs2lgap74IqyywZjECTBrI6U4wXm7dHKMI=" alt />
              <div>
                <div className="tesnm">Monica Wilber</div>
                <div className="tesrl">Regular Customer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="tescard">
            <div className="tesq">"</div>
            <div className="tess"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
            <p className="testxt">Ordered delivery and the food arrived hot and fresh in 22 minutes. Portions are generous. Sarab has become my go-to comfort food spot without question.</p>
            <div className="tesauth">
              <img src="https://media.istockphoto.com/id/1473034913/photo/male-chef-preparing-a-bowl-of-noodle.webp?a=1&b=1&s=612x612&w=0&k=20&c=TRSsC-8u1cs2lgap74IqyywZjECTBrI6U4wXm7dHKMI=" alt />
              <div>
                <div className="tesnm">Cameron Fox</div>
                <div className="tesrl">Food Blogger</div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="tescard">
            <div className="tesq">"</div>
            <div className="tess"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
            <p className="testxt">The truffle pasta blew my mind. I didn't expect that quality from a fast food place. Great ambiance, super friendly staff. Highly recommended!</p>
            <div className="tesauth">
              <img src="https://media.istockphoto.com/id/1473034913/photo/male-chef-preparing-a-bowl-of-noodle.webp?a=1&b=1&s=612x612&w=0&k=20&c=TRSsC-8u1cs2lgap74IqyywZjECTBrI6U4wXm7dHKMI=" alt />
              <div>
                <div className="tesnm">Priya Sharma</div>
                <div className="tesrl">Food Enthusiast</div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="tescard">
            <div className="tesq">"</div>
            <div className="tess"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
            <p className="testxt">Catered our office party of 50 people and everything was flawless. Fresh, delicious, on time and well presented. Nashville chicken was the absolute star!</p>
            <div className="tesauth">
              <img src="img/testimonial/4.jpg" alt />
              <div>
                <div className="tesnm">David Park</div>
                <div className="tesrl">Corporate Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination mt-4" style={{position: 'static'}} />
    </div>
  </div>
</section>
<Footer/>
      
    </div>
  )
}

export default Areview
