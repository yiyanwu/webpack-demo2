import React,{Component} from 'react';

export default class TodoInput extends Component {
    render(){
        return <input type="text" Value={this.props.content} 
        onKeyPress={this.submit.bind(this)} 
        onChange={this.changeTitle.bind(this)}
        />
    }
    
    changeTitle(e){
       this.props.onChange(e)
    }
    submit(e){
        if(e.key === 'Enter'){
            this.props.onSubmit(e)
        }
    }
}