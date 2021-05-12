import { Component } from 'react';
import './app.css';
import Count from './component/count';
import Habit from './component/habit';

class App extends Component {
  state={
    sehoon :{id:1, name:'sehoon',count : 0}
    }

  handleIncrement=()=>{
    const sehoon = {...this.state.sehoon};
    sehoon.count++;
    this.setState({sehoon});    
  } 
  handleChange=(name)=>{
    const sehoon = {...this.state.sehoon};
    sehoon.name = name;
    this.setState({sehoon})
  }

  render(){
    return (
      <>
        <Count 
          name = {this.state.sehoon.name}
          count = {this.state.sehoon.count}
          onIcrease = {this.handleIncrement}
        />
        <Habit
        count = {this.state.sehoon.count}
        onIcrease = {this.handleIncrement}
        onChange = {this.handleChange}
        />
      </>
    );
  }
  
}

export default App;
