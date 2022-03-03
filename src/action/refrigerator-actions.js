export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient
  }
};

export function removeIngredient(ingredient) {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredient
  }
}

