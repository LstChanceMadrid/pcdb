import React, { Component } from 'react'
// import {Link, NavLink} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import UserHome from './content/UserHome'
import Home from './content/Home'
import Login from './content/Login'
import Register from './content/Register'

export default class Content extends Component {
  render() {
    console.log(this.props)
    return (
      <main>
        <div className="nav-placeholder"></div>
        <h1>Content</h1>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/*" component={Home} />

            <Route exact path="#/home" component={UserHome} />
          </Switch>
      </main>
    )
  }
}
