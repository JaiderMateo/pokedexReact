import React from 'react';


const Logo = (props)=>{
  //let props = "hola";
  return (
    <header>
      <h1>welcome to {props.appName}</h1>
      <img alt="pkemonImg"
       src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
       onClick={props.logWhenClicked}></img>
    </header>
  );
};

export default Logo;