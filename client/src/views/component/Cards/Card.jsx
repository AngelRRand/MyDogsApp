import React from 'react'
import { Link } from "react-router-dom";
import { GiWeight } from "react-icons/gi";
const Card = ({ name, image, temperament, w_min, w_max, id }) => {

  return (
    <article className='card'>
      <div className='card_img_h'>
        <img
          src={image}
          alt={`dog`}
          height='200px'
        />
        <div className='card_h2'>
          <Link style={{ textDecoration: 'none' }} to={`/dogs/${id}` }>
            <h2 className='name'>{name}</h2>
          </Link>
        </div>

      </div>
      <div className='card_text'>
        <div className='weight'>
          <p>  {w_min} <GiWeight/> {w_max}  </p>
        </div>
        <div className='temperaments'>
         <span>{temperament}</span> 
        </div>
      </div>
    </article>
  )
}

export default Card