import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import StartButtonContainer from './components/StartButton/StartButtonContainer';
import Home from './components/Home';
import Setup from './components/Setup';
import TimeChartContainer from './components/TimeChart/TimeChartContainer';
import MoodBoardContainer from './components/MoodBoard/MoodBoardContainer';
import SummaryContainer from './components/Summary/SummaryContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <StartButtonContainer />
          <Route exact path="/home" component={Home} />
          <Route exact path="/setup" component={Setup} />
          <Route exact path="/timechart" component={TimeChartContainer} />
          <Route exact path="/moodboard" component={MoodBoardContainer} />
          <Route exact path="/summary" component={SummaryContainer} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
