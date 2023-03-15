import React from 'react'
import ServicesCard from '../../components/servicesCard/ServicesCard';
import "./services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  return (
    <>
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container">
          <div className="row">
            {/* card 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <ServicesCard title="UI / UX Design" />
            </div>
            {/* card 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <ServicesCard icon={<BiCheck />} title="Web Development" description="Lorem ipsum, consectetur adipisicing elit." />
            </div>
            {/* card 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <ServicesCard title="Content Creation" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
