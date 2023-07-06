import React, { useContext, useEffect } from 'react'
import MyContext from '../../MyContext'
import ProductCard from '../ProductCard'
function Favourites() {
  const { fav } = useContext(MyContext)
const Cards = fav.map((product) => {
  return <ProductCard productDetails={product} />
})
console.log(Cards);
  return (
    <div className="grid-cols-2 grid">
      {Cards}
    </div>
  )
}

export default Favourites
