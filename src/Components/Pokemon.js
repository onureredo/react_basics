import React, {useState, useEffect} from 'react'

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/limit=5')
          .then(res => res.json())           
          .then(json => setPokemons(json.results))
  }, [])

  return (
    <div>
     {pokemons.map(pokemon => (      
      <h1>{pokemon.name}</h1> 
        ))
      }      
    </div>
  )
}

export default Pokemon





     
// UseEffect perform side effects on a func. component
// is really useful for running any kind of code which needs to run on every render
// https://www.w3schools.com/react/react_useeffect.asp   
