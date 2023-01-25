import React from 'react'
import { Respuesta } from './Respuesta'

const Vehicles = ({vehiculo,respuesta}) => {
  return (
    <>
    {
        (respuesta) ? <Respuesta/>:
      <div className='card d-flex justify-content-center col-4' >
        <div className='body'>
            <h2>{vehiculo.name}</h2>
            <h5 className="card-title">Modelo: <span>{vehiculo.model}</span></h5>
            <h5 className="card-title">Pasajeros : <span>{vehiculo.passengers}</span></h5>
            <h5 className="card-title">Crew: <span>{vehiculo.crew}</span></h5>
            <h5 className="card-title">Clase : <span>{vehiculo.vehicle_class}</span></h5>
            <h5 className="card-title">Capacidad de cargo: <span>{vehiculo.cargo_capacity}</span></h5>
            <h5 className="card-title">Manufacturer: <span>{vehiculo.manufacturer}</span></h5>
            <h5 className="card-title">Maxima velocidad atmosferica: <span>{vehiculo.max_atmosphering_speed}</span></h5>
        </div>
     </div>
      
      }</>
  )
}

export default Vehicles