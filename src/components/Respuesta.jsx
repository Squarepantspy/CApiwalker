import React from 'react'
import obiwan from '../img/star-wars-obi-wan-kenobi.gif'
export const Respuesta = () => {
  return (
    <div className='d-flex flex-column align-items-center my-2'>
        <h2>No se encontro lo que buscabas</h2>
        <img src={obiwan} alt='Kenobi crying'/>

    </div>
  )
}
