import React from 'react'
import Styles from "../Components/Style.module.css"
const LeftNav = () => {
  return (
    <div className={Styles.leftNavContent}>
      <div className="leftNav">
        <ul>
            <div className={Styles.leftNavs}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            </div>
            </ul>
            
      </div>
    </div>
  )
}

export default LeftNav
