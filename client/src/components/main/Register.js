import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../../store/actionCreators'




class Register extends Component {

    state = {
        user : {}
    }

    componentWillUpdate = () => {
        localStorage.setItem('username', this.state.user.username)
        localStorage.setItem('firstname', this.state.user.firstname)
        localStorage.setItem('lastname', this.state.user.lastname)
        localStorage.setItem('email', this.state.user.email)
        localStorage.setItem('password', this.state.user.password)
      }

    handleTextBoxChange = (e) => {
        this.setState({
            user : {
                ...this.state.user,
                [e.target.name] : e.target.value
            }
        })
    }






  render() {
      localStorage.setItem('username', this.state.user.username)
      localStorage.setItem('firstname', this.state.user.firstname)
      localStorage.setItem('lastname', this.state.user.lastname)
      localStorage.setItem('email', this.state.user.email)
      localStorage.setItem('password', this.state.user.password)
      
    return (
      <div>
        <h1>Register</h1>
        <div>
            <input type="text" name="username" onChange={this.handleTextBoxChange} placeholder="Username" autoFocus />

            <input type="text" name="firstname" onChange={this.handleTextBoxChange} placeholder="First Name" />

            <input type="text" name="lastname" onChange={this.handleTextBoxChange} placeholder="Last Name" />

            <input type="email" name="email" onChange={this.handleTextBoxChange} placeholder="Email" />

            <input type="text" name="password" onChange={this.handleTextBoxChange} placeholder="Password" />

            <input type="submit" onClick={this.props.register} value="Register" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register : () => dispatch(actionCreators.registerUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)