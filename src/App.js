import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import PageNotFound from './components/404/404.jsx';
import Header from './components/Header';
import StartButtonContainer from './components/StartButton/StartButtonContainer';
import Home from './components/Home/Home';
import Setup from './components/Setup/Setup';
import TimeChartContainer from './components/TimeChart/TimeChartContainer';
import MoodBarsContainer from './components/MoodBars/MoodBarsContainer';
import SummaryContainer from './components/Summary/SummaryContainer';
import LiveStatsContainer from './components/LiveStats/LiveStatsContainer';
import Footer from './components/Footer';
import MoodGaugeContainer from './components/MoodGauges/MoodGaugeContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <StartButtonContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/setup" component={Setup} />
            <Route exact path="/timechart" component={TimeChartContainer} />
            <Route exact path="/moodbars" component={MoodBarsContainer} />
            <Route exact path="/moodgauges" component={MoodGaugeContainer} />
            <Route exact path="/summary" component={SummaryContainer} />
            <Route exact path="/livestats" component={LiveStatsContainer} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
