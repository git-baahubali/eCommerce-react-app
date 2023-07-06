import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css'
// import DropdownT from './DropdownT'
import Dropdown from './Dropdown'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div>
      <header>
        <div className="flex justify-center">
          <form action="" className=" border-blue-200 border-2 rounded-lg">
            <div className="flex ">
              <Dropdown />
              <SearchBar />
            </div>
          </form>
        </div>
      </header>
    </div>
  )
}

export default Header
