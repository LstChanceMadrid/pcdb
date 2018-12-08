import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actionCreators'

import axios from 'axios'
import {setAuthenticationToken} from '../../utils'




const LOGIN_URL = 'http://localhost:5000/api/login'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user : {
        username : null,
        password : null
      }
    }
  }

  handleUsernameChange = (e) => {

    this.setState({
       user: {
         ...this.state.user, 
         username : e.target.value
       }
      })  
  }


  handlePasswordChange = (e) => {

    this.setState({
       user: {
         ...this.state.user, 
         password : e.target.value
       }
      })  
  }

handleLoginButton = () => {

  this.props.onUserLogin(this.state.user.username)


  // let user = this.state.user
  
  // axios.post(LOGIN_URL, {
  //   username : user.username,
  //   password : user.password
  // }).then(response => {
  //   if (response.data.token !== undefined) {
      
  //   localStorage.setItem('jsonwebtoken', response.data.token)
    

  //   setAuthenticationToken(response.data.token)
    
  //   this.props.onUserLogin(this.state.user.username)
    

  //   } else {
  //     this.setState({
  //       user : {
  //         login : 'That is an incorrect Username or Password'
  //       }
  //     })
  //   }
  // })
}



  render() {
    return (
      <div>
        <h1>Login</h1>

        <input type="text" name="username" onChange={this.handleUsernameChange} placeholder="Username" autoFocus />

        <input type="text" name="password" onChange={this.handlePasswordChange} placeholder="Password" />

        <button type="submit" onClick={this.handleLoginButton}>Log In</button>

        {this.state.user.login}{this.props.username}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username : state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUsernameChange : () => dispatch({type: "USERNAME_CHANGE"}),
    onPasswordChange : () => dispatch({type: "PASSWORD_CHANGE"}),
    onUserLogin : () => dispatch({type: "USER_LOGIN"})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)