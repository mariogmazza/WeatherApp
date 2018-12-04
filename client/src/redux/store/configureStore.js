import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'


const DEFAULT_STATE = {}; 

 const configureStore = createStore( rootReducer, DEFAULT_STATE,
  compose( applyMiddleware(thunk) ),
);

export default configureStore