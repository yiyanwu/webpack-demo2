import React,{Component} from 'react';
import './TodoInput.css'

export default class TodoInput extends Component {
    render(){
        return <input type="text" value={this.props.content}
        className="TodoInput" 
        onKeyPress={this.submit.bind(this)} 
        onChange={this.changeTitle.bind(this)}
        />
    }
    
    changeTitle(e){
       this.props.onChange(e)
    }
    submit(e){
        if(e.key === 'Enter'){
            if(e.target.value.trim() !== ''){
                this.props.onSubmit(e)
            }
        }
    }
}