import React from 'react'
import Productcard from './Components/Productcard'
import UserProfile from './Components/UserProfile'
import DeafultProps from './Components/DeafultProps'
import ProductList from './Components/ProductList'

const App = () => {
  return (
    <div>
      <h1> 👉 This is Props Component</h1>
      <Productcard productname='Headphone' price='₹299'/>
      <h1> 👉 This is User Profile</h1>
<UserProfile  username="Surendra Parmar"
        followers={1250}
        profilePic="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww"/>

        <h1> 👉 This is User Profile Default Values</h1>
        <DeafultProps username='Surya' profilePic={'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D'}/>
        <h1> 👉 the Products Lists</h1>
        <ProductList productName="Wireless Headphones"
        price={2499}/>
    </div>
  )
}

export default App
