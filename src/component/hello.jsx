import React from 'react';

// 1. style을 변수로 잡고, jsx의 태그에 속성으로 적용 가능
// 2. className으로 클래스 잡으면 css파일과도 연결가능
const Hello = (props) => {
      const name = 'react'; 
      const style ={
        backgroundColor:'black',
        color :'aqua',
        fontSize:24,
        padding:'1rem'
      }
      return(
        <>
          <h1 style={style}>{name}</h1>
          <div className="gray-box"></div>
        </>
      );
    };

export default Hello;