import React from 'react';
import { Component, useState } from 'react';

const InputSample = (props) => {
  const [name, setName] = useState('sehoon');
  const [nick, setNick] = useState('shrimp');

  const handleChange =(e)=>{
    if(e.target.placeholder==='name'){
      setName(name => e.target.value)
    }
    else(
      setNick(nick => e.target.value)
    )
  }
  const handleReset = ()=>{
    setName('');
    setNick('');
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