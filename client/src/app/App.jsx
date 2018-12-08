import React from 'react';
import WeatherApp from '../containers//weatherapp/WeatherApp';
import { Route, Switch, withRouter } from 'react-router-dom';
import NewWeather from '../containers/newWeather/NewWeather';


const App = () => {
    return (
      <Switch>
        <Route exact path='/fake' component={WeatherApp} />
        <Route exact path='/' component={NewWeather} />

      </Switch>
    );
  }

export default withRouter(App);
