import React from "react";
import {connect} from 'react-redux'
import PlacesAutocomplete from "react-places-autocomplete";
import {loadWeather} from '../redux/actions/getWeatherAction'

import { Input } from "semantic-ui-react";

const mapState=(state)=>({})

const actions={
  loadWeather
}

class LocationSearchInput extends React.Component {
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
            <div>
              <Input
                {...getInputProps({
                  placeholder: "Where do you live? ...",
                  // className: 'location-search-input',
                  loading: this.state.isLoading
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
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };

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
            </div>
          )}
        </PlacesAutocomplete>
      </React.Fragment>
    );
  }
} 

export default connect(mapState,actions)(LocationSearchInput);
