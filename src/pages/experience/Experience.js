import React from 'react'
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import ExperiencedCard from '../../components/experienceCard/ExperiencedCard';

export default function Experience() {
  return (
    <>
      <section id='experience'>

        {/* Title */}
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        {/* Section */}
        <div className="container experience-container">
          <div className='row'>
            {/* section 1 */}
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='experience-frontend'>
                <h3>Frontend Development</h3>
                <div className='container'>
                  <div className="row">
                    <div className="col-6">
                      <ExperiencedCard icon={<BsPatchCheckFill />} title="HTML" description="Experienced" />

                      <ExperiencedCard icon={<BsPatchCheckFill />} title="CSS" description="Intermediate" />

                      <ExperiencedCard icon={<BsPatchCheckFill />} title="BootStrap" description="Experienced" />
                    </div>
                    <div className="col-6">
                      <ExperiencedCard icon={<BsPatchCheckFill />} title="JavaScript" description="Experienced" />

                      <ExperiencedCard icon={<BsPatchCheckFill />} title="Material Ui" description="Intermediate" />

                      <ExperiencedCard icon={<BsPatchCheckFill />} title="React" description="Experienced" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* section 2 */}
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='experience-backend'>
                <h3>Backend Development</h3>
                <div className='container'>
                  <div className="row">
                    <div className="col-6">
                      <ExperiencedCard icon={<BsPatchCheckFill />} title="Node js" description="Intermediate" />

                      <ExperiencedCard icon={<BsPatchCheckFill />} title="MongoDB" description="Intermediate" />

                      <ExperiencedCard icon={<BsPatchCheckFill />} title="PHP" description="Experienced" />
                    </div>
                    <div className="col-6">
                      <ExperiencedCard icon={<BsPatchCheckFill />} title="MySQL" description="Experienced" />

                      <ExperiencedCard icon={<BsPatchCheckFill />} title="ReactNative" description="Intermediate" />

                      <ExperiencedCard icon={<BsPatchCheckFill />} title="Python" description="Intermediate" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
