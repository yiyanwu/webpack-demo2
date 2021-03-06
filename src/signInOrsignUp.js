import React, {Component} from 'react';
import SignUpForm from './signUpForm'
import SignInForm from './signInForm'


export default class signInOrsignUp  extends Component {
    constructor(props){
        super(props)
        this.state={
            selected: 'signUp'
        }
    }

    switch (e) {
        this.setState({
            selected:e.target.value
        })
    }

    render(){
        return(
        <div className="signInOrSignUp">
          <nav>
            <label>
              <input type="radio" value="signUp"
              checked={this.state.selected === 'signUp'}
              onChange={this.switch.bind(this)}
              />注册
            </label>
            <label>
             <input type="radio" value="signIn"
             checked={this.state.selected === 'signIn'}
             onChange={this.switch.bind(this)}
             />登录
            </label>
          </nav>
          <div className="panes">
           {this.state.selected === 'signUp' ? 
           <SignUpForm formData={this.props.formData}
           onSubmit={this.props.onSignUp}
           onChange={this.props.onChange}/>
           : null}
           {this.state.selected === 'signIn' ? 
           <SignInForm formData={this.props.formData}
           onSubmit={this.props.onSignIn}
           onForgotPassword={this.props.onForgotPassword}
           onChange={this.props.onChange}/>
           : null}
          </div>
        </div>
      )
    }
}