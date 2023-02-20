
import React, { useReducer } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from"./components/ItemListContainer"
import Productos  from './components/ItemCount';


function App(){
  return( 
    <>
      <NavBar />
      <ItemListContainer greeting="listadeproductos" />
      <Productos />


    </> 
  )
}

export default App;


