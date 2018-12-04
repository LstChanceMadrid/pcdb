import React, { Component } from 'react'

export default class UserHome extends Component {


  render() {


    window.location = 
    console.log(window.location)
    let username = window.location.split('#')[1]
    console.log(username)


    return (
      <div>
        {username}
        <h1>User Home</h1>
      </div>
    )
  }
}
