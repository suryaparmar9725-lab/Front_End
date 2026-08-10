import React from 'react'

const Playlist = ({song}) => {
  return (
    <div>
       <div>
      <h2>🎵 Playlist</h2>

      <ul>
        {song.map((song, index) => (
          <li key={index}>
            <strong>{song.title}</strong> - {song.artist}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Playlist
