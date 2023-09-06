import React from 'react';
import './home.css';
import imageSrc from './jerome.jpg';

function Home() {
  return (
    <section id='Home'>
      <div className="content-left">
        <h1 className="text-animation">Welcome to my website</h1>
        <p className="text-animation">I am Jerome Cesar Aguas, and this website is for school purposes only.</p>
        <p className="text-animation">Contact me on:</p>
        {/* Gmail Button */}
        <a href="https://github.com/CsarJerome" className="button gmail-button" target="_blank" rel="noopener noreferrer">
          Connect to Git Hub
        </a>
        {/* Facebook Button */}
        <a href="https://www.facebook.com/jeromecesar02/" className="button facebook-button" target="_blank" rel="noopener noreferrer">
          Connect on Facebook
        </a>
      </div>
      <div className="content-right">
        <img className="top-right-image" src={imageSrc} alt="Jerome" />
      </div>
    </section>
  );
}
export default Home;

