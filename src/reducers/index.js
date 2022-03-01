import { combineReducers } from "redux";
import FilterReducer from "./reducer-filters";

const rootReducer = combineReducers({
  filters: FilterReducer,
});

export default rootReducer;
