import React, {useState} from 'react';

const Navbar = ({onNewid, onNewCat}) => {
    const [tipo, setTipo]=useState("")
    const [id, setId]=useState("")
    const handleChangesel =(e)=>{
        setTipo(e.target.value)
    }
    const handleChangeid =(e)=>{
        setId(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        onNewid(id);
        onNewCat(tipo);
    }

  return (
    <div className='d-flex px-2 py-2 '>
        <form className="form" onSubmit={handleSubmit}>
            <label className='text-warning' >Categoria:</label>
            <select value={tipo} onChange={handleChangesel}required>
                <option value="">Seleccionar una categoria</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
            </select>
            <label className='text-warning'> ID: </label>
            <input type="text" className='form-control' onChange={handleChangeid} value={id} placeholder={`Ingrese un id de ${tipo}`} required/>
            <input type="submit" className="btn btn-outline-warning" value="Consultar en la API"/>
        </form>
    </div>
  )
}

export default Navbar