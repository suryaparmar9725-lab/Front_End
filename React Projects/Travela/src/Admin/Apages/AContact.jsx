import React from 'react'
import Aheader from '../Acomon/Aheader'
import Ahero from '../Acomon/Ahero'

const AContact = () => {
  return (
    <div>
        <Aheader/>
        <Ahero title='Contact US' name='Contact' />

 <div className="container py-5">
  <div className="contact-section">
    <h2 className="fw-bold mb-3">Send us a message</h2>
    <p className="text-dark fs-5">
      The contact form is currently inactive. Get a functional and working
      contact form with Ajax &amp; PHP in a few minutes.
      Just copy and paste the files, add a little code and you're done.
      <a href="#">Download Now</a>
    </p>
    <form>
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <input type="text" className="form-control form-control-lg" placeholder="Your Name" />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control form-control-lg" placeholder="Your Email" />
        </div>
      </div>
      <div className="mb-4">
        <input type="text" className="form-control form-control-lg" placeholder="Subject" />
      </div>
      <div className="mb-4">
        <textarea className="form-control" rows={8} placeholder="Message" defaultValue={""} />
      </div>
      <button type="submit" className="btn btn-outline-primary py-3 w-100">
        Send Message
      </button>
    </form>
  </div>
</div>

      
    </div>
  )
}

export default AContact
