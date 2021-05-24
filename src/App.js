// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
//import './App.css';
//import logo from './logo.svg';

// const Logo = ()=>{
//   var appName = "Pokedex";
//   return <header>
//   <h1>welcome {appName}</h1>
//   <img alt="pkemonImg" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
//   </header>
// };
import React from 'react';
import Logo from './logo';
import BestPokemon from './BestPokemon.js';
import CaughtPokemon from './CaughtPokemon.js';
import PokemonMovesSelector from './PokemonMoveSelector.js';
import PokemonCity from './PokemonCity.js';

const logWhenClicked = ()=>{
  console.log("you have clicked the logo");
}    

function App() {
  let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  return (
    <>
    <Logo appName="Pokedex" handleClick={logWhenClicked}/>
    <BestPokemon abilities={abilities} />
    <CaughtPokemon />
    <PokemonMovesSelector />
    <PokemonCity />
    <p>
      {}
    </p>
    </>
  )
}

export default App;
