import React from 'react';
import './Jumbotron.css'
import Navbar from './Navbar/Navbar'

export default function Jumbotron() {
  return(
    <header>
      <div className="header-content">
        <Navbar/>
        <div className="container">
          <div className="landing-text">
            <h1>IMMERSIVE EXPERIENCES THAT <span>DELIVER</span></h1>
          </div>
        </div>
      </div>
    </header>
  )
}
