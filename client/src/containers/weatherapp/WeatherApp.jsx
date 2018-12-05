import React, { Component } from "react";
import "./WeatherApp.css";
import { connect } from "react-redux";

// import Testme from "../components/Testme";
import ForecastApp from "../forecaster/ForecastApp";
import PlaceInput from "../../components/PlaceInput";

const mapState = state => ({
  imgCondition: state.newImg.data
});

class WeatherApp extends Component {
  render() {
    let backImg;
    if(this.props.imgCondition){
      backImg=  `url(${this.props.imgCondition})`
    }else{
      backImg='url("https://images.unsplash.com/photo-1495460099476-135d23aadcb4?dpr=1&auto=format&fit=crop&w=1080&h=681&q=80&cs=tinysrgb&crop=")';
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
          <div className="input_custom">
            <PlaceInput />
         </div>
      </main>
    );
  }
}

export default connect(mapState)(WeatherApp);
