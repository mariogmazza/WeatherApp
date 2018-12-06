import React, { Component } from "react";
import { connect } from "react-redux";
import cloudy from "../../assets/cloudy.svg";
import drop from "../../assets/drop.svg";
import sun from "../../assets/sun.svg";
import snowy from "../../assets/snowflake.svg";
import thunder from "../../assets/storm.svg";
import tornado from "../../assets/tornado.svg";
import forward from "../../assets/forward.svg";
import PlaceInput from "../../components/PlaceInput";

// TODO: Credit the icon makers
// https://www.flaticon.com/packs/weather-set-2
// https://www.flaticon.com/packs/weather-53

const mapState = state => ({
  imgCondition: state.newImg.data,
  imgURL: state.getWeather.data
});
const actions = {};

class ForecastApp extends Component {
  render() {
    let backImg;
    let iconImg;
    let TEMP;
    let condTEXT;
    if (this.props.imgCondition) {
      backImg = `url(${this.props.imgCondition})`;
      console.log(this.props.imgCondition);
      if (this.props.imgCondition.includes("clearsky")) {
        iconImg = sun;
      } else if (this.props.imgCondition.includes("snowy")) {
        iconImg = snowy;
      } else if (this.props.imgCondition.includes("thounderstorm")) {
        iconImg = thunder;
      } else if (this.props.imgCondition.includes("rainning")) {
        iconImg = drop;
      } else if (this.props.imgCondition.includes("tornado")) {
        iconImg = tornado;
      }
    } else {
      backImg =
        'url("https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")';
    }

    if (this.props.imgURL) {
      TEMP = this.props.imgURL.temp;
      condTEXT = this.props.imgURL.condition.text;
    }

    console.log("render", this.props.imgCondition);
    return (
      <div className="weather-container">
        <div
          className="location"
          style={{
            backgroundImage: backImg,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="temp_display">
            {!TEMP ? (
              <div className="header_display">
                <div>Welcome to your personal Weather App </div>
                <p>You can start by searching for a place </p>
                <PlaceInput />
              </div>
            ) : (
              <div className="input_custom">
                <PlaceInput />
              </div>
            )}

            <br />
            <div>{condTEXT}</div>
            <br />
            <br />
            <br />
            <img src={iconImg} style={{ width: "80px" }} alt="" />
            <br />
            <br />
            <br />

            <div className="temp_info">{TEMP}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(ForecastApp);
