import React, { Component } from 'react'
// import {Link, NavLink} from 'react-router-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UserHome from './content/UserHome'
import Home from './content/Home'
import Login from './content/Login'
import Register from './content/Register'

export default class Content extends Component {
  render() {
    return (
      <main>
        <h1>Content</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/" component={UserHome} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>

      </main>
    )
  }
}
