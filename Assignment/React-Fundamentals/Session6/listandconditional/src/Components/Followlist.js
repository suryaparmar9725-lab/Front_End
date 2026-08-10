import React from 'react'

const Followlist = ({followers}) => {
  return (
    <div>
         <div>
      <h2>Followers</h2>

      {followers.length === 0 ? (
        <p>No followers yet</p>
      ) : (
        <ul>
          {followers.map((username, index) => (
            <li key={index}>{username}</li>
          ))}
        </ul>
      )}
    </div>
      
    </div>
  )
}

export default Followlist
