import React, { useRef } from 'react';
import { Component, useState } from 'react';

const InputSample = (props) => {
  const [inputs, setInputs] = useState({
    name : 'sehoon',
    nick : 'king'
    });
  
    // 5. useRef() : vanila.js에서 DOM 요소를 가져오듯이, React에서는 Ref로 DOM 요소 자체를 땡겨올 수 있다.
  const nameInput = useRef();
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

    console.log(nameInput.current.value);
  }

  return(
    <>
      <input placeholder="name" onChange={handleChange} ref={nameInput}/>
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