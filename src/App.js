import React from "react"
import './App.css';import {Routes,Route} from "react-router-dom"
import PokemonList from "./component/PokemonList"
import Pokemon from "./component/Pokemon"
import {NavLink} from "react-router-dom"


function App() {
  return (
    <div className="App">
     <nav>
       <NavLink to={"/pokemon/test"}>Search</NavLink> 
     </nav>
     
     <Routes>
         <Route  path="/"  element={<PokemonList/>} />
         <Route  path="pokemon/"  element={<Pokemon/>} />
         
        


     </Routes>
     
     
     
    </div>
  );
}

export default App;
