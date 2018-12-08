const axios = require('axios');
const weather = require('yahoo-weather');


exports.fetchWeather = async (req, res, next) => { 

    const {city} = req.body;

    console.log("Server fetch", city)

      try {
        const weatherObj = await weather(city, 'f');
        
        const fullWeatherObj={
          temp:weatherObj.item.condition.temp,
          forecast:weatherObj.item.forecast,
          condition:weatherObj.item.condition,
          image:weatherObj.image.url
        }

        return res.status(200).send(fullWeatherObj);

      } catch (err) {
        return next({
            status: 400,
            message: err.message
        })
        
      }
  
  };
