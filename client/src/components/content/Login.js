import React, { Component } from 'react'
import axios from 'axios'
import {setAuthenticationToken} from '../../utils'
import { connect } from 'react-redux';




const LOGIN_URL = 'http://localhost:5000/api/login'


export default class Login extends Component {

  state = {
    user : {}
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

handleLoginButton = () => {
  let user = this.state
  axios.post(LOGIN_URL, {
    username : user.username,
    password : user.password
  }).then(response => {
    if (response.data.token !== undefined) {
    localStorage.setItem('jsonwebtoken', response.data.token)
    
    setAuthenticationToken(response.data.token)

    window.location.href = `http://localhost:3000/hello/#${user.username}#/home`
    } else {
      this.setState({
        user : {
          login : 'That is an incorrect Username or Password'
        }
      })
    }
  })
}



  render() {
    return (
      <div>
        <h1>Login</h1>

        <input type="text" name="username" onChange={this.handleTextBoxChange} placeholder="Username" autoFocus />

        <input type="text" name="password" onChange={this.handleTextBoxChange} placeholder="Password" />

            <input type="submit" onClick={this.handleLoginButton} value="Log In" />

            {this.state.user.login}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user : state.user // access with this.props.user
  }
}


export default connect()(user)