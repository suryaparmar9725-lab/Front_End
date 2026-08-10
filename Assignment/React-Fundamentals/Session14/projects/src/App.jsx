import React from 'react'
import Profilecards from './Components/Profilecards'
import ProfileUpdate from './Components/ProfileUpdate';

const App = () => {

   const socialLinks = [
    {
      platform: "Instagram",
      url: "https://instagram.com/example",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/example",
    },
    {
      platform: "GitHub",
      url: "https://github.com/example",
    },
  ];

  return (
    <div className='d-flex '>

  
        <div
        className='same'
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "40px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📸 InstaBio</h1>
      <p style={{ textAlign: "center", color: "#555" }}>
        Welcome to my profile page
      </p>

      </div>

     <div className='same'>
      
        <h1>👉 Insta BIO</h1>
        <Profilecards
         name="Surendra Parmar"
        profilePic="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        bio="hello my name is surendra parmar and i am Frontend Devloper."
        />
      </div>  
     <div className='same'>
      
       <h1>👉 Insta BIO Update Profile</h1>
        <Profilecards  name="Annu Saiyad"
        profilePic="https://randomuser.me/api/portraits/women/65.jpg"
        bio="Hello my name is Annu and i am a Loyer."/>
      </div>  
      <div className='same'>
         <h1>👉 Social Links</h1>
         <ProfileUpdate  name="Surya "
        profilePic="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
        bio="Indian cricketer and former captain of the Indian national team."
        socialLinks={socialLinks}/>
      </div>
       
      
      
    </div>
  )
}

export default App
