import { Component, useState } from 'react';
import './app.css';
import Counter from './component/counter';
import Hello from './component/hello';
import InputSample from './component/inputSample';

function App(){
  const [count, setCount] = useState(1);  
  
  const onIncrease = () =>{
    // 4. 함수형 업데이트
    // : secCount에 미래의 값을 넣는 것이 아니라 업데이트되는 함수를 넣어주어, '최적화'한다.
    setCount(count => count+1);
  }
  const onDecrease = () =>{
    setCount(count => count-1);
  }
  

  return(
    <>
      <Hello 
        name = 'sehoon'
        color = 'green'
        fontSize = '50px'
        isSpecial = {true}
      />
      <Hello 
        isSpecial = {false}
      />

      <Counter
        count = {count}
        onInc = {onIncrease}
        onDec = {onDecrease}
      />
      <br/>
      <InputSample               
      />
    </>
  );
}

export default App;
