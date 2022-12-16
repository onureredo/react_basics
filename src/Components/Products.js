import React from 'react'

//props or destructuring
// function Products (props) or pass the props in 
function Products({ name, image, description, price }) {

  return (

    <div className='prop_div'>
      {/* <h1>{props.name}</h1> or => */}
      <h1>{name}</h1>
      <img src={image} alt=""/>
      <h2>{description}</h2>
      <h2>$ {price}</h2> 
        
    </div>
  )
}

export default Products