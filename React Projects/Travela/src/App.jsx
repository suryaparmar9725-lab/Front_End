// import React, { createContext, useContext } from "react"



import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Website/Home"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Website/About"
import Services from "./Website/Services"
import Packeges from "./Website/Packeges"
import Blog from "./Website/Blog"
import EditeProfile from "./Website/EditeProfile"
import Register from "./Website/Register"
import Destination from "./Website/Destination"
import Explore from "./Website/Explore"
import Testimonial from "./Website/Testimonial"
import TourBooking from "./Website/TourBooking"
import Galary from "./Website/Galary"
import TravelGuid from "./Website/TravelGuid"
import Contact from "./Website/Contact"
import Login from "./Website/Login"
import NotFound from "./Website/NotFound"
import Dashboard from "./Admin/Apages/Dashboard"
import Blogmanage from "./Admin/Apages/Blogmanage"
import Adesination from "./Admin/Apages/Adesination"
import AdminExplore from "./Admin/Apages/AdminExplore"
import TravelBooking from "./Admin/Apages/TravelBooking"
import AdminGalary from "./Admin/Apages/AdminGalary"
import AtravelGuid from "./Admin/Apages/AtravelGuid"
import Atestimonial from "./Admin/Apages/Atestimonial"
import Aservices from "./Admin/Apages/Aservices"
import AContact from "./Admin/Apages/AContact"

import ATour from "./Admin/Apages/ATour"
import AtourAdd from "./Admin/Apages/AtourAdd"
// import Blogadd from "./Admin/Apages/BlogAdd"
import AserviceAdd from "./Admin/Apages/AserviceAdd"
import AddDesti from "./Admin/Apages/AddDesti"

  import { Bounce, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import Addgalary from "./Admin/Apages/Addgalary"
import AdminLogin from "./Admin/Apages/AdminLogin"
import Aregister from "./Admin/Apages/Aregister"
import BlogAdd from "./Admin/Apages/BlogAdd"




const App = () => {



  return (
    <div>





  {/* private routers */}

{/*   
  <Route path="/dash" element={<Dashboard/>} />
  <Route path="/adesti" element={<Adesination/>} />
  <Route path="/adminex" element={<AdminExplore/>} />
  <Route path="/travelbooking" element={<TravelBooking/>} />
  <Route path="/agalary" element={<AdminGalary/>} />
  <Route path="/travlguid" element={<AtravelGuid/>} />
  <Route path="/Atesti" element={<Atestimonial/>} />
<Route path="/blogmanage" element={<Blogmanage/>} />
  <Route path="/Aservices" element={<Aservices/>} />
  <Route path="/Acontect" element={<AContact/>} />
  <Route path="/ATour" element={<ATour/>} />
  <Route path="/ATourAdd" element={<AtourAdd/>} /> */}
  {/* <Route path="/BlogAdd" element={<BlogAdd/>} /> */}
  {/* <Route path="/blogadd" element={<Blogadd/>}/>
  <Route path="/Aserviceadd" element={<AserviceAdd/>}/>
  <Route path="/Adddesti" element={<AddDesti/>}/>
  <Route path="/addgalary" element={<Addgalary/>}/>
  <Route path="/register" element={<Aregister/>}/> 
  <Route path="/adminlogin" element={<AdminLogin/>}/>
  */}
  <BrowserRouter>
 <ToastContainer
  position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Slide}
/> 

  <Routes>

    {/* Admin side routes */}

<Route path="/dash" element={<Dashboard/>} />
  <Route path="/adesti" element={<Adesination/>} />
  <Route path="/adminex" element={<AdminExplore/>} />
  <Route path="/travelbooking" element={<TravelBooking/>} />
  <Route path="/agalary" element={<AdminGalary/>} />
  <Route path="/travlguid" element={<AtravelGuid/>} />
  <Route path="/Atesti" element={<Atestimonial/>} />
<Route path="/blogmanage" element={<Blogmanage/>} />
  <Route path="/Aservices" element={<Aservices/>} />
  <Route path="/Acontect" element={<AContact/>} />
  <Route path="/ATour" element={<ATour/>} />
  <Route path="/ATourAdd" element={<AtourAdd/>} /> 
<Route path="/BlogAdd" element={<BlogAdd/>} /> 
   {/* <Route path="/blogadd" element={<Blogadd/>}/> */}
  <Route path="/Aserviceadd" element={<AserviceAdd/>}/>
  <Route path="/Adddesti" element={<AddDesti/>}/>
  <Route path="/addgalary" element={<Addgalary/>}/>
  <Route path="/register" element={<Aregister/>}/> 
  <Route path="/adminlogin" element={<AdminLogin/>}/>

    {/* user side routes  */}
  <Route path="/about" element={<About/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/userregister" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/tesimonial" element={<Testimonial/>}/>

  <Route path="/Packages" element={<Packeges/>}/>
  <Route path="/blog" element={<Blog/>}/>

  <Route path="/explore" element={<Explore/>}/>
  <Route path="/contact" element={<Contact/>}/>
<Route path="/edit" element={<EditeProfile/>}/>
<Route path="/destin" element={<Destination/>}/>
<Route path="/trguid" element={<TravelGuid/>}/>
  <Route path="/trbooking" element={<TourBooking/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/galary" element={<Galary/>}/>
<Route path="*" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
  





  {/* </Routes>



</BrowserRouter> */}



    </div>
  )
}


export default App
