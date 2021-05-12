import React from 'react';
import { Component, useState } from 'react';

const InputSample = (props) => {
  const [inputs, setInputs] = useState({
    name : 'sehoon',
    nick : 'king'
    });

  const {name, nick} = inputs;

  const handleChange=(e)=>{
    if(e.target.placeholder==='name'){
      const newInputs = {...inputs};
      newInputs.name = e.target.value;
      setInputs(inputs => newInputs);
    }
    else{
      const newInputs = {...inputs};
      newInputs.nick = e.target.value;
      setInputs(inputs => newInputs);
    }
  }
  const handleReset=(e)=>{
    const newInputs = {...inputs};
    newInputs.name = '';
    newInputs.nick = '';
    setInputs(inputs=> newInputs);
  }

  return(
    <>
      <input placeholder="name" onChange={handleChange}/>
      <input placeholder="nickName" onChange={handleChange}/>
      <button onClick={handleReset}>초기화</button>
      <div>
        <b>값 : </b><br/>
        {name}({nick})        
      </div>
    </>
  );
};

export default InputSample;