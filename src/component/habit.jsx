import React, { memo } from 'react';

const Habit = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) =>{
    event.preventDefault();

    const name = inputRef.current.value;
    props.onChange(name);
    inputRef.current.value = '';
  }

  return (
    <div>
      <form
        onSubmit={onSubmit} 
        ref={formRef}
        className="habit-form">
        <input ref={inputRef}
               type="text" 
               placeholder="here"
        />
        <input type="submit" value="Click" onClick={onsubmit}/>
      </form>
    </div>
  );     
}
);
export default Habit;
