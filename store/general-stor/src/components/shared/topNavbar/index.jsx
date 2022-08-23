import React from "react";
import "./styles.css";

export default function TopNavBar(props) {
  const { title = "E-com Store", sizeOfCart = 0} = props;
  return (
    <div className="topNavBar-container">
      <p className="topNavBar-title">{title}</p>
      <span className="icon2">
        <p className="text1">Search</p>
      </span>
      <span className="icon-container">
        <img src="./images/cart_icon.svg" className="icon1" alt="cart" />
        {sizeOfCart > 0 && <p className="topNavBar-icon-tooltip">{sizeOfCart}</p>}
      </span>
      <span className="icon-container1">
        <img src="./images/person.svg" className="icon3" alt="profile"/>
      </span>
    </div>
  );
}
