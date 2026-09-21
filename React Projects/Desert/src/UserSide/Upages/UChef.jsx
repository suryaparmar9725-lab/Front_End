import React, { useEffect, useState } from 'react'
import Header from '../UCommon/Header'
import UFooter from '../UCommon/UFooter'
import { toast } from 'react-toastify'
import axios from 'axios'

const UChef = () => {

  const [chef , setchef] = useState([])

  useEffect(()=>{
    getChef()
  },[])

  const getChef = async() =>{
      try {
        const res = await axios.get(`http://localhost:3000/chef`)
        setchef(res.data)
      } catch (error) {
        toast.error('DATA NOT FOUND')
      }
  }

  return (
    <div>
        <Header/>
      <section id="chefs">
  <div className="container mt-5 mb-5">
    <div className="text-center mb-5" data-aos="fade-up">
      <span className="slbl">The Culinary Team</span>
      <h2 className="stitle">Meet Our Expert <span>Chefs</span></h2>
      <div className="sline" />
    </div>
    <div className="row g-4">
      {
        chef && chef.map((dets)=>{
            return (
              <div key={dets.id} className="col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay={0}>
        <div className="chcard">
          <div className="chimg">
            <img src={dets.image} alt />
            <div className="chsoc"><a href="#"><i className="fab fa-instagram" /></a><a href="#"><i className="fab fa-facebook-f" /></a><a href="#"><i className="fab fa-twitter" /></a></div>
          </div>
          <div className="chbody">
            <div className="chnm">{dets.name}</div>
            <div className="chrole">{dets.rol}</div>
            <div className="chexp">{dets.exp} Year Experience</div>
          </div>
        </div>
      </div>
            )
        })
      }
      {/* <div className="col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay={0}>
        <div className="chcard">
          <div className="chimg">
            <img src="img/chefs/1.jpg" alt />
            <div className="chsoc"><a href="#"><i className="fab fa-instagram" /></a><a href="#"><i className="fab fa-facebook-f" /></a><a href="#"><i className="fab fa-twitter" /></a></div>
          </div>
          <div className="chbody">
            <div className="chnm">Alice Mortal</div>
            <div className="chrole">Head Chef</div>
            <div className="chexp">12 years experience</div>
          </div>
        </div>
      </div> */}
      {/* <div className="col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay={80}>
        <div className="chcard">
          <div className="chimg">
            <img src="img/chefs/2.jpg" alt />
            <div className="chsoc"><a href="#"><i className="fab fa-instagram" /></a><a href="#"><i className="fab fa-facebook-f" /></a><a href="#"><i className="fab fa-twitter" /></a></div>
          </div>
          <div className="chbody">
            <div className="chnm">Michael Corn</div>
            <div className="chrole">Grill Master</div>
            <div className="chexp">8 years experience</div>
          </div>
        </div>
      </div> */}
      {/* <div className="col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay={160}>
        <div className="chcard">
          <div className="chimg">
            <img src="img/chefs/3.jpg" alt />
            <div className="chsoc"><a href="#"><i className="fab fa-instagram" /></a><a href="#"><i className="fab fa-facebook-f" /></a><a href="#"><i className="fab fa-twitter" /></a></div>
          </div>
          <div className="chbody">
            <div className="chnm">Faz Chowdel</div>
            <div className="chrole">Pastry Chef</div>
            <div className="chexp">10 years experience</div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay={240}>
        <div className="chcard">
          <div className="chimg">
            <img src="img/chefs/4.jpg" alt />
            <div className="chsoc"><a href="#"><i className="fab fa-instagram" /></a><a href="#"><i className="fab fa-facebook-f" /></a><a href="#"><i className="fab fa-twitter" /></a></div>
          </div>
          <div className="chbody">
            <div className="chnm">William Latnum</div>
            <div className="chrole">Pizza Artisan</div>
            <div className="chexp">9 years experience</div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>
  {/* HOURS */}
<section id="hours">
  <div className="hrsbg" />
  <div className="container mb-4" style={{position: 'relative', zIndex: 2}}>
    <div className="text-center mb-5" data-aos="fade-up">
      <span className="slbl" style={{color: '#a5d6bc'}}>Opening Hours</span>
      <h2 className="stitle" style={{color: '#fff'}}>We're Open <span style={{color: 'var(--secondary)'}}>For You</span></h2>
      <div className="sline" />
    </div>
    <div className="row g-4 align-items-start">
      <div className="col-lg-5" data-aos="fade-right">
        <div className="hrscard">
          <div className="hrsrow">
            <span className="hrsday"><i className="fas fa-calendar-day me-2" style={{color: 'var(--secondary)'}} />Monday - Tuesday</span>
            <div className="d-flex align-items-center gap-2">
              <div className="hdot off" />
              <span className="hrstime" style={{color: '#ff6b6b'}}>Closed</span>
            </div>
          </div>
          <div className="hrsrow">
            <span className="hrsday"><i className="fas fa-calendar-day me-2" style={{color: 'var(--secondary)'}} />Wednesday - Thursday</span>
            <div className="d-flex align-items-center gap-2">
              <div className="hdot on" />
              <span className="hrstime">09:00 AM - 10:00 PM</span>
            </div>
          </div>
          <div className="hrsrow">
            <span className="hrsday"><i className="fas fa-calendar-day me-2" style={{color: 'var(--secondary)'}} />Friday</span>
            <div className="d-flex align-items-center gap-2">
              <div className="hdot on" />
              <span className="hrstime">09:00 AM - 11:00 PM</span>
            </div>
          </div>
          <div className="hrsrow">
            <span className="hrsday"><i className="fas fa-calendar-day me-2" style={{color: 'var(--secondary)'}} />Saturday</span>
            <div className="d-flex align-items-center gap-2">
              <div className="hdot on" />
              <span className="hrstime">10:00 AM - 11:30 PM</span>
            </div>
          </div>
          <div className="hrsrow">
            <span className="hrsday"><i className="fas fa-calendar-day me-2" style={{color: 'var(--secondary)'}} />Sunday</span>
            <div className="d-flex align-items-center gap-2">
              <div className="hdot on" />
              <span className="hrstime">11:00 AM - 09:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3" data-aos="zoom-in">
        <div className="hrscta">
          <i className="fas fa-truck-fast fa-2x mb-3" style={{color: 'rgba(255,255,255,.8)'}} />
          <h4>Order Online</h4>
          <p>Get hot food delivered in 25 minutes</p>
          <a href="#menu" className="btnw">Order Now ?</a>
        </div>
      </div>
      <div className="col-lg-4" data-aos="fade-left">
        <div className="hrscard">
          <h5 style={{color: '#fff', marginBottom: 18, fontFamily: '"Poppins",sans-serif', fontSize: '.95rem', fontWeight: 700}}><i className="fas fa-map-marker-alt me-2" style={{color: 'var(--secondary)'}} />Find Us</h5>
          <div className="hrsrow"><span className="hrsday"><i className="fas fa-location-dot me-2" style={{color: 'var(--secondary)'}} />Address</span><span className="hrstime" style={{fontSize: '.8rem'}}>42 Flavor Street, NY</span></div>
          <div className="hrsrow"><span className="hrsday"><i className="fas fa-phone me-2" style={{color: 'var(--secondary)'}} />Phone</span><span className="hrstime" style={{fontSize: '.8rem'}}>+1 (800) 123-4567</span></div>
          <div className="hrsrow"><span className="hrsday"><i className="fas fa-envelope me-2" style={{color: 'var(--secondary)'}} />Email</span><span className="hrstime" style={{fontSize: '.8rem'}}>hello@sarabfood.com</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<UFooter/>
    </div>
  )
}

export default UChef
