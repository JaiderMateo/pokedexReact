import React from 'react';

const BestPokemon = (props) => {
    return <div>
      <p>my favorite pokemon is Blassure</p>
      <ul>
        {props.abilities.map((name, i)=> <li key={i}>key= {i}, name={name}</li>)}
      </ul>
    </div>
  }

  export default BestPokemon;