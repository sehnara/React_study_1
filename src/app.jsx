import { Component } from 'react';
import './app.css';
import Hello from './component/hello';

function App(){
  
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
    </>
  );
}

export default App;
