import React, { Component } from "react";
import HomePage from './components/HomePage';
import Header from './components/Header';
import About from './components/About';
import Books from './components/Books';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Route, Switch } from "react-router-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/books" component={Books}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      </>
    );
  }
}

export default App;
