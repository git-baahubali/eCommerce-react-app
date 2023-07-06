import React,{useContext,useEffect} from 'react'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import SearchResults from './components/pages/SearchResults'
import Favourites from './components/pages/Favourites'
import Cart from './components/pages/Cart'
import ErrorPage from './components/pages/ErrorPage'
import Store from './components/pages/Store'
import Stars from './components/Stars'
import MyContext from './MyContext'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Store /> },
      { path: '/search', element: <SearchResults /> },
      { path: '/fav', element: <Favourites /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
])

function App() {
    const context = useContext(MyContext);

  

  return (
    <div>
    
      <Header />
      <p
        className="border-2 my-2 "
        style={{
          borderColor: 'rgb(0, 200, 255,0.5)',
          borderBottom: '5px',
        }}
      ></p>

      <RouterProvider router={router} />
    </div>
  )
}

export default App
