import { FETCH_RECIPES } from '../action';


const RecipeReducer = function(state = [], action) {
  switch(action.type) {
    case FETCH_RECIPES: 
      return action.payload.data;
      //return action.payload;
    default: 
      return state;  
  }
}

export default RecipeReducer

