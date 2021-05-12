import React, { useContext, useEffect, useState } from 'react';

const Example = (props) => {
    const [count, setCount] = useState(0);   

    useEffect(()=>{
      document.title = `you clicked ${count} times`;
    });

    const [isOnline, setIsOnline] = useState(null);
   
    return(
      <>
        <p>You clicked {count} times</p>
        <button onClick={()=>{setCount(count+1)}}>Click me</button>
      </>
    );
  };

export default Example;

// React Hook 

// 1. Hook의 탄생
//: 

// 2. state Hook
//  1) useState()
//  2) 여러 state 변수 선언

// 3. Effect Hook
//   1) useEffect() : mount될 때와 render() 실행할 떄마다 실행된다.
//                  : 


// 4. Hooks Rule
 // 1) 최상위에서만 Hook호출 / 반복, 조건, 중첩 함수에서 Hook 실행 X
 // 2) Function Comp와 Custom Comp에서만 실행가능


// 5. custom Hook
// : 상태 관련 로직을 컴포넌트 간 재사용 가능
// useSehoon 이런 식으로 하고, 다른 컴포넌트에서도 실행 가능
// 폼 핸들링, 애니메이션, 선언적 구독, 타이머

// 6. other Hook
//  1) useContext() :
//  2) useReducer() :
//  3) useRef() : 
//  4) useCallback() :