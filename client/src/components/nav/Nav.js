import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>Nav</h1>
        <div className="nav-links-container">
            <div><Link to = "/home">Home</Link></div>
            <div><Link to = "/login">Log In</Link></div>
            <div><Link to = "/register">Register</Link></div>
        </div>
      </nav>
    )
  }
}
