import React from 'react'
import { Bounce, Slide, ToastContainer, Zoom, toast } from 'react-toastify';

import UHome from './UserSide/Upages/UHome'
import UAbout from './UserSide/Upages/UAbout'
import UMenu from './UserSide/Upages/UMenu'
import UChef from './UserSide/Upages/UChef'
import UReserve from './UserSide/Upages/UReserve'
import UReview from './UserSide/Upages/UReview'
import UContact from './UserSide/Upages/UContact'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoryManage from './AdminSide/Apages/CategoryManage'
import AddCategory from './AdminSide/Apages/AddCategory'
import MenuManage from './AdminSide/Apages/MenuManage';
import AddMenu from './AdminSide/Apages/AddMenu';
import ManagandAddNavbar from './AdminSide/Acommon/ManagandAddNavbar';
import ChefManage from './AdminSide/Apages/ChefManage';
import AddChef from './AdminSide/Apages/AddChef';
import Register from './UserSide/Upages/Register';
import Login from './UserSide/Upages/Login';
import EditeProfile from './UserSide/Upages/EditeProfile';

const App = () => {
  return (
    
    <div>
    

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

      

      {/* User Side Routing */}

      <Route path='/' element={<UHome/>} />
      <Route path='/Uabout' element={<UAbout/>} />
      <Route path='/Umenu' element={<UMenu/>} />
      <Route path='/UChef' element={<UChef/>} />
      <Route path='/Ureserve' element={<UReserve/>} />
      <Route path='/Ureview' element={<UReview/>} />
      <Route path='/Ucontact' element={<UContact/>} />
      {/* admin manage content start */}
      <Route path='/catmanage' element={<CategoryManage/>} />
      <Route path='/Addcategory' element={<AddCategory/>} />
      <Route path='/menumanage' element={<MenuManage/>} />
      <Route path='/addmenu' element={<AddMenu/>} />
      <Route path='/addmanagenav' element={<ManagandAddNavbar/>} />
      <Route path='/chef' element={<ChefManage/>} />
      <Route path='/addchef' element={<AddChef/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Editprofile' element={<EditeProfile/>} />

      


      


      </Routes>
      </BrowserRouter>
      
{/*       
   <Aheader/>
   <Ahome/>
   <AAbout/>
   <AMenu/>
   {/* <Aoffers/> */}
   {/* <Ahistory/>
   <Achef/> */}
   {/* <Areview/>
   <Areservation/>
   <Ablog/>
   <Contact/>
   <Footer/> */} 
    </div>
  )
}

export default App
