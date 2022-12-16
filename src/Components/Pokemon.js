import React, {useState, useEffect} from 'react'

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
     
// https://www.w3schools.com/react/react_useeffect.asp  

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