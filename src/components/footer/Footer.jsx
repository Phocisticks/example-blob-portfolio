import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>CASPER</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/casper-shepard-9b4848b4/"><BsLinkedin/></a>
        </div>

        <div className="footer__copyright">
            <small>Shout out to Mark Glose for helping me</small>
        </div>
    </footer>
  )
}

export default Footer