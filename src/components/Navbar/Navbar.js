import React, {useState, useRef, useEffect} from 'react';
import Logo from '../images/logo.svg'
import {Items} from '../item'
import "./Navbar.css"
// <i class="ri-close-line"></i>
// <i class="ri-menu-line"></i>

export default function Navbar() {

  const [menuToggler, setMenuToggler] = useState(false)
  const menu = useRef()

  function handleClick(){
    setMenuToggler(!menuToggler)
  }

  useEffect(() => {
    if(menuToggler){
      menu.current.style.left = "0%"
      menu.current.style.transition = ".2s left ease-in"
    }else{
      menu.current.style.left = "-100%"
      menu.current.style.transition = ".2s left ease-out"
    }
  },[menuToggler])

  return(
    <nav>
      <div className="nav-content nav-wrapper">
        <img className= "logo" src={Logo} alt="Loopstudios logo" />
        <div onClick={() => handleClick()} className="navigator">
          {menuToggler ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
        </div>

        <ul ref={menu}>
          {Items.map((item, index) => (
            <li key={index} className={item.footerName}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
