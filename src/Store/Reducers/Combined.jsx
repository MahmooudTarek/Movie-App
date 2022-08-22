import { combineReducers } from "redux";
import favoriteReducer from "./Favorite"
import moviesReducer from "./movies";

export default combineReducers({
   fav:favoriteReducer,
   movies:moviesReducer
})