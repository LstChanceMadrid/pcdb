import React, { Component } from 'react'



const REGISTER_URL = "http://localhost:5000/api/register"




export default class Register extends Component {



    state = {
        user : {}
    }

    handleTextBoxChange = (e) => {

        this.setState({
            user : {
            ...this.state.user,
            [e.target.name] : e.target.value
            }
        })

    }

    handleRegisterButton = (e) => {

        let user = this.state.user;

        fetch(REGISTER_URL, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        })
    }






  render() {
    return (
      <div>
        <h1>Register</h1>
        <div>
            <input type="text" name="username" onChange={this.handleTextBoxChange} placeholder="Username" autoFocus />

            <input type="text" name="firstname" onChange={this.handleTextBoxChange} placeholder="First Name" />

            <input type="text" name="lastname" onChange={this.handleTextBoxChange} placeholder="Last Name" />

            <input type="email" name="email" onChange={this.handleTextBoxChange} placeholder="Email" />

            <input type="text" name="password" onChange={this.handleTextBoxChange} placeholder="Password" />

            <input type="submit" onClick={this.handleRegisterButton} value="Register" />
        </div>
      </div>
    )
  }
}
