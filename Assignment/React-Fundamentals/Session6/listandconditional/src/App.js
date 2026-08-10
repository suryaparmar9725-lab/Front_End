import React from 'react'
import Playlist from './Components/Playlist';
import Orderstatus from './Components/Orderstatus';
import Followlist from './Components/Followlist';
import Cartsummary from './Components/Cartsummary';

const App = () => {
   const song = [
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Levitating", artist: "Dua Lipa" },
    { title: "Perfect", artist: "Ed Sheeran" },
  ];

  const followers = ["surendra", "rahul", "priya", "amit"];

   const cartItems = [
    { name: "Wireless Mouse", price: 799 },
    { name: "Keyboard", price: 1499 },
    { name: "USB Cable", price: 299 },
  ];
  return (
    <div>
      <h1>👉 Playlist Song</h1>
      <Playlist song={song}/>
      <hr></hr>
      <h1>👉 Order Status</h1>
      {/* Deleverd Order*/} 
      <Orderstatus  isDelivered={true}/>
       {/* Order in Transit */}
      <Orderstatus  isDelivered={false}/>
      <hr></hr>      <h1>👉 Followers</h1>
      <Followlist followers={followers}/>
      <hr></hr>
      <h1>👉 Cartsummary Detils</h1>
      <Cartsummary cartItems={cartItems} />
    </div>
  )
}

export default App
