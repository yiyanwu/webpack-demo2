(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(9),r=n.n(i),o=(n(16),n(1)),l=n(2),c=n(4),u=n(3),h=n(5),d=(n(17),n(18),n(19),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("input",{type:"text",value:this.props.content,className:"TodoInput",onKeyPress:this.submit.bind(this),onChange:this.changeTitle.bind(this)})}},{key:"changeTitle",value:function(e){this.props.onChange(e)}},{key:"submit",value:function(e){"Enter"===e.key&&""!==e.target.value.trim()&&this.props.onSubmit(e)}}]),t}(a.Component)),p=(n(20),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"TodoItem"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.finish.bind(this)}),s.a.createElement("span",{className:"title"},this.props.todo.title),s.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}},{key:"delete",value:function(e){this.props.onDelete(e,this.props.todo)}},{key:"finish",value:function(e){this.props.onFinish(e,this.props.todo)}}]),t}(a.Component)),m=(n(21),n(7)),f=n(6),b=n.n(f);b.a.init({appId:"5VhMl5376m5Gmtw3Q2cBv7NS-gzGzoHsz",appKey:"IqnWY08C6jRNrMONPrjs46k1"});b.a;var g={getByUser:function(e,t,n){var a=new b.a.Query("Todo");a.equalTo("deleted",!1),a.find().then(function(e){var n=e.map(function(e){return Object(m.a)({id:e.id},e.attributes)});t.call(null,n)},function(e){n&&n.call(null,e)})},create:function(e,t,n){var a=e.status,s=e.title,i=e.deleted,r=new(b.a.Object.extend("Todo"));r.set("title",s),r.set("status",a),r.set("deleted",i);var o=new b.a.ACL;o.setPublicReadAccess(!1),o.setWriteAccess(b.a.User.current(),!0),o.setReadAccess(b.a.User.current(),!0),r.setACL(o),r.save().then(function(e){t.call(null,e.id)},function(e){n&&n.call(null,e)})},update:function(e,t,n){var a=e.id,s=e.title,i=e.status,r=e.deleted,o=b.a.Object.createWithoutData("Todo",a);void 0!==s&&o.set("title",s),void 0!==i&&o.set("status",i),void 0!==r&&o.set("deleted",r),o.save().then(function(e){t&&t.call(null)},function(e){return n&&n.call(null,e)})},destroy:function(e,t,n){g.update({id:e,deleted:!0},t,n)}};function v(){var e=b.a.User.current();return e?O(e):null}function O(e){return Object(m.a)({id:e.id},e.attributes)}var E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"signUp",onSubmit:this.props.onSubmit.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:this.props.formData.email,onChange:this.props.onChange.bind(null,"email")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.props.formData.username,onChange:this.props.onChange.bind(null,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.props.formData.password,onChange:this.props.onChange.bind(null,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c")))}}]),t}(a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"signIn",onSubmit:this.props.onSubmit.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.props.formData.username,onChange:this.props.onChange.bind(null,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.props.formData.password,onChange:this.props.onChange.bind(null,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55"),s.a.createElement("a",{href:"#",onClick:this.props.onForgotPassword},"\u5fd8\u8bb0\u5bc6\u7801\u4e86\uff1f")))}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:"signUp"},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"switch",value:function(e){this.setState({selected:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"signInOrSignUp"},s.a.createElement("nav",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.switch.bind(this)}),"\u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.switch.bind(this)}),"\u767b\u5f55")),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?s.a.createElement(E,{formData:this.props.formData,onSubmit:this.props.onSignUp,onChange:this.props.onChange}):null,"signIn"===this.state.selected?s.a.createElement(y,{formData:this.props.formData,onSubmit:this.props.onSignIn,onForgotPassword:this.props.onForgotPassword,onChange:this.props.onChange}):null))}}]),t}(a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"forgotPassword"},s.a.createElement("h3",null,"\u91cd\u7f6e\u5bc6\u7801"),s.a.createElement("form",{className:"forgotPassword",onSubmit:this.props.onSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:this.props.formData.email,onChange:this.props.onChange.bind(null,"email")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u53d1\u9001\u91cd\u7f6e\u90ae\u4ef6"),s.a.createElement("a",{href:"#",onClick:this.props.onSignIn},"\u8fd4\u56de\u767b\u5f55"))))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selectedTab:"signInOrsignUp",formData:{email:"",username:"",password:""}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"signUp",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a,s){var i=new b.a.User;i.setUsername(t),i.setPassword(n),i.setEmail(e),i.signUp().then(function(e){var t=O(e);a.call(null,t)},function(e){s.call(null,e)})}(n.email,n.username,n.password,function(e){t.props.onSignUp.call(null,e)},function(e){switch(e.code){case 202:alert("\u7528\u6237\u540d\u5df2\u7ecf\u88ab\u5360\u7528");break;case 203:alert("\u90ae\u7bb1\u5df2\u88ab\u5360\u7528");break;case 200:alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a");break;case 201:alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a");break;default:alert("error")}})}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){b.a.User.logIn(e,t).then(function(e){var t=O(e);n.call(null,t)},function(e){a.call(null,e)})}(n.username,n.password,function(e){t.props.onSignIn.call(null,e)},function(e){switch(e.code){case 210:alert("\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d");break;case 211:alert("\u7528\u6237\u4e0d\u5b58\u5728");break;case 217:alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a");break;case 218:alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a");break;default:alert("error")}})}},{key:"changeFormData",value:function(e,t){var n=JSON.parse(JSON.stringify(this.state));n.formData[e]=t.target.value,this.setState(n)}},{key:"render",value:function(){return s.a.createElement("div",{className:"UserDialog-Wrapper"},s.a.createElement("div",{className:"UserDialog"},"signInOrsignUp"===this.state.selectedTab?s.a.createElement(S,{formData:this.state.formData,onSignIn:this.signIn.bind(this),onSignUp:this.signUp.bind(this),onChange:this.changeFormData.bind(this),onForgotPassword:this.showForgotPassword.bind(this)}):s.a.createElement(w,{formData:this.state.formData,onSubmit:this.resetPassword.bind(this),onChange:this.changeFormData.bind(this),onSignIn:this.returnToSignIn.bind(this)})))}},{key:"showForgotPassword",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="forgotPassword",this.setState(e)}},{key:"returnToSignIn",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="signInOrsignUp",this.setState(e)}},{key:"resetPassword",value:function(e){var t,n,a;e.preventDefault(),t=this.state.formData.email,b.a.User.requestPasswordReset(t).then(function(e){n.call(null,e)},function(e){a.call(null,e)})}}]),t}(a.Component),j=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:v()||{},newTodo:"",todolist:[]};var a=v();return a&&g.getByUser(a,function(e){var t=JSON.parse(JSON.stringify(n.state));t.todoList=e,n.setState(t)}),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todolist.filter(function(e){return!e.deleted}).map(function(t,n){return s.a.createElement("li",{key:n},s.a.createElement(p,{todo:t,onFinish:e.finish.bind(e),onDelete:e.delete.bind(e)}))});return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684\u5f85\u529e",this.state.user.id?s.a.createElement("button",{onClick:this.signOut.bind(this)},"\u767b\u51fa"):null),s.a.createElement("div",{className:"InputWrapper"},s.a.createElement(d,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this),onChange:this.changeTitle.bind(this)})),s.a.createElement("ol",{className:"todoList"},t),this.state.user.id?null:s.a.createElement(k,{onSignUp:this.onSignInOrSignUp.bind(this),onSignIn:this.onSignInOrSignUp.bind(this)}))}},{key:"signOut",value:function(){b.a.User.logOut();var e=JSON.parse(JSON.stringify(this.state));e.user={},this.setState(e)}},{key:"onSignInOrSignUp",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"componentDidUpdate",value:function(){}},{key:"finish",value:function(e,t){var n=this,a=t.status;t.status="completed"===t.status?"":"completed",g.update(t,function(){n.setState(n.state)},function(e){t.statue=a,n.setState(n.state)})}},{key:"delete",value:function(e,t){var n=this;g.destroy(t.id,function(){t.deleted=!0,n.setState(n.state)})}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todolist:this.state.todolist})}},{key:"addTodo",value:function(e){var t=this,n={title:e.target.value,status:"",deleted:!1};g.create(n,function(e){n.id=e,t.state.todolist.push(n),t.setState({newTodo:"",todolist:t.state.todolist})},function(e){console.log(e)})}}]),t}(a.Component);r.a.render(s.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.714f6688.chunk.js.map