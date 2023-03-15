import React from 'react'
import "./about.css";
import aboutImg from "../../assests/myImg.jpg";
import Cards from '../../components/card/Cards';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <>
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        {/* Section */}
        <div className='container about-container'>
          <div className='about-me'>
            <div className="about-me-image">
              <img src={aboutImg} alt="Image Not Found" />
            </div>
          </div>

          <div className='about-contant'>
            <div className="about-cards">

              {/* Ist Card */}
              <Cards icon={<FaAward />} title="Experience" description="2+ Year Working" />

              {/* 2nd Card */}
              <Cards icon={<FiUsers />} title="Clients" description="200+ WorldWide" />

              {/* 3rd Card */}
              <Cards icon={<VscFolderLibrary />} title="Project" description="80+ Completed" />

            </div>

            {/* Paragraph */}
            <p>
              As a Full Stack Developer with 2 years of experience, I have a proven track record of delivering high-quality software solutions. I specialize in JavaScript, React, Node.js, MonogoDB, React Native and
              Next Js. I have worked on a variety of projects in different domains.

              Throughout my career, I have demonstrated strong problem-solving skills, an ability to work collaboratively with cross-functional teams, and a dedication to continuous learning. I am passionate about staying up-to-date with the latest technologies and industry trends, and enjoy exploring new tools and frameworks to improve the efficiency and effectiveness of my work.
            </p>

            {/* Button */}
            <a href="#contact" className='btn btn-primary'>
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
