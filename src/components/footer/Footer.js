import React from 'react';
import './Footer.css'
import {Items, Sociomedia} from '../item'
import Logo from '../images/logo.svg'

export default function Footer(){
  return(
    <footer>
      <div className="footer-content container">
        <div className="top">
          <img className= "logo" src={Logo} alt="Loopstudios logo" />
          <ul>
            {Items.map((item, index) => (
              <li key={index} className={item.footerName}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bottom">
          <div className="socioplatform">
            {Sociomedia.map((media, index) => (
              <i key={media.name} className={`${media.icon} ${media.cName}`}></i>
            ))}
          </div>

          <p>&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
