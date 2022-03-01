export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'

export function addFilter(filter) {
  return {
    type: ADD_FILTER,
    payload: filter
  };
};

export function removeFilter(filter) {
  return {
    type: REMOVE_FILTER,
    payload: filter
  };
};