import React from 'react';
import logo from './btm.jpg';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      newItem:"",
      list:[]
    }
  }
  addItem(todoValue){
    if(todoValue!==""){
      const newItem = {
        id:Date.now(),
        value:todoValue,
        isDone:false
      }
      const list = [...this.state.list]
      list.push(newItem)

      this.setState({
        list,
        newItem:""
      })
    }
  }
  deleteItem(id){
    const list = [...this.state.list]
    const updatedList = list.filter(item=>item.id!==id)
    this.setState({list:updatedList})
  }

  updateInput(input){
    this.setState({newItem:input})
  }

  render(){
    return (
      <div className="App">
          <header className="App-header"><img src={logo} width="25%" className="App-logo" /></header>

          <div className="title">Add a todo...<br/>
              <input 
              type="text"
              className="addTodo"
              onClick={()=>this.addItem(this.state.newItem)}
              name="todo"
              // disabled={!this.state.newItem.length}
              placeholder="add todo..."
              required
              value={this.state.newItem}
              onChange={e=>this.updateInput(e.target.value)}
              />
            
              <button 
              disabled={!this.state.newItem.length}
              className="addButton">Add Todo</button>
              <ul className="list-items">
              {this.state.list.map(item=>{
                return(
                  <li key={item.id}>
                  <input type="checkbox"
                  name="idDone"
                  checked={item.isDone}
                  onChange = {()=>{}}
                   />
                   {item.value}
                   <button 
                   className="delete"
                   onClick={()=>this.deleteItem(item.id)}
                   >
                   Delete</button>
                  </li>


                )
              })}
                  <input type="checkbox" 
                  name="check" 
                  className="tick-box" />
                  fucking all day work
                  <button className="delete">Delete</button>
              </ul>
          </div>
      </div>
    )
  }
}

export default App;