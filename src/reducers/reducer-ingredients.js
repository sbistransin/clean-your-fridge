import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../action/refrigerator-actions";

const IngredientsReducer = function(state=[], action) {
  switch(action.type) {
    case ADD_INGREDIENT:
      return [action.payload, ...state]
    case REMOVE_INGREDIENT:  
      return state.filter(f => f !== action.payload);
    default: 
      return state;
  }
}


export default IngredientsReducer;