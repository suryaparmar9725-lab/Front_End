import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Sociallinks = ({ links }) => {
const icons = {
    Instagram: <FaInstagram />,
    LinkedIn: <FaLinkedin />,
    GitHub: <FaGithub />,
  };


  
  return (
    <div>
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "15px",
        fontSize: "30px",
      }}
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333" }}
        >
          {icons[link.platform]}
        </a>
      ))}
    </div>
    </div>
  )
}

export default Sociallinks
