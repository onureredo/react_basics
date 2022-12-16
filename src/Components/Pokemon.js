import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Pokemon() {
    const [pokemons, setPokemons] = useState([]);
     
// UseEffect perform side effects on a func. component
// is really useful for running any kind of code which needs to run on every render
// https://www.w3schools.com/react/react_useeffect.asp   
useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
          console.log(res)
        })
        .catch((err) =>{
          console.log(err)
        })
    }, [])

  return (
    <div>
       <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Pokemon

