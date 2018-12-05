require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')

// const handle = require('./handlers');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/',(req, res)=>{
  res.send("I'm working")
})


app.use('/api/getweather', routes.getWeatherRoute);


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));