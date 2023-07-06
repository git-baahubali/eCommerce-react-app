import React, { useContext } from 'react'
// import { Outlet } from 'react-router-dom'

import { NavLink } from 'react-router-dom'
import MyContext from '../MyContext'

function NavigationBar() {
  const context = useContext(MyContext)
  // const [ratingButtonStatus, setRatingButtonStatus] = useState(false);
  return (
    <div>
      {/* // some  */}
      <div className="flex mx-2 mb-4">
        <ul className="flex ">
          <li className="mx-3 text-2xl">
            <NavLink
              to={'/'}
              className={({ isActive }) => {
                return isActive ? 'border-b-2 border-blue-400' : undefined
              }}
            >
              Store
            </NavLink>
          </li>
          <li className="mx-3 text-2xl">
            <NavLink
              to={'/search'}
              className={({ isActive }) => {
                return isActive ? 'border-b-2 border-blue-400' : undefined
              }}
            >
              Search Results
            </NavLink>
          </li>
          <li className="mx-3 text-2xl">
            <NavLink
              to={'/fav'}
              className={({ isActive }) => {
                return isActive ? 'border-b-2 border-blue-400' : undefined
              }}
            >
              Favourites
            </NavLink>
          </li>
          <li className="mx-3 text-2xl">
            <NavLink
              to={'/cart'}
              className={({ isActive }) => {
                return isActive ? 'border-b-2 border-blue-400' : undefined
              }}
            >
              Cart {context.cart.length?`(${context.cart.length})`:''}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="border-0 border-blue-400 rounded mb-4">
        <button
          className="btn  border-2"
          style={{
            backgroundColor:context.rating?'cyan':'gray',
            color:'black'
          }}
          onClick={() => {
            context.setRating(!context.rating)
          }}
        >
          rating 4+
        </button>
      </div>
    </div>
  )
}

export default NavigationBar
