import React, { Component } from 'react'
import {connect} from 'react-redux'

class UserHome extends Component {


  render() {

    return (
      <div>
        {this.props.username}
        <h1>User Home</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username : state.username
  }
}

export default connect(mapStateToProps)(UserHome)