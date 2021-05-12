import React from 'react';

// 1. style을 변수로 잡고, jsx의 태그에 속성으로 적용 가능
// 2. className으로 클래스 잡으면 css파일과도 연결가능
const Hello = (props) => {

      const name = props.name;
      const color = props.color;

      const style ={
        backgroundColor:'black',
        color : 'red',
        fontSize:'24px',
        padding:'1rem'
      }

      return(
        <>
          <h1 style={{color, fontSize:props.fontSize}}>{name}</h1>
          <div className="gray-box"></div>
        </>
      );
    }

    // 3.default props : function 밖에서 기본 값 지정해준다.
    Hello.defaultProps = {
      name : '시노부'
    }

export default Hello;