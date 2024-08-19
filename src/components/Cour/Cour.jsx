import React from 'react'
import './Cour.css'
const Cour = ({id,name,price,description,image}) => {
  return (
    <div className='courses-item'>
      <div className="courses-image-container">
        <img className='courses-image' src={image} alt="" />
      </div>
      <div className="courses-info">
        <p>{name}</p>
      </div>
      <p className="courses-desc">
        {description}
      </p>
      <p className="courses-price">
        {price}
      </p>
    </div>
  )
}

export default Cour
