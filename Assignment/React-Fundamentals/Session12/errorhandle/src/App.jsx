import React from 'react'
import Trendingsong from './Components/Trendingsong'
import ModifySongs from './Components/ModifySongs'
import IplScore from './Components/IplScore'
import Buggy from './Buggy'

const App = () => {
  return (
    <div className='d-flex'>
      <div className='same'>
        <h1>👉 Trending Song Loading Error </h1>
        <Trendingsong/>
      </div>
      <div className='same'>
        <h1>👉 Modify Songs </h1>
        <ModifySongs/>
      </div>
      <div className='same'>
        <h1>👉 IPL Score </h1>
        <IplScore/>
      </div>
      <div className='same'>
        <h1>👉 Buggy Score </h1>
        <Buggy/>
      </div>
    </div>
  )
}

export default App
