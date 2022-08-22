import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import reducers from "./Reducers/Combined"
import thunk from "redux-thunk";
import combineReducers from "./Reducers/Combined"

const store = createStore (combineReducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;