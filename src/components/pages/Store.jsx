import React, { useState, useContext, useEffect } from 'react'
import MyContext from '../../MyContext'
import ProductCard from '../ProductCard'
import axios from 'axios'

function Store() {
  const {
    searchResult,
    setSearchResult,
    inventory,
    rating,
    setRating,
    ratingVar,
    stableRating,
  } = useContext(MyContext)
  const context = useContext(MyContext)

  async function getProductsFromInventory() {
    const response = await axios.get('https://dummyjson.com/products')
    context.setInventory([...response.data.products])
    // context.inventory = [...response.data.products]
  }
  useEffect(() => {
    getProductsFromInventory()
  }, [])
  console.log(inventory)
  const filteredProducts = inventory.filter((product) => product.rating > 4.5)
  // console.log(filteredProducts);
  return (
    <div className="grid-cols-2 grid">
      {rating
        ? filteredProducts.map((product) => {
            console.log('inside filter')
            return <ProductCard productDetails={product} />
          })
        : inventory.map((product) => {
            console.log('inside inventory')
            return <ProductCard productDetails={product} />
          })}
    </div>
  )
}

export default Store
