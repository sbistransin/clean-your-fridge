import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../action/refrigerator-actions";

const IngredientsReducer = function(state=[], action) {
  switch(action.type) {
    case ADD_INGREDIENT:
      return [action.payload, ...state]
    default: 
      return state;
  }
}


export default IngredientsReducer;