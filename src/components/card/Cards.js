import React from 'react'

export default function Cards(props) {
    return (
        <>
            <article className='about-card'>
                <span className='about-icon'>
                    {props.icon}
                </span>
                <h5>
                    {props.title}
                </h5>
                <small>
                    {props.description}
                </small>
            </article>
        </>
    )
}
