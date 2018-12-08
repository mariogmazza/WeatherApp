import React from 'react'

function WeekForecast({day, icon, high, low, text}) {

  console.log(text.split(" "))
  return (
        <div>
              <span>{` ${high}F`}</span>
              <br />
              <br />
              <i className={`${icon} seven-icon-small `} ></i>
          <br />
              <br />
              <span class="temp-small">{day}</span>
              <br />
              <br />
              <span>{text.split(' ')[0]}</span>
              <br/>
              <br/>
              <span>{text.split(' ')[1]}</span>

         </div>
      
  )
}

export default WeekForecast

