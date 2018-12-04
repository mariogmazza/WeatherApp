import React, { Component } from "react";
import {Container} from 'semantic-ui-react'

import PlacesAutocomplete from "../components/auto";
import Testme from '../components/Testme'



class WeatherApp extends Component {

  render() {
    return (
      <Container textAlign={'center'}>

        <PlacesAutocomplete />
        
      </Container>
    );
  }
}

export default WeatherApp;
