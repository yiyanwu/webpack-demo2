import React, { Component } from 'react';
import './UserDialog.css'
import {signUp,signIn} from './leanCloud'


export default class UserDialog extends Component {
    constructor(props){
        super(props)
        this.state = {
          selected: 'signUp',
          selectedTab: 'signInOrsignUp',
          formData:{
              email:'',
              username:'',
              password:''
          }
        }
    }
    switch (e) {
        this.setState({
            selected:e.target.value
        })
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
        let signUpForm = (
            <form className="signUp" onSubmit={this.signUp.bind(this)}> {/* 注册*/}
              <div className="row">
                <label>邮箱</label>
                <input type="text" value={this.state.formData.email}
                 onChange={this.changeFormData.bind(this,'email')}
                />
              </div>
              <div className="row">
                <label>用户名</label> 
                <input type="text" value={this.state.formData.username}
                 onChange={this.changeFormData.bind(this,'username')}
                 /* bind 不仅可以绑定 this，还可以绑定第一个参数 */
                />
              </div>
              <div className="row">
                <label>密码</label>
                <input type="password" value={this.state.formData.password}
                 onChange={this.changeFormData.bind(this,'password')}
                />
              </div>
              <div className="row actions">
                <button type="submit">注册</button>
              </div>
            </form>
        )
        let signInForm = (
          <form className="signIn" onSubmit={this.signIn.bind(this)}> {/* 登录*/}
            <div className="row">
              <label>用户名</label>
              <input type="text" value={this.state.formData.username}
               onChange={this.changeFormData.bind(this,'username')}
              />
            </div>
            <div className="row">
              <label>密码</label>
              <input type="password" value={this.state.formData.password}
               onChange={this.changeFormData.bind(this,'password')}
              />
            </div>
            <div className="row actions">
              <button type="submit">登录</button>
              <a href="#" onClick={this.showForgotPassword.bind(this)}>忘记密码了？</a>
            </div>
          </form>
        )

    let signInOrsignUp = (
      <div className="signInOrSignUp">
       <nav>
         <label>
           <input type="radio" value="signUp"
           checked={this.state.selected === 'signUp'}
           onChange={this.switch.bind(this)}
           />注册</label>
        <label>
           <input type="radio" value="signIn"
           checked={this.state.selected === 'signIn'}
           onChange={this.switch.bind(this)}
           />登录</label>
       </nav>
       <div className="panes">
        {this.state.selected === 'signUp' ? signUpForm : null}
        {this.state.selected === 'signIn' ? signInForm : null}
       </div>
      </div>
    )
    let forgotPassword = (
      <div className="forgotPassword">
       <h3>重置密码</h3>
       <form className="forgotPassword" onSubmit={this.resetPassword.bind(this)}>{/* 登录*/}
          <div className="row">
            <label>邮箱</label>
            <input type="text" value={this.state.formData.email}
              onChange={this.changeFormData.bind(this, 'email')}/>
          </div>
          <div className="row actions">
            <button type="submit">发送重置邮件</button>
          </div>
       </form>
      </div>
    )
        
    return(
        <div className="UserDialog-Wrapper">
         <div className="UserDialog">
          {this.state.selectedTab === 'signInOrsignUp' ? signInOrsignUp : forgotPassword}
        </div>
       </div>
      )
    }
    showForgotPassword(){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.selectedTab = 'forgotPassword'
      this.setState(stateCopy)
    }
    resetPassword(){}
}