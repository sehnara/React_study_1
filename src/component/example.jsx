import React, { useState } from 'react';

const Example = (props) => {
    const [count, setCount] = useState(0);

    return(
      <>
        <p>You clicked {count} times</p>
        <button onClick={()=>{setCount(count+1)}}>Click me</button>
      </>
    );
  };

export default Example;