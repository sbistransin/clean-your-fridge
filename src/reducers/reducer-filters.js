import { ADD_FILTER, REMOVE_FILTER} from "../action/filter-actions";

const filtersReducer = function(state = [], action) {
  switch (action.type) {
    case ADD_FILTER:      
      return [...state, action.payload];
    case REMOVE_FILTER:  
      return state.filter(f => f !== action.payload);
    default:
      return state;
  }
}

export default filtersReducer 
 