import React from 'react'

const Card = ({nombre, libro}) => {
  return (
    <div>
    <h3>Hola {nombre}! </h3>
    <h3>Sabemos que tu libro preferido es: </h3>
    <p>{libro}</p>
</div>
  )
}

export default Card