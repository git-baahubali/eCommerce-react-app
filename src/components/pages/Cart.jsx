import React,{useContext} from 'react'
import MyContext from '../../MyContext'
import ProductCard from '../ProductCard'

function Cart() {
  const { cart } = useContext(MyContext)
  const Cards = cart.map((product) => {
    return <ProductCard productDetails={product} />
  })
    return (
      <div className="grid-cols-2 grid">
        {Cards}
      </div>
    )
  }
export default Cart
