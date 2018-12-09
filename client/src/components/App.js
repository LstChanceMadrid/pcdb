import React, { Component } from 'react';
import '../styles/App.css';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { Switch, Route } from 'react-router-dom';
import UserHome from './main/UserHome'
import Home from './main/Home'
import Login from './main/Login'
import Register from './main/Register'

class App extends Component {

  render() {

    return (
      <div>
          <Header />

          <Main>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />

              <Route path="/:username/home" component={UserHome} />
            </Switch>
          </Main>


          <Footer />
      </div>
    );
  }
}

export default App;
