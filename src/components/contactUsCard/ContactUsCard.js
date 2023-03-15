import React from 'react'

export default function ContactUsCard(props) {
  return (
    <>
        <article className='card-option'>
            <span>
                {props.icon}
            </span>
            <h4>
                {props.title}
            </h4>
            <h6>
                {props.autName}
            </h6>
            <a href={props.description} style={{textDecoration:"none"}} target="_blank">
                Send a message
            </a>
        </article>
    </>
  )
}
