const axios = require('axios');


exports.fetchWeather = async (req, res, next) => { 

    const {city} = req.body;
    console.log(city);
    const searchtext =
    "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
    city + "') and u='f'";

      try {
        const weatherObj = await axios.get("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json");
  
        return res.status(200).json(weatherObj);

      } catch (err) {
        return next({
            status: 400,
            message: err.message
        })
        
      }
  
  };
