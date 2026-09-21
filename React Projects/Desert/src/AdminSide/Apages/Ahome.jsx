import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Footer from '../Acommon/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'

const Ahome = () => {

  const [category,setcategory] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async(e) =>{
    try {
      const res = await axios.get(`http://localhost:3000/Category`)
      setcategory(res.data)
      // console.log(res.data);
      
    } catch (error) {
        toast.error('DATA NOT FOUND')
    }
  }

    return (
    <div>
        <Aheader/>
        <div>
  <div id="searchOv">
    <button className="sovclose" id="searchClose"><i className="fas fa-times" /></button>
    <div className="sovbox">
      <h4>What are you craving today?</h4>
      <div className="sovinput">
        <input type="text" id="searchInput" placeholder="Search burgers, pizza, chicken..." autoComplete="off" />
        <button><i className="fas fa-search" /></button>
      </div>
      {/* Categories inside search box */}
      <div className="sovcats">
        <div className="sovcat active" data-cat="all">
          <img src="img/menu/1.jpg" alt />All Items
        </div>
        <div className="sovcat" data-cat="burgers">
          <img src="img/menu/1.jpg" alt />Burgers
        </div>
        <div className="sovcat" data-cat="pizza">
          <img src="img/menu/2.jpg" alt />Pizza
        </div>
        <div className="sovcat" data-cat="chicken">
          <img src="img/menu/3.jpg" alt />Chicken
        </div>
        <div className="sovcat" data-cat="wraps">
          <img src="img/menu/4.jpg" alt />Wraps
        </div>
        <div className="sovcat" data-cat="pasta">
          <img src="img/menu/5.jpg" alt />Pasta
        </div>
        <div className="sovcat" data-cat="desserts">
          <img src="img/menu/6.jpg" alt />Desserts
        </div>
      </div>
      <div className="sovtrend">
        <p><i className="fas fa-fire me-1" style={{color: 'var(--secondary)'}} />Trending Searches</p>
        <span className="ttag">Smash Burger</span>
        <span className="ttag">Nashville Chicken</span>
        <span className="ttag">Truffle Pizza</span>
        <span className="ttag">Lava Cake</span>
        <span className="ttag">Loaded Fries</span>
        <span className="ttag">Mango Shake</span>
      </div>
    </div>
  </div>
  {/* ============================================================
   HERO
   ============================================================ */}
  <section id="hero">
    <div className="hs hs1" />
    <div className="hs hs2" />
    <div className="hbgtxt">FOOD</div>
    <div className="container">
      <div className="row align-items-center g-5" style={{minHeight: '88vh'}}>
        <div className="col-lg-6">
          <div className="hbadge">
            <div className="hbi"><i className="fas fa-star" /></div>
            <span>#1 Rated Fast Food Restaurant in New York</span>
          </div>
          <h1 className="htitle">Delicious <span className="hl">Fast Food</span><br />for Every Moment</h1>
          <p className="hdesc">Experience bold flavors crafted from premium ingredients. From crispy burgers to gourmet pizzas - every bite is an adventure worth savoring.</p>
          <div className="d-flex flex-wrap gap-3 mb-2">
            <a href="#menu" className="btn-red"><i className="fas fa-utensils" />Explore Menu</a>
            {/* FIX 2: Magnific popup video trigger */}
            <a href="https://www.youtube.com/watch?v=RXv_uIN6e-Y" className="magnific_popup btn-play popup-youtube">
              <div className="pico"><i className="fas fa-play" /></div>
              <span>Watch Our Story</span>
            </a>
          </div>
          <div className="hstats d-flex gap-3 flex-wrap mt-4">
            <div className="hstat"><span className="snum">850<em>+</em></span><small>Happy Customers</small></div>
            <div className="sdiv" />
            <div className="hstat"><span className="snum">120<em>+</em></span><small>Menu Items</small></div>
            <div className="sdiv" />
            <div className="hstat"><span className="snum">15<em>+</em></span><small>Expert Chefs</small></div>
            <div className="sdiv" />
            <div className="hstat"><span className="snum">12<em>yr</em></span><small>Experience</small></div>
          </div>
        </div>
        <div className="col-lg-6">
          <div style={{position: 'relative', textAlign: 'center'}}>
            <div className="hcircle">
              <img src="img/banner-img.jpg" alt="Burger" />
            </div>
            <div className="fcard fc1">
              <div className="fcoi r"><i className="fas fa-fire" /></div>
              <div><span className="fcnum">Hot Deal</span><span className="fcsm">30% off today</span></div>
            </div>
            <div className="fcard fc2">
              <div className="fcoi y"><i className="fas fa-star" /></div>
              <div><span className="fcnum">4.9/5</span><span className="fcsm">2k+ reviews</span></div>
            </div>
            <div className="fcard fc3">
              <div className="fcoi g"><i className="fas fa-clock" /></div>
              <div><span className="fcnum">20 min</span><span className="fcsm">Fast delivery</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* MARQUEE */}
  <div className="mqsec">
    <div className="mqtrack">
      <div className="mqitem"><i className="fas fa-circle" />Crispy Fried Chicken</div>
      <div className="mqitem"><i className="fas fa-circle" />Gourmet Burgers</div>
      <div className="mqitem"><i className="fas fa-circle" />Artisan Pizzas</div>
      <div className="mqitem"><i className="fas fa-circle" />Fresh Wraps &amp; Rolls</div>
      <div className="mqitem"><i className="fas fa-circle" />Loaded Fries</div>
      <div className="mqitem"><i className="fas fa-circle" />Ice Cream Shakes</div>
      <div className="mqitem"><i className="fas fa-circle" />Grilled Sandwiches</div>
      <div className="mqitem"><i className="fas fa-circle" />Crispy Fried Chicken</div>
      <div className="mqitem"><i className="fas fa-circle" />Gourmet Burgers</div>
      <div className="mqitem"><i className="fas fa-circle" />Artisan Pizzas</div>
      <div className="mqitem"><i className="fas fa-circle" />Fresh Wraps &amp; Rolls</div>
      <div className="mqitem"><i className="fas fa-circle" />Loaded Fries</div>
      <div className="mqitem"><i className="fas fa-circle" />Ice Cream Shakes</div>
      <div className="mqitem"><i className="fas fa-circle" />Grilled Sandwiches</div>
    </div>
  </div>
</div>
{/* CATEGORY */}
<section id="category">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <span className="slbl">What We Offer</span>
      <h2 className="stitle">Browse by <span>Category</span></h2>
      <div className="sline" />
      <p className="sdesc mx-auto" style={{maxWidth: 480}}>From sizzling burgers to exotic world cuisines - find your favourite in our menu</p>
    </div>
    <div className="container">
      <div className="row">
        {
      category && category.map((dets,idx)=>{
          return (
             <div key={dets.id} className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay={70}>
        <div className="catcard" data-filter="burgers">
          <img className="catimg" src={dets.img} alt />
          <div className="catnm">{dets.title}</div>
          <div className="catct">{dets.Item}</div>
        </div>
      </div>
          )
      })
    }
      </div>
    </div>
  </div>
</section>

    

<Footer/>
    </div>
  )
}

export default Ahome
