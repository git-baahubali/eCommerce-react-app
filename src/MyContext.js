import { createContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
const MyContext = createContext()

function Provider({ children }) {
  var ratingVar
  const [rating, setRating] = useState(false)

  const [searchResult, setSearchResult] = useState([])
  const [inventory, setInventory] = useState([])
  const [fav, setFav] = useState([]);
  const [cart, setCart] = useState([]);

  let contextValue = {
    searchResult,
    setSearchResult,
    inventory,
    setInventory,
    rating,
    setRating,
    fav,
    setFav,
    cart,
    setCart
  }
console.log(fav);
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export default MyContext
export { Provider }
