import React from 'react';

const InputSample = (props) => {
  let a = 'didi';
  // const inputRef = React.createRef();

  const handleChange =(e)=>{
    props.onVal(e.target.value);
  }
  const handleReset = ()=>{
    props.onVal('');
  }

  return(
    <>
      <input
        onChange={handleChange} // onChange : input의 값의 변화에 따라 사용가능
      />
      <button onClick={handleReset}>초기화</button>
      <div>
        <b>값 : {props.val}</b>
      </div>
    </>
  );
};

export default InputSample;