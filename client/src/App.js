import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Header from "../src/components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;
