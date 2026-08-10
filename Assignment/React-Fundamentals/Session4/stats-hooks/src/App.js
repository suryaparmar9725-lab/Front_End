import React from 'react'
import LikeButton from './Components/LikeButton'
import CardItem from './Components/CardItem'
import SongVote from './Components/SongVote'
import Rating from './Components/Rating'

const App = () => {
  return (
    <div>
      <h1>👉 Task state Manage with Like button</h1>
      <LikeButton/>
      <h1>👉 Card Items</h1>
      <CardItem/>
      <h1>👉 Song Vote Component</h1>
      <SongVote/>
      <h1>👉 Rating Zomato Restaurant </h1>
      <Rating/>
    </div>
  )
}

export default App