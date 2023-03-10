import React from 'react';

function Products({ name, image, description, price }) {
  return (
    <div className='prop_div'>
      <h1>{name}</h1>
      <img src={image} alt='' />
      <h2>{description}</h2>
      <h2>$ {price}</h2>
    </div>
  );
}

export default Products;
