import React from 'react'
import "./footer.css";
import { FaFacebookF } from "react-icons/fa"; 
import { FiInstagram } from "react-icons/fi"; 
import { IoLogoTwitter } from "react-icons/io"; 

export default function Footer() {
  return (
    <>
      <footer>
        <a href="#" className='footer-logo'>
          Muhammad Husnain
        </a>

        <ul className='perma-links'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonio">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer-socials'>
          <a target={"_blank"} href="https://www.facebook.com/honey.ansari.5621">
            <FaFacebookF />
          </a>
          <a target={"_blank"} href="https://instagram.com">
            <FiInstagram />
          </a>
          <a target={"_blank"} href="https://twitter.com">
            <IoLogoTwitter />
          </a>
        </div>

        <div className='footer-copyright'>
            <small>
              &copy; Muhammad Husnain, All Right Reserved 2023. 
            </small>
        </div>
      </footer>
    </>
  )
}
