import React from 'react'
import { Link } from "react-router-dom";
const Card = ({ name, image, temperaments, w_min, w_max, id }) => {
  let temp = "";
  typeof temperaments === "object" ?
      temp = temperaments.map(t => {
          return t.name
      }).join(", ") : temp = temperaments
  
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
          <p>  {w_min} - {w_max}  </p>
        </div>
        <div className='temperaments'>
         <span>{temp}</span> 
        </div>
      </div>
    </article>

  )
}

export default Card