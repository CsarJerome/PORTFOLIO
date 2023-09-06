import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Certs from './Certs';
import Projects from './Projects';


function App() {
  

  return (
    
    <div className="App">
    <div>  
      <head>

        
      </head>
      <body>
        <Navbar  />
        <Home />
        <About />
        <Certs />
        <Projects />
      </body>
      </div>
    </div>
  );
}

export default App;
