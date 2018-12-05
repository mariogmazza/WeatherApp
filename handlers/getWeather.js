const axios = require('axios');
const weather = require('yahoo-weather');


exports.fetchWeather = async (req, res, next) => { 

    const {city} = req.body;
    
      console.log("server", city)
      try {
        
        const weatherObj = await weather(city, 'f');
        
        // console.log( JSON.stringify(condition.temp));
        console.log(weatherObj.item.condition.temp)
        const fullWeatherObj={
          temp:weatherObj.item.condition.temp,
          forecast:weatherObj.item.forecast
        }

        return res.status(200).send(fullWeatherObj);

      } catch (err) {
        return next({
            status: 400,
            message: err.message
        })
        
      }
  
  };
