import React from 'react'
import echo from '../images/echo.png'

// function Products(props) {

//   return (

//     <div>
//         <h1>{props.name}</h1>
//         <img src={props.image} alt=""/>
//         <h2>{props.description}</h2>
//         <h3>$ {props.price}</h3> 
//         <hr></hr>
//     </div>
//   )
// }

//props or destructuring
function Products({ name, image, description, price }) {

  return (

    <div className='prop_div'>
        <h1>{name}</h1>
        <img src={image} alt=""/>
        <h2>{description}</h2>
        <h2>$ {price}</h2> 
        
    </div>
  )
}

export default Products