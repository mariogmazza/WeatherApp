import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewWeather.css";
import PINIMG from "../../assets/img/pin.svg";
import PlaceInput from "../../components/PlaceInput";
import { loadWeather, getCityName, changeWeather } from "../../redux/actions/getWeatherAction";
import setIcon from "../../services/setIcon";
import WeekForecast from "../../components/WeekForecast";
import _ from 'lodash';
import Media from "react-media";

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

  state={
    selectedCity: ""
  }
  componentDidMount = () => {
    if (!this.props.todayTemp) {
      console.log("Im being called");
      this.props.loadWeather("orlando");
      this.props.getCityName("orlando");
    }
  };


  // handleChange = (e, address )=> {
  //   e.preventDefault()
  //   this.setState({selectedCity: address });
  //   this.props.changeWeather({})
  //   this.props.loadWeather(address); //city name
  //   this.props.getCityName(address);
  // };

  updateInputValue(evt) {
    this.setState({
      selectedCity: evt.target.value
    });

    this.props.changeWeather({})
    this.props.loadWeather(this.state.selectedCity); //city name
    this.props.getCityName(this.state.selectedCity);
  }

  // handleSelect = address => {
  // console.log(address)
  //   this.props.changeWeather({})
  //   this.props.loadWeather(address); //city name
  //   this.props.getCityName(address);
  // };

  render() {
    const { cityname, todayTemp } = this.props;
    let CURR_TEMP;
    let WEEK_FORECAST;
    let TODAY_ICON;

    // console.log(Object.keys(todayTemp).length === 0 );


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

          <Media query="(max-width: 900px)">
          {matches =>
            matches ? (
              <input onChange={e => this.updateInputValue(e)} value={this.state.selectedCity} placeholder="City?.." class='input-search' type="text" />
              ) : (
            <PlaceInput />
            )
          }
        </Media>

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
              <span className="today-date" style={{fontSize:'2em',fontWeight:'bold', marginTop:'5px'}}>TODAY</span>
              <br/>
              <br/>
              <br/>
                  <i className={`${TODAY_ICON} seven-icon-big `} />
                  <br/>
                  <br/>
                  <span className="temp-big" style={{fontSize:'2em',fontWeight:'bold'}}>
                    {CURR_TEMP ? CURR_TEMP : "N/A"}
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
