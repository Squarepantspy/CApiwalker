import React from 'react'
import { Respuesta } from './Respuesta'

const Species = ({specie,respuesta}) => {
  return (
    <>
    {
        (respuesta) ? <Respuesta/>:
      <div className='card d-flex justify-content-center col-4' >
        <div className='body'>
            <h2>{specie.name}</h2>
            <h5 className="card-title">Promedio de altura: <span>{specie.average_height}</span></h5>
            <h5 className="card-title">Promedio de vida : <span>{specie.average_lifespan}</span></h5>
            <h5 className="card-title">Lenguaje: <span>{specie.language}</span></h5>
            <h5 className="card-title">Colores de piel : <span>{specie.skin_colors}</span></h5>
            <h5 className="card-title">Colores de ojos: <span>{specie.eye_colors}</span></h5>
        </div>
     </div>
      
      }</>
  )
}

export default Species