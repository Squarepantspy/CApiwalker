import React from 'react'
import { Respuesta } from './Respuesta'

const Films = ({film,respuesta}) => {
  return (
    <>
    {
        (respuesta) ? <Respuesta/>:
      <div className='card d-flex justify-content-center col-4' >
        <div className='body'>
            <h2>{film.title}</h2>
            <h5 className="card-title">Productores: <span>{film.producer}</span></h5>
            <h5 className="card-title">Episodio : <span>{film.episode_id}</span></h5>
            <h5 className="card-title">Inicio : <span>{film.opening_crawl}</span></h5>
            <h5 className="card-title">Director : <span>{film.director}</span></h5>
            <h5 className="card-title">Fecha de lanzamiento: <span>{film.release_date}</span></h5>
        </div>
     </div>
      
      }</>
  )
}

export default Films