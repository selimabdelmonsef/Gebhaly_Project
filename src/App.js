import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landing_page/landing_page';


export default class App extends React.Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router >
    ) 
  }
}
