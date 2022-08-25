import React from 'react'
import './styles.css'

export default function Topnavbar(props) {
  const {  cartToolTip = 0 } = props
  return (
    <div className="topNavBar-container">
      <p className="topNavBar-title">General Store</p>
      <input type="text" className="TopNavBar-search" placeholder="Search" />
      <span className="icon-container">
        <img src="./images/cart_icon.svg" className="icon1" alt="cart" />
        {cartToolTip > 0 && (
          <p className="topNavBar-icon-tooltip">{cartToolTip}</p>
        )}
      </span>
      <span className="icon-container1">
        <img src="./images/person.svg" className="icon3" alt="profile" />
      </span>
    </div>
  )
}
