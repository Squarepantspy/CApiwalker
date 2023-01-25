//import React, {useState, useEffect} from 'react'
import { Respuesta } from './Respuesta'
//import axios from 'axios';
const People = ({persona, respuesta}) => {
    /* const [planeta,setPlaneta]=useState("")
    const planetaurl = persona.homeworld; */


    /* useEffect(()=>{
        if(typeof(planetaurl)==='string'){ //no queremos preguntar cuando se renderiza por primera vez porque la url del planeta aun no se paso
        axios.get(planetaurl).then((res)=>{
            setPlaneta(res.data.name)
        }).catch(err=>{console.log(err)})
    }},[planetaurl])  */
  return (
      <>
      {
        (respuesta) ? <Respuesta/> :
      <div className='card d-flex justify-content-center col-4' >
        <div className='body'>
            <h2>{persona.name}</h2>
            <h5 className="card-title">Año de nacimiento : <span>{persona.birth_year}</span></h5>
            <h5 className="card-title">Color de piel : <span>{persona.skin_color}</span></h5>
            <h5 className="card-title">Color de pelo : <span>{persona.hair_color}</span></h5>
            <h5 className="card-title">Peso : <span>{persona.mass}</span></h5>
            <h5 className="card-title">Altura: <span>{persona.birth_year}</span></h5>
            <h5 className="card-title">Genero: <span>{persona.gender}</span></h5>
        </div>
     </div>
      
      }
      </>
  )
}

export default People