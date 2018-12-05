import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store/configureStore";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";

import "./index.css";
import App from "./app/App.jsx";

ReactDOM.render(
  <Provider store={store}>
   <Router>
      <App />
   </Router>
  </Provider>,
    document.getElementById("root")
);
