import React from 'react'

export default function PortfolioCard(props) {
    return (
        <>
            <article className='portfolio-item'>
                <div className='portfolio-item-img'>
                    <img src={props.img} alt="Image Not Found" />
                </div>
                <h3>
                    Protfolio Template
                </h3>
                <div className="portfolio-item-cta">
                    <a href="https://github.com/" className='btn btn-outline-primary' target={"_blank"}>
                        Github
                    </a>
                    <a href="https://dribbble.com/" target={"_blank"} className='btn btn-primary'>
                        Live Demo
                    </a>
                </div>
            </article>
        </>
    )
}
