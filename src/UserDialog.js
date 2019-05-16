import React, { Component } from 'react';
import './UserDialog.css'
import {signUp,signIn,sendPasswordResetEmail} from './leanCloud'
import SignInOrsignUp from './signInOrsignUp'
import ForgotPasswordForm from './forgotPasswordForm'

export default class UserDialog extends Component {
    constructor(props){
        super(props)
        this.state = {
          selectedTab: 'signInOrsignUp',
          formData:{
              email:'',
              username:'',
              password:''
          }
        }
    }
       
    signUp(e){
        e.preventDefault()
        let {email,username,password} = this.state.formData
        let success = (user)=>{
           this.props.onSignUp.call(null,user)
        }
        let error = (error)=>{
            switch(error.code){
              case 202:
              alert('用户名已经被占用')
              break
              case 203:
              alert('邮箱已被占用')
              break
              case 200:
              alert('用户名不能为空')
              break
              case 201:
              alert('密码不能为空')
              break
              default:
              alert('error')
              break
            }
        }
        signUp(email,username,password,success,error)
    }
    signIn(e){
      e.preventDefault()
      let {username,password} = this.state.formData
        let success = (user)=>{
           this.props.onSignIn.call(null,user)
        }
        let error = (error)=>{
          switch(error.code){
            case 210:
            alert('用户名与密码不匹配')
            break
            case 211:
            alert('用户不存在')
            break
            case 217:
            alert('用户名不能为空')
            break
            case 218:
            alert('密码不能为空')
            break
            default:
            alert('error')
            break
          }
        }
        signIn(username,password,success,error)
    } 
    changeFormData(key,e){
        //直接写this.state.formData.username会报错
        let statecopy = JSON.parse(JSON.stringify(this.state))// 用 JSON 深拷贝
        statecopy.formData[key] = e.target.value
        this.setState(statecopy)
    }
    

    render(){ 
     return(
        <div className="UserDialog-Wrapper">
         <div className="UserDialog">
         {this.state.selectedTab === 'signInOrsignUp' ?
            <SignInOrsignUp formData={this.state.formData}
            onSignIn={this.signIn.bind(this)}
            onSignUp={this.signUp.bind(this)}
            onChange={this.changeFormData.bind(this)}
            onForgotPassword={this.showForgotPassword.bind(this)}
            /> :
            <ForgotPasswordForm formData={this.state.formData}
            onSubmit={this.resetPassword.bind(this)}
            onChange={this.changeFormData.bind(this)}
            onSignIn={this.returnToSignIn.bind(this)}
            />
         }
        </div>
       </div>
      )
    }

    showForgotPassword(){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.selectedTab = 'forgotPassword'
      this.setState(stateCopy)
    }

    returnToSignIn(){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.selectedTab = 'signInOrsignUp'
      this.setState(stateCopy)
    }

    resetPassword(e){
      e.preventDefault()
      sendPasswordResetEmail(this.state.formData.email)
    }
}