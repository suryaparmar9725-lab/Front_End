import React from 'react'
import Header from '../UCommon/Header'
import UFooter from '../UCommon/UFooter'

const UHistory = () => {
  return (
    <div>
        <Header/>
      <div>
  {/* FIX 7 � GALLERY POPUP */}
  <div id="galPop">
    <div className="gpbox">
      <button className="gpclose" id="gpClose"><i className="fas fa-times" /></button>
      <img id="gpImg" src alt />
      <div className="gpcap">
        <h5 id="gpTitle" />
        <p id="gpDesc" />
      </div>
      <div className="gpnav">
        <button id="gpPrev"><i className="fas fa-chevron-left me-1" />Prev</button>
        <button id="gpNext">Next <i className="fas fa-chevron-right ms-1" /></button>
      </div>
    </div>
  </div>
  {/* ============================================================
   HISTORY � FIX 8 (alternating left/right text)
   ============================================================ */}
  <section id="history">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="slbl">Our Journey</span>
        <h2 className="stitle">A History of <span>Restaurant</span></h2>
        <div className="sline" />
        <p className="sdesc mx-auto" style={{maxWidth: 480}}>From humble beginnings to the city's most beloved restaurant - every chapter written with passion.</p>
      </div>
      <div className="timeline" data-aos="fade-up">
        {/* ODD ? text on LEFT */}
        <div className="tli">
          <div className="tl-left">
            <div className="tlyear">2012</div>
            <h5>Evolution of Restaurants</h5>
            <p>Sarab opens its first 20-seat diner on Flavor Street. Within 3 months, lines stretch around the block every evening as word of our food spreads.</p>
          </div>
          <div className="tl-center">
            <div className="tldot" />
          </div>
          <div className="tl-right">
            <div className="tlyear">2012</div>
            <h5>Evolution of Restaurants</h5>
            <p>Sarab opens its first 20-seat diner on Flavor Street. Within 3 months, lines stretch around the block every evening as word of our food spreads.</p>
          </div>
        </div>
        {/* EVEN ? text on RIGHT */}
        <div className="tli">
          <div className="tl-left">
            <div className="tlyear">2015</div>
            <h5>Fine Dining &amp; The Concept</h5>
            <p>Expanding the vision - we introduced our signature tasting menu and hired our first Michelin-trained chef, elevating our craft to remarkable new heights.</p>
          </div>
          <div className="tl-center">
            <div className="tldot" />
          </div>
          <div className="tl-right">
            <div className="tlyear">2015</div>
            <h5>Fine Dining &amp; The Concept</h5>
            <p>Expanding the vision - we introduced our signature tasting menu and hired our first Michelin-trained chef, elevating our craft to remarkable new heights.</p>
          </div>
        </div>
        {/* ODD ? text on LEFT */}
        <div className="tli">
          <div className="tl-left">
            <div className="tlyear">2019</div>
            <h5>Modern Fast Food Origins</h5>
            <p>Launched our signature fast-food line, merging gourmet quality with speed and convenience. Within 6 months we won 3 prestigious culinary awards nationally.</p>
          </div>
          <div className="tl-center">
            <div className="tldot" />
          </div>
          <div className="tl-right">
            <div className="tlyear">2019</div>
            <h5>Modern Fast Food Origins</h5>
            <p>Launched our signature fast-food line, merging gourmet quality with speed and convenience. Within 6 months we won 3 prestigious culinary awards nationally.</p>
          </div>
        </div>
        {/* EVEN ? text on RIGHT */}
        <div className="tli">
          <div className="tl-left">
            <div className="tlyear">2026</div>
            <h5>National Expansion</h5>
            <p>Now operating in 8 cities across the US with an online delivery platform handling 10,000+ orders weekly - and growing every single day.</p>
          </div>
          <div className="tl-center">
            <div className="tldot" />
          </div>
          <div className="tl-right">
            <div className="tlyear">2026</div>
            <h5>National Expansion</h5>
            <p>Now operating in 8 cities across the US with an online delivery platform handling 10,000+ orders weekly - and growing every single day.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<UFooter/>

    </div>
  )
}

export default UHistory
