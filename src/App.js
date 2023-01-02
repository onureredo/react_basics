import './App.css';
// import BasicUseState from './Components/BasicUseState';
import BasicUseEffect from './Components/BasicUseEffect';
// import Axios from './Components/Axios';
// import Pokemon from './Components/Pokemon';
// import Products from './Components/Products';
// import echo from './images/echo.png'
// import firestick from './images/firestick.png'

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

      <Axios />   

      {/* <Pokemon /> 
      <BasicUseState />
      <BasicUseEffect /> */}

    </div>
    
  );
}

export default App;
