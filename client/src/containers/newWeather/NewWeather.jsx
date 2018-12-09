import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewWeather.css";
import PINIMG from "../../assets/img/placeholder.svg";
import PlaceInput from "../../components/PlaceInput";
import {
  loadWeather,
  getCityName,
  changeWeather
} from "../../redux/actions/getWeatherAction";
import setIcon from "../../services/setIcon";
import WeekForecast from "../../components/WeekForecast";
import _ from "lodash";

const mapState = state => ({
  cityname: state.cityname.data,
  todayTemp: state.getWeather.data
});

const actions = {
  loadWeather,
  getCityName,
  changeWeather
};

class NewWeather extends Component {
  componentDidMount = () => {
    if (!this.props.todayTemp) {
      this.props.loadWeather("orlando");
      this.props.getCityName("orlando");
    }
  };

  render() {
    const { cityname, todayTemp } = this.props;
    let CURR_TEMP;
    let WEEK_FORECAST;
    let TODAY_ICON;

    if (!_.isEmpty(todayTemp)) {
      TODAY_ICON = setIcon(todayTemp.condition.code);
      WEEK_FORECAST = todayTemp.forecast;
      CURR_TEMP = todayTemp.temp;
    }

    return (
      <React.Fragment>
        <div className="container-main" />

        <div className="main-grid">
          <div className="main-display">
            <PlaceInput />

            <div className="icon-cityname">
              <img
                placeholder="Where do you live?"
                src={PINIMG}
                style={{ width: "30px", height: "40px" }}
                alt=""
              />
              <div className="cityname">{cityname ? cityname : "CITY"}</div>
            </div>
          </div>

          <div className="sevenday-forecast">
            <div className="big-temp">
              <span
                className="today-date"
                style={{
                  fontSize: "2em",
                  fontWeight: "bold",
                  marginTop: "5px"
                }}
              >
                TODAY
              </span>
              <br />
              <br />
              <br />
              <i className={`${TODAY_ICON} seven-icon-big `} />
              <br />
              <br />
              <span
                className="temp-big"
                style={{ fontSize: "2em", fontWeight: "bold" }}
              >
                {CURR_TEMP ? `${CURR_TEMP} F `: "N/A"}
              </span>
            </div>

            {WEEK_FORECAST
              ? WEEK_FORECAST.slice(1).map(item => (
                  <WeekForecast
                    key={item.code}
                    icon={setIcon(item.code)}
                    day={item.day}
                    high={item.high}
                    low={item.low}
                    text={item.text}
                  />
                ))
              : ""}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(NewWeather);
