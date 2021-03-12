import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Pages/Home';
import Daily from './Pages/Daily';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/daily" component={Daily}/>
        </Switch>
      </Router>
    )
  }
}
export default Routes;