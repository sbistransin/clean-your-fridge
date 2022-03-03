import { combineReducers } from "redux";
import FilterReducer from "./reducer-filters";
import RecipeReducer from "./reducer-recipes";
import IngredientsReducer from "./reducer-ingredients"

const rootReducer = combineReducers({
  filters: FilterReducer,
  recipes: RecipeReducer,
  ingredients: IngredientsReducer
});

export default rootReducer;
