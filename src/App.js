
import React, { useReducer } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from"./components/ItemListContainer"


function App(){
  return( 
    <>
      <NavBar />
      <ItemListContainer greeting="listadeproductos" />
    </> 
  )
}

export default App;


