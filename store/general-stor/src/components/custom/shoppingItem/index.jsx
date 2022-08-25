import React, { useState } from 'react'
import { AddToCart } from '/>custom'
import './styles.css'

export default function Shoppingitem(props) {
  const { data = { name: '', detail: '', img: '' } } = props
  const [items, setItems] = useState(0)
  return (
    <div className="row">
      <div className="shop-item-container">
        <img src={data.img} alt="product" className="product-item-image" />
        <p className="shop-item-title">
          <b>{data.name}</b>
        </p>
        <p className="shop-item-price">{data.detail}</p>
        <AddToCart
          count={items}
          addToCart={() => setItems(items + 1)}
          removeFromCart={() => setItems(items - 1)}
        />
      </div>
    </div>
  )
}
