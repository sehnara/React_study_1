import React from 'react';

const Counter = (props) => {

    const handleIncrement = ()=>{
      props.onInc();
    }
    const handleDecrement = ()=>{
      props.onDec();
    }
    return(
      <div>
        <h1 className="count">{props.count}</h1>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
    );
  }

export default Counter;