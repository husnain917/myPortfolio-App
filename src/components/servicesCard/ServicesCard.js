import React from 'react'
import { BiCheck } from "react-icons/bi";
export default function ServicesCard(props) {
  return (
    <>
        <article className="service">
            <div className='service-head'>
                <h3>
                    {props.title}
                </h3>
            </div>
            <ul className='service-list'>
                <li>
                    <BiCheck className='service-list-icon' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </li>
                <li>
                    <span className='service-list-icon'>
                        {props.icon}
                    </span>
                    <p>
                        {props.description}
                    </p>
                </li>
            </ul>
        </article>
    </>
  )
}
