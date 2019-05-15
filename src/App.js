import React,{Component} from 'react';
import './App.css';
import './reset.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import UserDialog from './UserDialog'
import {getCurrentUser,signOut} from './leanCloud'



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:getCurrentUser() || {},
      newTodo:'',
      todolist:[]
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
        <h1>{this.state.user.username || '我'}的待办
          {this.state.user.id ? <button onClick={this.signOut.bind(this) }>登出</button> : null}
        </h1>
        <div className="InputWrapper">
          <TodoInput content={this.state.newTodo} 
          onSubmit={this.addTodo.bind(this)}
          onChange={this.changeTitle.bind(this)}
          />
        </div>
        <ol className="todoList">{todos}</ol>
        {this.state.user.id ? null : <UserDialog onSignUp={this.onSignUp.bind(this)}/>}
      </div>
    )
  }

  signOut(){
    signOut()
    let stateCopy = JSON.parse(JSON.stringify(this.state)) 
    stateCopy.user = {}
    this.setState(stateCopy)
  } 

  onSignUp(user){
    let stateCopy = JSON.parse(JSON.stringify(this.state)) 
    stateCopy.user = user
    this.setState(stateCopy)
  }

  componentDidUpdate(){}

  finish(e,todo){
    todo.status = todo.status === 'completed' ? '': 'completed'
    this.setState(this.state)
  }

  delete(e,todo){
    todo.deleted = true
    this.setState(this.state)
  }

  changeTitle(e){
     this.setState({
       newTodo:e.target.value,
       todolist:this.state.todolist
     })
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
  }
  
}

let id = 0
function idMaker(){
    id += 1
    return id
  }


