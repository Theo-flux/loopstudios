import React, {useState, useEffect} from 'react';
import './Section.css'
import {SectionItems} from '../item'

export default function Section(){

  const [width, setWidth] = useState("0")

  function handleWidth() {
    return window.innerWidth
  }

  useEffect(()=>{
    setWidth()
  }, [width, setWidth])

  console.log(width)
  // console.log(window.innerWidth);
  return(
    <div className="section">
      <div className="section-flex container">
        <div className="top"><h2>Our creations</h2></div>
        {SectionItems.map((item,index) => (
          <div key={item.id} className="flex-item">
            <img src={item.src_mobile} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
