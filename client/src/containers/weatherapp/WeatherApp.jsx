import React, { Component } from "react";
import "./WeatherApp.css";
import { connect } from "react-redux";

// import Testme from "../components/Testme";
import ForecastApp from "../forecaster/ForecastApp";

const mapState = state => ({
  imgCondition: state.newImg.data
});

class WeatherApp extends Component {
  render() {
    let backImg;
    if(this.props.imgCondition){
      backImg=  `url(${this.props.imgCondition})`
    }else{
      backImg='url("https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")';
    }
    return (
      <main>
        <div
          className="blurred-city"
          style={{
            backgroundImage: backImg,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "blur(10px)",
          }}
        >
          </div>
          <ForecastApp />
      
      </main>
    );
  }
}

export default connect(mapState)(WeatherApp);
