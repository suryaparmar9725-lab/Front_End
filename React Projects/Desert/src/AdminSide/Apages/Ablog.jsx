import React from 'react'
import Aheader from '../Acommon/Aheader'
import Footer from '../Acommon/Footer'

const Ablog = () => {
  return (
    <div>
        <Aheader/>

       <div>
  {/* BLOG */}
  <section id="blog">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="slbl">News &amp; Updates</span>
        <h2 className="stitle">Our Latest <span>Blog</span> Posts</h2>
        <div className="sline" />
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={0}>
          <div className="blcard">
            <div className="blimg">
              <img src="img/blog/1.jpg" alt />
              <div className="bldatebdg"><span className="bd">14</span><span className="bm">Mar</span></div>
            </div>
            <div className="blbody">
              <div className="bltag">Food &amp; Health</div>
              <div className="bltit"><a href="#">Healthy Fast Food: A Myth or Beautiful Reality</a></div>
              <div className="blmeta"><span><i className="fas fa-user" />James Writer</span><span><i className="fas fa-comment" />24 Comments</span></div>
              <a href="#" className="blmore">Read More <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={80}>
          <div className="blcard">
            <div className="blimg">
              <img src="img/blog/2.jpg" alt />
              <div className="bldatebdg"><span className="bd">28</span><span className="bm">Feb</span></div>
            </div>
            <div className="blbody">
              <div className="bltag">Food Science</div>
              <div className="bltit"><a href="#">Is Fast Food Getting Healthier? Here's What We Found</a></div>
              <div className="blmeta"><span><i className="fas fa-user" />Sarah Grain</span><span><i className="fas fa-comment" />18 Comments</span></div>
              <a href="#" className="blmore">Read More <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={160}>
          <div className="blcard">
            <div className="blimg">
              <img src="img/blog/3.jpg" alt />
              <div className="bldatebdg"><span className="bd">05</span><span className="bm">Jan</span></div>
            </div>
            <div className="blbody">
              <div className="bltag">Recipes</div>
              <div className="bltit"><a href="#">Innovative Hot Chickpeas Flake Crackin' Recipe at Home</a></div>
              <div className="blmeta"><span><i className="fas fa-user" />Chef Marcus</span><span><i className="fas fa-comment" />32 Comments</span></div>
              <a href="#" className="blmore">Read More <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* NEWSLETTER */}
  <section id="newsletter">
    <div className="nlbg" />
    <div className="container">
      <div className="nlw text-center" data-aos="zoom-in">
        <span className="slbl" style={{color: 'rgba(255,255,255,.7)'}}>Stay Connected</span>
        <h2 className="mb-3" style={{color: '#fff'}}>Subscribe &amp; Get Exclusive <span style={{color: 'var(--secondary)'}}>Deals</span></h2>
        <p className="mb-4" style={{color: 'rgba(255,255,255,.78)'}}>Get 15% off your first order plus early access to new menu items</p>
        <div className="nl-form-wrap">
          <input className="nlinput" type="email" id="nlEmail" placeholder="Enter your email address..." />
          <button className="nlbtn" id="nlBtn"><i className="fas fa-paper-plane me-1" />Subscribe</button>
        </div>
        <p style={{color: 'rgba(255,255,255,.45)', fontSize: '.76rem', marginTop: 11}}><i className="fas fa-lock me-1" />No spam, unsubscribe anytime.</p>
      </div>
    </div>
  </section>
</div>
<Footer/>
    </div>
  )
}

export default Ablog
