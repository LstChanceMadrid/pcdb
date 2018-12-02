import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div>
          <Header />

          <Content />

          <Footer />
          
      </div>
    );
  }
}

export default App;
