import React from 'react'
import { Link } from "react-router-dom";
const Card = ({ name, image, temperament, w_min, w_max, id }) => {

  return (
    <article>
      <Link to={`/dogs/${id}`}>
        <h2>{name}</h2>
      </Link>
      <span>{temperament}</span>
      <img
        src={image}
        alt={`dog`}
        height='200px'
      />
      <div>
        <h4>wigth</h4>
        <span>{w_min}</span>
        <br />
        <span>{w_max}</span>
        <hr />
      </div>
    </article>
  )
}

export default Card