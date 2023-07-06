import React, { useContext } from 'react'
import NavigationBar from '../NavigationBar'
import MyContext from '../../MyContext'

function ErrorPage() {
  const context = useContext(MyContext)
  return (
    <div>
      <NavigationBar />
      Hey , 404 Error!
      {/* <p>{context.x}</p> */}
    </div>
  )
}

export default ErrorPage
