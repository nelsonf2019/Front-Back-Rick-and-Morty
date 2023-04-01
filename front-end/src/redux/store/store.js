import { compose, createStore } from "redux";
import reducer from "../reducer/index";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;