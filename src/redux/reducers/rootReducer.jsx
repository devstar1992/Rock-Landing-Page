import { combineReducers } from "redux";
import config from './templateConfig/';
import Icons from "./icons/";
import network from "./network/";
// import 
const rootReducer = combineReducers({
  config,
  Icons,
  network
});

export default rootReducer;