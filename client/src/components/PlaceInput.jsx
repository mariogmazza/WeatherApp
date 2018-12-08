import React from "react";
import { connect } from "react-redux";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  loadWeather,
  getCityName,
  changeWeather
} from "../redux/actions/getWeatherAction";

// import { Input } from "semantic-ui-react";

const mapState = state => ({});

const actions = {
  loadWeather,
  getCityName,
  changeWeather
};

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
    this.setState({ selectedCity: address.split(",")[0] });

    console.log("client", address.split(",")[0]);
    this.props.changeWeather({});
    this.props.loadWeather(address.split(",")[0]); //city name
    this.props.getCityName(address.split(",")[0]);
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
              <input
                {...getInputProps({
                  placeholder: "Search for your city?",
                  className: "input-search"
                  // loading: this.state.isLoading,
                  // fluid:true,
                  // transparent:true,
                  // size:'big'
                })}
                value={
                  this.state.selectedCity
                    ? this.state.selectedCity
                    : this.state.address
                }
              />

              {/* <div className="autocomplete-dropdown-container"> */}
              <div className="out">
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? {
                        backgroundColor: "rgba(19, 16, 16, 0.041)",
                        cursor: "pointer",
                        fontSize: "2.3vw",
                        color: "white",
                        paddingBottom: "3px"
                      }
                    : {
                        backgroundColor: "#1d1d2100",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "2vw",
                        padding: "5px"
                      };

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

export default connect(
  mapState,
  actions
)(PlaceInput);
