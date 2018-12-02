import React, { Component } from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Logo from './Logo'
import Nav from './nav/Nav'
import UserNav from './nav/UserNav'


export default class Header extends Component {
  render() {
    return (
      <header>
          HEADER
                <Switch>
                    <Route exact path="*/username/*" component={UserNav} />
                    <Route exact path="/*" component={Nav} />
                </Switch>
      </header>
    )
  }
}
