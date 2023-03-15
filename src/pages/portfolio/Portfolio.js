import React from 'react'
import PortfolioCard from '../../components/portfolioCard/PortfolioCard';
import "./portfolio.css";
import imgThree from "../../assests/img3.jpg";
import imgFour from "../../assests/img4.jpg";
import imgFive from "../../assests/img5.jpg";
import imgSix from "../../assests/img6.jpg";
import imgNine from "../../assests/img9.jpg";
import imgEight from "../../assests/img8.jpg";
export default function Portfolio() {
  return (
    <>
      <section id='portfolio'>
        <h5>My React Work</h5>
        <h2>Portfolio</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
              <PortfolioCard img={imgThree} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
              <PortfolioCard img={imgFour} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
              <PortfolioCard img={imgFive} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
              <PortfolioCard img={imgSix} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
              <PortfolioCard img={imgNine} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
              <PortfolioCard img={imgEight} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
