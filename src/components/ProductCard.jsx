import React,{useContext} from 'react'
import MyContext from '../MyContext'

// import Carousal from './Carousal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import Stars from './Stars'

function ProductCard({ productDetails }) {

  const context = useContext(MyContext)
  function shortDescription(description) {
    if(description.length >50 )
    return description.slice(0, 47) + '...'
    else
    return description
  }
  function shortTitle(title) {
    if(title.length> 15)
    return title.slice(0, 15) + '...'
    else
    return title
  }
  return (
    <div>
      <div className="card card-compact w-96 h-80 bg-base-100 shadow-xl relative">
        <figure>
          {/* <Carousal images={productDetails.images} /> */}
          <img
            src={productDetails.thumbnail}
            alt=""
            className=" max-h-full   top-0 bottom-0 left-0 right-0 bg-center "
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title flex justify-between">
            {shortTitle(productDetails.title)}
            <div className="badge badge-secondary">
              {productDetails.rating}/5
            </div>
            <div>
            {/* <Stars /> */}
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-600 scale-125 mx-1"
                on
                onClick={() => {
                  context.setFav((prev)=>[...prev,productDetails])
                }}
              />
              <FontAwesomeIcon
                icon={faCartPlus}
                className="text-yellow-600 scale-125 mx-1"
                onClick={() => {
                  context.setCart((prev)=>[...prev,productDetails])
                }}
              />
            </div>
          </h2>

          <p>{shortDescription(productDetails.description)}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">
              Price: {productDetails.price}
            </div>
            <div className="badge badge-outline">
              Discount: {productDetails.discountPercentage}%
            </div>
            <button className="btn btn-primary bg-blue-600">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
