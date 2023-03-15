import React from 'react'
import CV from "../../assests/Muhammad's Resume.pdf";
export default function Button() {
  return (
    <>
        <div className="cta">
            <a href={CV} download className='btn btn-outline-primary'>
                Download CV
            </a>
            <a href="#contact" className='btn btn-primary'>
                Let's Talk
            </a>
        </div>
    </>
  )
}
