import React from 'react'

export default function ExperiencedCard(props) {
    return (
        <>
            <article className='experience-details'>
                <span className='experience-details-icons'>
                    {props.icon}
                </span>
                <div>
                    <h4>
                        {props.title}
                    </h4>
                    <small className='text-light'>
                        {props.description}
                    </small>
                </div>
            </article>
        </>
    )
}
