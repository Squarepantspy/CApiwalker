import React from 'react'
import { Respuesta } from './Respuesta'

const Planets = ({planeta,respuesta}) => {
  return (<>
    {
        (respuesta) ? <Respuesta/> :
      <div className='card d-flex justify-content-center col-4' >
        <div className='body'>
            <h2>{planeta.name}</h2>
            <h5 className="card-title">Gravedad : <span>{planeta.gravity}</span></h5>
            <h5 className="card-title">Poblacion : <span>{planeta.population}</span></h5>
            <h5 className="card-title">Periodo orbital : <span>{planeta.orbital_period}</span></h5>
            <h5 className="card-title">Diametro : <span>{planeta.diameter}</span></h5>
            <h5 className="card-title">Terreno: <span>{planeta.terrain}</span></h5>
            <h5 className="card-title">Clima: <span>{planeta.climate}</span></h5>
            <h5 className="card-title">Superficie de agua: <span>{planeta.surface_water}</span></h5>
        </div>
     </div>
      
      }</>
  )
}

export default Planets