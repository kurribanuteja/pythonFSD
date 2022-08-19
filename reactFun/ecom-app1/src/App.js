import React from 'react';
import "./App.css";
export default function App(){
  return (
    <div className="App">
      <div className="card-border">
      <div className="border-1">
        <img src="./imgapp/blazers.jpg" className="icon1" alt="" />
        <img src="./imgapp/Heart.svg" className="icon2" alt="" />
        <p className="font1">
          <b>Black Fantasy Sweatshirt</b>
        </p>
        <p className="font2">
          Price <b>$200</b>
        </p>
        <div className="border-2">
          <img src="./imgapp/cart.svg" className="icon3" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
}