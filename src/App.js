import React,{Component} from 'react';
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import './reset.css'
import * as localStorage from './localStorage'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo:'',
      todolist:localStorage.load('todolist') || []
    }
  }
  
  render(){
    let todos = this.state.todolist.filter((item)=> !item.deleted)
    .map((item,index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item} 
          onFinish={this.finish.bind(this)}
          onDelete={this.delete.bind(this)}
          />
        </li>
      )
    })
    
    return(
      <div className="App">
        <h1>我的待办</h1>
        <div className="InputWrapper">
          <TodoInput content={this.state.newTodo} 
          onSubmit={this.addTodo.bind(this)}
          onChange={this.changeTitle.bind(this)}
          />
        </div>
        <ol className="todoList">{todos}</ol>
      </div>
    )
  }

  finish(e,todo){
    todo.status = todo.status === 'completed' ? '': 'completed'
    this.setState(this.state)
    localStorage.save('todolist',this.state.todolist)
  }

  delete(e,todo){
    todo.deleted = true
    this.setState(this.state)
    localStorage.save('todolist',this.state.todolist)
  }

  changeTitle(e){
     this.setState({
       newTodo:e.target.value,
       todolist:this.state.todolist
     })
     localStorage.save('todolist',this.state.todolist)
  }

  addTodo(e){
    this.state.todolist.push({
      id:idMaker(),
      title:e.target.value,
      status:null,
      deleted:false
    })
    this.setState({
      newTodo:'',
      todolist:this.state.todolist
    })
    localStorage.save('todolist',this.state.todolist)
  }
  
}

let id = 0
function idMaker(){
    id += 1
    return id
  }


