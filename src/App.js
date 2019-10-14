import React, { Component } from "react";
import { Route } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Notes from "./notes";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <main role="main" className="container">
          <Route path="/notes" component={Notes} />
          <Route path="/item2" component={() => <h1>Item 2</h1>} />
          <Route path="/item3" component={() => <h1>Item 3</h1>} />
        </main>
      </div>
    );
  }
}

export default App;
