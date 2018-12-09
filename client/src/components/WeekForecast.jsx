import React from "react";

function WeekForecast({ day, icon, high, low, text }) {
  return (
    <div>
      <span>{` ${high}F`}</span>
      <br />
      <br />
      <i className={`${icon} seven-icon-small `} />
      <br />
      <br />
      <span className="temp-small">{day}</span>
      <br />
      <br />
      <span>{text.split(" ")[0]}</span>
      <br />
      <br />
      {text.split(" ")[1] ? <span>{text.split(" ")[1]}</span> : ""}
    </div>
  );
}

export default WeekForecast;
