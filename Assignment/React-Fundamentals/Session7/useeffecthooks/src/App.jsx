import React from 'react'
import Tredingsong from './Components/Tredingsong'
import IplScore from './Components/IplScore'
import MovieSuggestion from './Components/MovieSuggestion'
import UserList from './Components/UserList'

const App = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
    
<div style={{boxShadow:'0px 0px 3px #333',width:'fit-content',padding:'15px',borderRadius:'10px'}}>
   <h1>👉 Trendind Song Use useEffect</h1>
     <Tredingsong/>
</div>
<div style={{boxShadow:'0px 0px 3px #333',marginBottom:'20px',marginTop:'20px',width:'fit-content',padding:'15px',borderRadius:'10px'}}>
   <h1>👉 Ipl Score Fetch</h1>
    <IplScore/>
</div>
<div style={{boxShadow:'0px 0px 3px #333',marginBottom:'20px',marginTop:'20px',width:'fit-content',padding:'15px',borderRadius:'10px'}}>
   <h1>👉Movie Suggestion</h1>
    <MovieSuggestion/>
</div>
<div style={{boxShadow:'0px 0px 3px #333',marginBottom:'20px',marginTop:'20px',width:'fit-content',padding:'15px',borderRadius:'10px'}}>
   <h1>👉User Lists</h1>
    <UserList/>
</div>



    </div>
  )
}

export default App
