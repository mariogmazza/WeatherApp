import React from 'react';
import WeatherApp from '../containers//weatherapp/WeatherApp'
import { Route, Switch, withRouter } from 'react-router-dom'


const App = () => {
    return (
      <Switch>
        <Route exact path='/' component={WeatherApp} />
      </Switch>
    );
  }

export default withRouter(App);
