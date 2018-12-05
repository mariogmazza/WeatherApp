import React, { Component } from 'react';
import WeatherApp from '../containers/WeatherApp'
import { Route, Switch, withRouter } from 'react-router-dom'


const App = () => {
    return (
      <Switch>
        <Route exact path='/' component={WeatherApp} />
      </Switch>
    );
  }

export default withRouter(App);
