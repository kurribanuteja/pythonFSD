import React, { useEffect, useState } from "react";
import  Getbrowsingdata  from "../../api";
import  Shoppingitem  from "../../components/custom";
import  Topnavbar  from "../../components/shared";
import "./styles.css";

export default function Shoppingdashboard(props) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(Getbrowsingdata())
  }, [])

  return (
    <div className="browsing-window">
      <Topnavbar />
      <div className="browsing-content">
        {products.map((item) => (
          <Shoppingitem data={item} />
        ))}
      </div>
    </div>
  )
}
