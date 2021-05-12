import { Component } from 'react';
import './app.css';
// import Example from './component/example';
import Hello from './component/hello';

function App(){
  
  return(
    <>
      <Hello 
        name = 'sehoon'
        color = 'green'
        fontSize = '50px'
      />
      <Hello />
    </>
  );
}

export default App;
