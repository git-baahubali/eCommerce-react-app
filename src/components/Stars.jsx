import React from 'react'

const starStyle = {
    input:{
            color: 'red'
    }
}
function Stars() {
  return (
    <div className="rating rating-md rating-half mx-1" >
      <input type="radio" name="rating-10" className="rating-hidden" />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-1"
        style={starStyle}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-1"
        checked
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-200 mask mask-star-2 mask-half-2"
      />
    </div>
  )
}

export default Stars
