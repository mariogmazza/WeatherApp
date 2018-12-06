import React from "react";
import {connect} from 'react-redux'
import PlacesAutocomplete from "react-places-autocomplete";
import {loadWeather} from '../redux/actions/getWeatherAction'

import { Input } from "semantic-ui-react";

const mapState=(state)=>({})

const actions={
  loadWeather
}

class PlaceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      isLoading: false,
      selectedCity: ""
    };
  }

  handleChange = address => {
    this.setState({ address, isLoading: true, selectedCity: "" });
  };

  handleSelect = address => {
    this.setState({ isLoading: false });
    this.setState({ selectedCity: address });

    console.log("client",address.split(",")[0]);
    this.props.loadWeather(address.split(',')[0]);
  
  };

  render() {
    return (
      <React.Fragment>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <React.Fragment>
              <Input
                {...getInputProps({
                  placeholder: "Where do you live? ...",
                  className: 'search_custom',
                  loading: this.state.isLoading,
                  fluid:true,
                  transparent:true,
                  size:'big'

                })}
                value={
                  this.state.selectedCity
                    ? this.state.selectedCity
                    : this.state.address
                }
              />

              <div className="autocomplete-dropdown-container">
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: 'rgba(19, 16, 16, 0.041)', cursor: 'pointer', fontSize:'2vw' }
                    : { backgroundColor: '#1d1d2100', cursor: 'pointer',fontSize:'2vw',textShadow:' 1px 3px 1px #767676' };

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                          style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          )}
        </PlacesAutocomplete>
      </React.Fragment>
    );
  }
} 

export default connect(mapState,actions)(PlaceInput);
