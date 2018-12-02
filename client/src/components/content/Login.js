import React, { Component } from 'react'
import axios from 'axios'
import {setAuthenticationToken} from '../../utils'



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
  let user = this.state.user

  axios.post(LOGIN_URL, {
    username : user.username,
    password : user.password
  }).then(response => {
    localStorage.setItem('jsonwebtoken', response.data.token)

    setAuthenticationToken(response.data.token)
  })
}



  render() {
    return (
      <div>
        <h1>Login</h1>

        <input type="text" name="username" onChange={this.handleTextBoxChange} placeholder="Username" autoFocus />

        <input type="text" name="password" onChange={this.handleTextBoxChange} placeholder="Password" />

            <input type="submit" onClick={this.handleLoginButton} value="Log In" />
      </div>
    )
  }
}
