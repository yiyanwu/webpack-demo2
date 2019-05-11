import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo:'test',
      todolist:[
        {id:1,title:'吃饭',status:'completed',deleted:false}
      ]
    }
  }
  
  render(){
    let todos = this.state.todolist.map((item,index)=>{
      return <li>{item.title}</li>
    })

    return(
      <div className="App">
        <h1>我的待办</h1>
        <div className="InputWrapper">
          <input type="text" value={this.state.newTodo} />
        </div>
        <ol>{todos}</ol>
      </div>
    )
  }
}


