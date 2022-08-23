import React, { useState } from "react";
import { shoppingItems } from "../../components/custom";
import { TopNavBar } from "../../components/shared";
import "./styles.css";

export default function ShoppingDashboard(props) {
  const [cartState] = useState(0);


  return (
    <div className="shopDash-container">
      <TopNavBar sizeOfCart={cartState} />
      <shoppingItems />
    </div>
  );
}