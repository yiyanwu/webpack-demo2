import React,{Component} from 'react';
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import './reset.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo:'',
      todolist:[
        {id:1,title:'第一個待辦'},
        {id:2,title:'第二個待辦'}
      ]
    }
  }
  
  render(){
    let todos = this.state.todolist.map((item,index)=>{
      return (
        <li>
          <TodoItem todo={item} />
        </li>
      )
    })

    return(
      <div className="App">
        <h1>我的待办</h1>
        <div className="InputWrapper">
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo}/>
        </div>
        <ol>{todos}</ol>
      </div>
    )
  }

  addTodo(){
    console.log('添加一个todolist')
  }
}


