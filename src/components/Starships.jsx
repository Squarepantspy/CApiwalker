import React from 'react'
import { Respuesta } from './Respuesta'

const Starships = ({starship,respuesta}) => {
  return (<>
    {
        (respuesta) ? <Respuesta/>:
      <div className='card d-flex justify-content-center col-4' >
        <div className='body'>
            <h2>{starship.name}</h2>
            <h5 className="card-title">Modelo: <span>{starship.model}</span></h5>
            <h5 className="card-title">Pasajeros : <span>{starship.passengers}</span></h5>
            <h5 className="card-title">Crew: <span>{starship.crew}</span></h5>
            <h5 className="card-title">Clase : <span>{starship.starship_class}</span></h5>
            <h5 className="card-title">Capacidad de cargo: <span>{starship.cargo_capacity}</span></h5>
            <h5 className="card-title">Manufacturer: <span>{starship.manufacturer}</span></h5>
            <h5 className="card-title">Hyperdrive rating: <span>{starship.hyperdrive_rating}</span></h5>
        </div>
     </div>
      
      }</>
  )
}

export default Starships