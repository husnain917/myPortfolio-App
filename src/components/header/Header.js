import React from 'react'
import Button from '../button/Button';
import "./header.css";
import meImg from "../../assests/myImg-removebg-preview.png";
import HeaderSocial from './HeaderSocial';
export default function Header() {
  return (
    <header>
      <div className="container container-header">
        <h5>Hello I'am</h5>
        {/* <h1>Muhammad Husnain</h1> */}
        <h1>Muhammad Husnain</h1>
        <h5 className='text-light'>
          React Developer
        </h5>

        {/* Buttons */}
        <Button />

        {/* Socials */}
        <HeaderSocial />

        <div className='me'>
            <img src={meImg} alt="Image Not Found" />
        </div>

        {/* Scroll Down */}
        <a href='#contact' className='scroll-down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}
