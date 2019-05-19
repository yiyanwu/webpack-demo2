import React,{Component} from 'react';
import './App.css';
import './reset.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import UserDialog from './UserDialog'
import {getCurrentUser,signOut,TodoModel} from './leanCloud'
import Time from './time'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:getCurrentUser() || {},
      newTodo:'',
      todolist:[]
    }
    let user = getCurrentUser()
    if(user) {
      TodoModel.getByUser(user,(todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todolist = todos
        this.setState(stateCopy)
      })
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
        <Time/>
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
        {this.state.user.id ? null : 
        <UserDialog 
        onSignUp={this.onSignInOrSignUp.bind(this)}
        onSignIn={this.onSignInOrSignUp.bind(this)}
        />}
      </div>
    )
  }

  signOut(){
    signOut()
    let stateCopy = JSON.parse(JSON.stringify(this.state)) 
    stateCopy.user = {}
    this.setState(stateCopy)
  } 

  onSignInOrSignUp(user){
    let stateCopy = JSON.parse(JSON.stringify(this.state)) 
    stateCopy.user = user
    this.setState(stateCopy)
  }

  componentDidUpdate(){}

  finish(e,todo){
    let oldStatus = todo.status
    todo.status = todo.status === 'completed' ? '': 'completed'
    TodoModel.update(todo,() => {
      this.setState(this.state)
    },(error) => {
      todo.statue = oldStatus
      this.setState(this.state)
    })
  }

  delete(e,todo){
    TodoModel.destroy(todo.id,() => {
      todo.deleted = true
      this.setState(this.state)
    })
  }

  changeTitle(e){
     this.setState({
       newTodo:e.target.value,
       todolist:this.state.todolist
     })
  }

  addTodo(e){
    let newTodo={
      title:e.target.value,
      status:'',
      deleted:false
    }
    TodoModel.create(newTodo,(id) => {
      newTodo.id = id
      this.state.todolist.push(newTodo)
      this.setState({
        newTodo:'',
        todolist:this.state.todolist
      })
    },(error) => {
      console.log(error)
    })
    
  }
}


