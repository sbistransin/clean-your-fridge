import { combineReducers } from "redux";
import FilterReducer from "./reducer-filters";
import RecipeReducer from './reducer-recipes';

const rootReducer = combineReducers({
  filters: FilterReducer,
  recipes: RecipeReducer
});

export default rootReducer;
