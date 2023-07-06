import React, { useState, useContext } from 'react'
import MyContext from '../MyContext'
import axios from 'axios'

function SearchBar() {
  const [searchInput, setSearchInput] = useState('')
  const context = useContext(MyContext)

  function handleChange(x) {
    setSearchInput(x)
  }
  function handleEnter(event) {
    if (event.key === 'Enter') handleSearchButtonClick()
  }
  async function handleSearchButtonClick() {
    console.log('inside Hnalde Search Button Click');
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=` + searchInput,
      )
      // console.log(response.data.products);
      console.log(response.data.products);
      context.setSearchResult(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="form-control py-2">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered "
            onChange={(event) => {
              event.preventDefault()
              handleChange(event.target.value)
            }}
            onKeyDown={handleEnter}
          />
          <button
            className="btn btn-square hover:text-blue-500"
            onClick={(event)=>{
              event.preventDefault();
              handleSearchButtonClick()
            }}
            style={{
              // borderColor:'white',
              padding: '10px 10px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
