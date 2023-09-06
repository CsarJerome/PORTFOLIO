import React from 'react';
import './project.css';
import emergencyImage from './EMERGENCY.png';
import billImage from './BILL.png';  // Import the image

function Projects() {
  return (
    <section id="Projects">
      <div className="container">
        <div className="intro-text">
          <h2>PROJECTS</h2>
          <p>One approach to guarantee that everyone learns and gains experience in the industry is through projects. This is the section of the website where some of the initiatives our group hopes to carry out or build.</p>
        </div>
        <div className="column">
          <h1>GPS EMERGENCY TRACKER</h1>
          <img src={emergencyImage} alt="Emergency Tracker" />
          <p>There should be a quicker and more effective reaction to the emergency. Through the usage of the app, this GPS emergency tracker We can use it to find the closest hospital, fire station, or police department. Using the application is an alternative to calling 911. and simply click the service's button when you need it.</p>
        </div>
        <div className="column">
          <h1>ELECTRICITY BILL TRACKER</h1>
          <img src={billImage} alt="Bill Tracker" />
          <p>Have you ever been taken aback or questioned why your monthly electricity bill is so high? Our group is hoping to produce a tool that allows consumers to examine their daily bills, which are updated every 12 hours. Allowing them to do so will assist the consumer be conscious of their daily electricity use so they may decide if they should save electricity to reduce high costs.</p>
        </div>
        <div className="column">
          <h1>POSTURE FIXER</h1>
          <p>The posture fixer is one of our projects that we hope to carry out. Today, some of us use computers on a regular basis, for instance. We students use our computers to listen to our class lectures all day. Even some people have a home office setup. Long periods of sitting can harm our posture. Some of us are already hunched over. We would like to create software or an application that will alert the user if is maintaining his/her posture through slouching.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
