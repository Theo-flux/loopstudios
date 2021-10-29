import React from 'react';
import './Section.css'
import {SectionItems} from '../item'
import {useMediaQuery} from 'react-responsive'

export default function Section(){
  const isMobile = useMediaQuery({query:"(max-width:767px)"})
  const isDesktop = useMediaQuery({query:"(min-width:768px)"})

  return(
    <div className="section">
      <div className="top container"><h2>Our creations</h2></div>
      <div className="section-flex container">

        {isMobile && SectionItems.map((item,index) => (
          <div key={item.id} className="flex-item">
            <img src={item.src_mobile} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}

        {isDesktop && SectionItems.map((item,index) => (
          <div key={item.id} className="flex-item">
            <img src={item.src_desktop} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}

      </div>
      <div className="btn container">
        <button>SEE ALL</button>
      </div>
    </div>
  )
}
