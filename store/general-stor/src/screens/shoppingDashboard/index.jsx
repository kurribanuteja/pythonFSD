import React, { useEffect, useState } from 'react'
import { getBrowsingData } from '../../api/browsingAPI'
import { Shoppingitem } from '../../src/components/custom/shoppingItem/index'
import { Topnavbar } from '../../src/components/shared/topNavbar'
import './styles.css'

export default function ShoppingDashboard(props) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(getBrowsingData())
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
