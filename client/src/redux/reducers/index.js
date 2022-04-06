import { combineReducers } from "redux";
import gitReducer from "./gitHub";

const reducer = combineReducers({
  gitReducer,
});

export default reducer;
