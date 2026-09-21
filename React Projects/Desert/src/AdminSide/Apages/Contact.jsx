import React from 'react'
import Aheader from '../Acommon/Aheader'
import Footer from '../Acommon/Footer'

const Contact = () => {
  return (
    <div>

            <Aheader/>
        {/* ============================================================
   FIX 6 � CONTACT FORM
   ============================================================ */}
<section id="contact-section">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <span className="slbl">Get In Touch</span>
      <h2 className="stitle">Contact <span>Us</span></h2>
      <div className="sline" />
      <p className="sdesc mx-auto" style={{maxWidth: 480}}>Have a question, feedback, or want to plan a special event? We'd love to hear from you.</p>
    </div>
    <div className="row g-4">
      <div className="col-lg-4" data-aos="fade-right">
        <div className="ctdark">
          <h4>Let's Talk</h4>
          <p className="ctsub">We typically respond within 2 hours during business hours.</p>
          <div className="ctitem">
            <div className="cticon"><i className="fas fa-map-marker-alt" /></div>
            <div className="ctinfo"><strong>Address</strong><span>42 Flavor Street, Manhattan,<br />New York, NY 10001</span></div>
          </div>
          <div className="ctitem">
            <div className="cticon"><i className="fas fa-phone-alt" /></div>
            <div className="ctinfo"><strong>Phone</strong><span>+1 (800) 123-4567</span></div>
          </div>
          <div className="ctitem">
            <div className="cticon"><i className="fas fa-envelope" /></div>
            <div className="ctinfo"><strong>Email</strong><span>hello@sarabfood.com</span></div>
          </div>
          <div className="ctitem">
            <div className="cticon"><i className="fas fa-clock" /></div>
            <div className="ctinfo"><strong>Working Hours</strong><span>Wed - Sun: 9 AM - 11 PM</span></div>
          </div>
          <div className="ctsocrow">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-youtube" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-8" data-aos="fade-left">
        <div className="fcard">
          <div className="row g-3">
            <div className="col-sm-6"><label className="flbl">Your Name *</label><input type="text" className="fctrl" placeholder="John Doe" /></div>
            <div className="col-sm-6"><label className="flbl">Email Address *</label><input type="email" className="fctrl" placeholder="you@email.com" /></div>
            <div className="col-sm-6"><label className="flbl">Phone Number</label><input type="tel" className="fctrl" placeholder="+1 (800) 000-0000" /></div>
            <div className="col-sm-6">
              <label className="flbl">Subject *</label>
              <select className="fctrl">
                <option>General Inquiry</option>
                <option>Catering &amp; Events</option>
                <option>Feedback</option>
                <option>Partnership</option>
                <option>Media &amp; Press</option>
              </select>
            </div>
            <div className="col-12"><label className="flbl">Message *</label><textarea className="fctrl" rows={5} placeholder="Write your message here..." defaultValue={""} /></div>
            <div className="col-12"><button className="btn-red" id="ctcBtn"><i className="fas fa-paper-plane" />Send Message</button></div>
          </div>
          <div className="sucmsg" id="ctcOk">
            <i className="fas fa-check-circle" />
            <p>Message sent! We'll reply within 2 hours.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>

    </div>
  )
}

export default Contact
