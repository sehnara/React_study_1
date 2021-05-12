import { Component, useRef, useState } from 'react';
import './app.css';
import Counter from './component/counter';
import Hello from './component/hello';
import InputSample from './component/inputSample';
import UserList from './component/userList';

function App(){
  const [count, setCount] = useState(1); 
  const [users, setUsers]= useState(
    [
      {id:1, name:'sehoon', email:'gsh723@naver.com'},
      {id:2, name:'jiyoon', email:'jiyoon@naver.com'},
      {id:3, name:'sunmin', email:'sunmin@naver.com'}
    ]  
  );
  const nameRef = useRef('gildong');
  const emailRef =useRef('gildong@naver.com');

  const onIncrease = () =>{
    // 4. 함수형 업데이트
    // : secCount에 미래의 값을 넣는 것이 아니라 업데이트되는 함수를 넣어주어, '최적화'한다.
    setCount(count => count+1);
  }
  const onDecrease = () =>{
    setCount(count => count-1);
  }
  const nextId = useRef(3);
  const onCreate = () =>{
    nextId.current +=1;
  }

  const handleCreate=()=>{
    console.log(nameRef.current.value);
    onCreate();
    const newUsers = [...users];
    const newObj = {
      id : nextId.current,
      name : nameRef.current.value,
      email : emailRef.current.value   
    };
    newUsers.push(newObj);   
    setUsers(users=>newUsers);
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
      <input type="text" placeholder="name" ref = {nameRef}/>
      <input type="text" placeholder="email" ref={emailRef}/>
      <button onClick={handleCreate}>Create</button>
      <UserList 
        users = {users}/>
      
    </>
  );
}

export default App;
