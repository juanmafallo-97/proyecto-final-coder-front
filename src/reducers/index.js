import { combineReducers } from "redux";
import session from "./session";
import register from "./register";

export default combineReducers({ session, register });
