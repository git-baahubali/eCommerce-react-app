import React, { useContext } from 'react'
import MyContext from '../../MyContext'
import ProductCard from '../ProductCard'
function SearchResults() {
  const { searchResult, setSearchResult } = useContext(MyContext)
  

  return (
    <div className='grid-cols-2 grid'>
      {searchResult.map((product) => {
        return <ProductCard productDetails={product} />
      })}
      {/* <ProductCard productDetails={searchResult[0]}/> */}
    </div>
  )
}

export default SearchResults
