import React from 'react';

const User = ({user}) => {// 

  return(
    <>
      <span>{user.name}</span> 
      <span>{user.email}</span>
    </>
  );
};

const UserList = (props) => {

  return(
    <>
      {
        props.users.map((user, index)=>( // 1) user값과 다음 parameter로 index를 줄 수 있다.         
          <User 
            user={user} 
            key={index}
          /> // 2) key를 주지 않으면, 배열의 원소가 하나 사라지거나 추가될 때, 전체가 update되는데, key가 있으면 그런 비효율을 줄일 수 있다.        
        ))        
      }
     
    </>
  );   
}

export default UserList;