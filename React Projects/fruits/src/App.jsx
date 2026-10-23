import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import { Bounce, ToastContainer, toast } from 'react-toastify';
import Home from './User/pages/Home'
import Shop from './User/pages/Shop'
import Testimonial from './User/pages/Testimonial'
import Cart from './User/pages/Cart'
import Contact from './User/pages/Contact'
import Checkout from './User/pages/Checkout'
import NotFound from './User/pages/NotFound'
import ManageHeader from './Admin/ManageHeader'
import FruitManage from './Admin/FruitManage';
import VegeManage from './Admin/VegeManage';
import SellerManage from './Admin/SellerManage';
import TestiManage from './Admin/TestiManage';
import CartManage from './Admin/CartManage';
import AddFruit from './Admin/AddFruit';
import Addveg from './Admin/Addveg';
import AddSeller from './Admin/AddSeller';
import Addtesti from './Admin/Addtesti';
import AddCart from './Admin/AddCart';
import Login from './User/pages/Login';
import Register from './User/pages/Register';
import UpdateProfile from './User/pages/UpdateProfile';






const App = () => {
  return (
    <div>

      <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>

     <BrowserRouter>

    <Routes>

      {/* Admin Manage Routes */}

<Route path='/Manageheader' element={<ManageHeader/>}/>
<Route path='/FruitManage' element={<FruitManage/>}/>
<Route path='/VegManage' element={<VegeManage/>}/>
<Route path='/SellerManage' element={<SellerManage/>}/>
<Route path='/TestiManage' element={<TestiManage/>}/>
<Route path='/CartManage' element={<CartManage/>}/>

{/* Add Items  */}
<Route path='/AddFruit' element={<AddFruit/>}/>
<Route path='/AddVeg' element={<Addveg/>}/>
<Route path='/AddSeller' element={<AddSeller/>}/>
<Route path='/AddTestimonial' element={<Addtesti/>}/>
<Route path='/AddCart' element={<AddCart/>}/>

{/* Login, Register , Update Profile Routes */}

<Route path='/Login' element={<Login/>}/>
<Route path='/Register' element={<Register/>}/>
<Route path='/UpdateProfile' element={<UpdateProfile/>}/>




    {/* Pages routes */}
<Route path='/' element={<Home/>}/>
<Route path='/Shop' element={<Shop/>}/>
<Route path='/Testimonial' element={<Testimonial/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/Checkout' element={<Checkout/>}/>
<Route path='*' element={<NotFound/>}/>

    </Routes>


     </BrowserRouter>
    </div>
  )
}

export default App
