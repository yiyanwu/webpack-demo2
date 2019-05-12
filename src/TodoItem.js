import React,{Component} from 'react';

export default class TodoItem extends Component {
    render () {
        return (
         <div>
           <input type="checkbox" 
           checked={this.props.todo.status === 'completed'}
           onChange={this.finish.bind(this)}/>
           {this.props.todo.title}
           <button onClick={this.delete.bind(this)}>删除</button>
         </div>
        )
    }

    delete(e){
        this.props.onDelete(e,this.props.todo)
    }

    finish(e){
        this.props.onFinish(e,this.props.todo)
    }
}