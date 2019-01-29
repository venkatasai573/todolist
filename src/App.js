import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state={
        input:[],
        result:""
    }
  handleChange=(e)=>{
    this.setState({result:e.target.value})
  }
  handleDelete=(g)=>{
    let newArray=this.state.input.filter((_input,index)=>{
      if(index!==g){
        return _input
      }
    });
    this.setState({input:newArray});
  }
  ElementA=(e)=>{
    if(this.state.result!==""){
     let newArray=this.state.input;
     newArray.push(this.state.result);
    this.setState({input:newArray})
  }
     }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter Task Name" onChange={this.handleChange}/>
        <button onClick={this.ElementA}><p>Add To Tasks</p></button>
        {
          this.state.input.map((g,index)=>{
          return <h3 key={index}>{g}
          <a href="#" onClick={this.handleDelete.bind(this,index)}>[Delete]</a>
          </h3>
          })
          }
      </div>
    );
  }
}
export default App;