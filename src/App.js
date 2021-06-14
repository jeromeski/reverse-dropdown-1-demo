import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from "react";
import {TweenLite, Power3, Power4} from 'gsap'

console.log()

export default function App() {

  let el = useRef(null)

  const handleMouseOver = () => {
    console.log('hovered')
    TweenLite.to(el.current, .1, {display: "block", y: -36, ease: Power3.easeIn })
  }

  return (
    <div className="App">
      <div className='link-container'>
        <a className='main-link'>
          <span>Link</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </a>
        <div ref={el} className='sublink-container' >
          <span className='sublink'>SubLink 1</span>
          <span className='sublink'>SubLink 2</span>
          <span className='sublink'>SubLink 3</span>
        </div>

      </div>
    </div>
  );
}
