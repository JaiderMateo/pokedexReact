import React, {useState} from "react";


const CaughtPokemon = ()=>{
    const [pokemonNameInput, setPokemonNameInput] = useState("");
    const [caught, setCaught] = useState([]);
    let date = new Date().toLocaleDateString();
    const pokemos = ["Pikachu", "Charizard", "Eevee", "Landorus", "Snorlax"]

    const catchPokemon = ()=>{
        setCaught(caught.concat(pokemos[caught.length]));
    }

    const handleIputChange = (event)=>{
        setPokemonNameInput(event.target.value);
    }

    return (
        <>
        <button onClick={catchPokemon}>Catch Pokemon</button>
        <input type="text" 
        value={pokemonNameInput}
        onChange={handleIputChange} ></input>
        <p>Caught {caught.length} Pokemon on {date}</p>
        <ul>
            {caught.map((element, i) => 
                <li key={i}>{element}</li>
            )}
        </ul>
        </>
        );
  }

  export default CaughtPokemon;