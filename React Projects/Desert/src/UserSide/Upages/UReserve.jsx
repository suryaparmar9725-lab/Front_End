import React from 'react'
import Header from '../UCommon/Header'
import UFooter from '../UCommon/UFooter'

const UReserve = () => {
  return (

    <div>
        <Header/>
         {/* RESERVATION FORM */}
<section id="reservation">
  <div style={{marginBottom:'200px',padding:'3vw'}} className="container ">
    <div className="text-center mb-5" data-aos="fade-up">
      <span className="slbl">Book a Table</span>
      <h2 className="stitle">Make a <span>Reservation</span></h2>
      <div className="sline" />
      <p className="sdesc mx-auto" style={{maxWidth: 480}}>Reserve your table for a memorable dining experience. We recommend booking 24 hours in advance for weekend evenings.</p>
    </div>
    <div className="row g-4 align-items-start">
      <div className="col-lg-4" data-aos="fade-right">
        <div style={{background: 'var(--dark)', borderRadius: 18, padding: 36}}>
          <h4 style={{color: '#fff', fontSize: '1.3rem', marginBottom: 8}}>Contact Info</h4>
          <p style={{color: 'rgba(255,255,255,.55)', fontSize: '.85rem', marginBottom: 26}}>We're happy to help you plan the perfect dining experience.</p>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3">
              <div style={{width: 46, height: 46, borderRadius: 11, background: 'rgba(232,40,26,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.1rem', flexShrink: 0}}><i className="fas fa-clock" /></div>
              <div><strong style={{display: 'block', color: '#ccc', fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.8px'}}>Opening Hours</strong><span style={{color: '#fff', fontSize: '.87rem'}}>Wed - Sun, 9 AM - 11 PM</span></div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div style={{width: 46, height: 46, borderRadius: 11, background: 'rgba(232,40,26,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.1rem', flexShrink: 0}}><i className="fas fa-phone-alt" /></div>
              <div><strong style={{display: 'block', color: '#ccc', fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.8px'}}>Call for Booking</strong><span style={{color: '#fff', fontSize: '.87rem'}}>+1 (800) 123-4567</span></div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div style={{width: 46, height: 46, borderRadius: 11, background: 'rgba(232,40,26,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.1rem', flexShrink: 0}}><i className="fas fa-users" /></div>
              <div><strong style={{display: 'block', color: '#ccc', fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.8px'}}>Group Dining</strong><span style={{color: '#fff', fontSize: '.87rem'}}>Special menus for 10+ guests</span></div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div style={{width: 46, height: 46, borderRadius: 11, background: 'rgba(232,40,26,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.1rem', flexShrink: 0}}><i className="fas fa-map-marker-alt" /></div>
              <div><strong style={{display: 'block', color: '#ccc', fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.8px'}}>Location</strong><span style={{color: '#fff', fontSize: '.87rem'}}>42 Flavor Street, NY</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8" data-aos="fade-left">
        <div className="fcard">
          <div className="row g-3">
            <div className="col-sm-6"><label className="flbl">Full Name *</label><input type="text" className="fctrl" placeholder="John Doe" /></div>
            <div className="col-sm-6"><label className="flbl">Phone Number *</label><input type="tel" className="fctrl" placeholder="+1 (800) 000-0000" /></div>
            <div className="col-sm-6"><label className="flbl">Email Address *</label><input type="email" className="fctrl" placeholder="you@email.com" /></div>
            <div className="col-sm-6">
              <label className="flbl">Number of Guests *</label>
              <select className="fctrl">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 - 4 People</option>
                <option>5 - 6 People</option>
                <option>7 -10 People</option>
                <option>10+ People</option>
              </select>
            </div>
            <div className="col-sm-6"><label className="flbl">Date *</label><input type="date" className="fctrl" /></div>
            <div className="col-sm-6">
              <label className="flbl">Time *</label>
              <select className="fctrl">
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
                <option>02:00 PM</option>
                <option>06:00 PM</option>
                <option>07:00 PM</option>
                <option>08:00 PM</option>
                <option>09:00 PM</option>
                <option>10:00 PM</option>
              </select>
            </div>
            <div className="col-12"><label className="flbl">Special Requests</label><textarea className="fctrl" rows={3} placeholder="Allergies, dietary needs, special occasions..." defaultValue={""} /></div>
            <div className="col-12"><button className="btn-red w-100 justify-content-center" id="resBtn"><i className="fas fa-calendar-check" />Confirm Reservation</button></div>
          </div>
          <div className="sucmsg" id="resOk">
            <i className="fas fa-check-circle" />
            <p>Table reserved! We'll confirm via email shortly.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <UFooter/>
    </div>
  )
}

export default UReserve
