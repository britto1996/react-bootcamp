import React from 'react';
import logo from './btm.jpg';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <header className="App-header"><img src={logo} width="25%" className="App-logo" /></header>

          <div className="title">Add a todo...<br/>
              <input 
              type="text"
              className="addTodo"
              name="todo"
              placeholder="add todo..."
              />
            
              <button>Submit</button>
              <ul className="list-items">
                  <input type="checkbox" name="check"/>
                  fucking all day work
                  <button className="delete">Delete</button>
              </ul>
          </div>
      </div>
    )
  }
}

export default App;