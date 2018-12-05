const axios = require('axios');


exports.fetchWeather = async (req, res, next) => { 

    const {decade, page, pickedPage, genre} = req.body;
      try {
        const movieObj = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b2ce9d552430f16ed8460e3dce54ba4e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page= '+page+'&primary_release_date.gte='+ decade.start +'&primary_release_date.lte='+ decade.end +'&vote_average.gte=6&with_genres= '+genre);
  
        return res.status(200).json(movieObj.data.results[pickedPage]);

      } catch (err) {
        return next({
            status: 400,
            message: err.message
        })
        
      }
  
  };