import React, { useState, useEffect } from 'react';

function BasicUseEffect() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

// Every single useEffect always fire on first render

// On every render
useEffect(() => {
  console.log(`I 've been re-rendered`)
  // window.addEventListener("resize", updateWindowWidth);
});

/// On first Render/Mount only! - componentDidMount Alternative
useEffect(() => {  
  console.log('The component has been mounted')
}, [])

// On first Render + whenever dependancy changes! - componentDidUpdate Alternative
useEffect(() => {
  console.log(`The name changed!: ${name}`);

  return () => {
    //cleanup...
    console.log('Unmounted...')
  }
}, [name]);

// Follows the same rules, except this handles the unmounting on a component - componentWillUnmount Alternative
useEffect(() => {
  // window.addEventListener("resize", updateWindowWidth);

  return () => {
    // when component unmounts, this cleanup code runs...
    // window.removeEventListener("resize", updateWindowWidth);
  };
}, []);


  return (
    <div>
      <h1>The UseEffect Hook</h1>
      {/* <h2>The windiw width is: {windowWidth}</h2> */}

      <input className='cooltext'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something!"
      />
    </div>     
  
  );
}


export default BasicUseEffect;