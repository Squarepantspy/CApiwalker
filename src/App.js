import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; // componentes que se importaron
import Navbar from './components/Navbar';
import People from './components/People';
import Vehicles from './components/Vehicles';
import Films from './components/Films';
import Species from './components/Species';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Particle from './components/Particle';
import PeopleR from './components/PeopleR';



function App() {
  
  const [cat,setCat]=useState("");
  const [id,setId]=useState("");
  const [data,setData]=useState({});
  const [status,setStatus]=useState(null);

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/${cat}/${id}`).then((res)=>{
      if (cat.length>0 && id.length>0){
          console.log(res.data)
          setData(res.data);
          setStatus(false);
      }

    }).catch((err)=>{
      //console.log(err.response)
        setData({})
        setStatus(true);
    })
    

  },[cat,id]) //al hacer cambio en cat o id se llama a axios
  
 /*  const consultapi= async()=>{
    axios.get(`https://swapi.dev/api/${cat}/${id}`).then((res)=>{

    console.log(res.data)}).catch((err)=>{console.log(err)})
  }
   */
  const elevarid=(ide)=>{
    setId(ide);
  }
  const elevarCat=(tipo)=>{
    setCat(tipo);
  }
  
  return (
    
    <div className="d-flex align-items-center flex-column ">
      <h1>Stars Wars API</h1>
      <Particle/>
      <Navbar onNewid={elevarid} onNewCat={elevarCat}/> {/*eleva la categoria y el id en el momento de hacer la solicitud */}
      {/*Renderizado condicional */}
   
      {
        (cat==="people" ) ? <People persona={data} respuesta={status} /> : ""
      }
      {
        (cat==="vehicles") ? <Vehicles vehiculo={data} respuesta={status}/> : ""
      }
      {
        (cat==="films") ? <Films film={data} respuesta={status}/>: ""
      }
      {
      (cat==="species") ? <Species specie={data} respuesta={status}/> : ""
      }
      {
      (cat==="planets") ? <Planets planeta={data} respuesta={status}/> : ""
      }
      {
      (cat==="starships") ? <Starships starship={data} respuesta={status}/> : ""
      }
      <BrowserRouter>
        <Routes>
          <Route path='/:id' element={<PeopleR/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
