import React from 'react'

const Card = ({ name, image, temperament, w_min, w_max }) => {

  return (
    <article>
      <h2>{name}</h2>
      <span>{temperament}</span>
      <img
        src={image}
        alt={`dog`}
        height= '200px'
      />
      <div>
        <h4>wigth</h4>
        <span>{w_min}</span>
        <hr />
        <span>{w_max}</span>
      </div>
    </article>
  )
}

export default Card