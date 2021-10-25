import React from 'react';
import './Main.css'
import Interactive from '../images/desktop/image-interactive.jpg'

export default function Main(){
  return(
    <main className="container">
      <img src={Interactive} alt="boy wearing VR Googles"/>
      <div className="description">
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects
          for some of the best companies around the globe. Our award-winning creations have
          transformed businesses through digital experiences that bind to their brand
        </p>
      </div>
    </main>
  )
}
