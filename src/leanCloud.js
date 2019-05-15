import AV from 'leancloud-storage'

var APP_ID = '5VhMl5376m5Gmtw3Q2cBv7NS-gzGzoHsz'
var APP_KEY = 'IqnWY08C6jRNrMONPrjs46k1'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV

export function signUp(username,password,successFn,errorFn){
  var user = new AV.User() //新建 AVUser 对象实例
  user.setUsername(username) //设置用户名
  user.setPassword(password) //设置密码
  user.signUp().then(function(loginedUser) {
    let user = getUserFromAVUser(loginedUser) //调用获取user信息的函数
    successFn.call(null,user)
  },function(error) {
    errorFn.call(null,error)
  })

  return undefined
}

export function signIn(username,password,successFn,errorFn){
  AV.User.logIn(username,password).then(function(loginedUser){
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null,user)
  },function(error){
    errorFn.call(null,error)
  })
}

export function getCurrentUser(){
  let user = AV.User.current()
  if(user){
    return getUserFromAVUser(user)
  }else{
    return null
  }
}

export function signOut(){
  AV.User.logOut()
  return undefined
}

function getUserFromAVUser(AVUser){ //这函数是为了拿到注册时候的user
  return {
    id:AVUser.id,
    ...AVUser.attributes
  }
}