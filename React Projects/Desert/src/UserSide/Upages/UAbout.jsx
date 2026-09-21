import React from 'react'
import Header from '../UCommon/Header'
import UFooter from '../UCommon/UFooter'

const UAbout = () => {
  return (
    <div>
        <Header/>
    {/* ABOUT */}
<section id="about">
  <div className="container mb-3 mt-5">
    <div className="row align-items-center g-5">
      <div className="col-lg-5" data-aos="fade-right">
        <div className="astack">
          <div className="aexp"><span className="anum">12+</span><small>Years of<br />Excellence</small></div>
          <div className="amain"><img src="img/about1.jpg" alt="Restaurant" /></div>
          <div className="asm"><img src="img/about2.jpg" alt /></div>
        </div>
      </div>
      <div className="col-lg-7" data-aos="fade-left">
        <span className="slbl">Our Story</span>
        <h2 className="stitle text-start">We Invite You to Visit<br />Our <span>Food Restaurant</span></h2>
        <div className="sline lft" />
        <p className="sdesc mb-4">Founded in 2012, Sarab began as a small corner joint with a big dream - to serve food that brings people together. Today we're proud to serve thousands of happy customers every week with the same passion that started it all.</p>
        <div className="mb-4">
          <div className="fti">
            <div className="ftico r"><i className="fas fa-leaf" /></div>
            <div>
              <h6>100% Fresh Ingredients</h6>
              <p>We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness.</p>
            </div>
          </div>
          <div className="fti">
            <div className="ftico y"><i className="fas fa-award" /></div>
            <div>
              <h6>Award-Winning Recipes</h6>
              <p>Our signature recipes have won national culinary awards 5 years in a row.</p>
            </div>
          </div>
          <div className="fti">
            <div className="ftico g"><i className="fas fa-shipping-fast" /></div>
            <div>
              <h6>Lightning-Fast Delivery</h6>
              <p>Order online and get hot, fresh food at your door in under 25 minutes, guaranteed.</p>
            </div>
          </div>
        </div>
        <a href="#menu" className="btn-red"><i className="fas fa-book-open" />View Full Menu</a>
      </div>
    </div>
  </div>
</section>

<UFooter/>
      
    </div>
  )
}

export default UAbout
