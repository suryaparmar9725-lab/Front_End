import React from 'react'
import TrendMovies from './Components/TrendMovies'
import AddplayList from './Components/AddplayList'
import Restaurents from './Components/Restaurents'
import MovieHandle from './Components/MovieHandle'
import AddComments from './Components/AddComments'



const App = () => {
  return (
    <div className='d-flex flex-wrap'>


      <div className='same'>
          <h1>👉 Trending Movies use useEffect</h1>
      <TrendMovies/>
        </div> 
      <div className='same'>
          <h1>👉 Add Play List</h1>
      <AddplayList/>
        </div> 
      <div className='same'>
          <h1>👉 Restaurent Search</h1>
      <Restaurents/>
        </div> 
      <div className='same'>
          <h1>👉 Movies Handle Loading error</h1>
      <MovieHandle/>
        </div> 
      <div className='same'>
          <h1>👉 Add  Comments</h1>
      <AddComments/>
        </div> 
     
    </div>
  )
}

export default App
