import './App.css';
import Axios from './Components/Axios';
import Hooks from './Components/Hooks';
import Pokemon from './Components/Pokemon';
import Products from './Components/Products';
import echo from './images/echo.png'
import firestick from './images/firestick.png'

function App() {

  return (

    <div className="App">      
      <Products
        name="Amazon Echo"
        image= {echo}
        description="Your Home Assistant"
        price="39,99"                   
      />

      <Products 
        name="Amazon Firestick"
        image= {firestick}
        description="4K @60FPS"
        price="29,99"
      />

      <Hooks />

      <Axios />
      
      <Pokemon />
      </div>
    
  );
}

export default App;
