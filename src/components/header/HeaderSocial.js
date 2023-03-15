import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

export default function HeaderSocial() {
  return (
    <>
        <div className="header-social">
            <a href="https://www.linkedin.com/in/muhammad-husnain-7606a0234/" target="_blank">
                <GrLinkedin />
            </a>
            <a href="https://github.com/husnain917" target="_blank">
                <FaGithub />
            </a>
            <a href="https://dribbble.com" target="_blank">
                <FiDribbble />
            </a>
        </div>
    </>
  )
}
