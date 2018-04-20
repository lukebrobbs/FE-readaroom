import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TimeChartContainer from "./components/TimeChart/TimeChartContainer";
import StartButtonContainer from "./components/StartButton/StartButtonContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <div className="container">
            <StartButtonContainer />
            <TimeChartContainer />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
