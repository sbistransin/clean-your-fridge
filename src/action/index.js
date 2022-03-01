import axios from "axios"

export const FETCH_RECIPES = 'FETCH_RECIPES'

const ROOT_URL = 'https://api.edamam.com/api/recipes/v2?type=public&q='
const APP_ID = '&app_id=0cb3cf7c'
const APP_KEY = '&app_key=7819c867dd753d7ee590c47aecdd4002'

export function getRecipes(ingredients, filters) {
  const urlFormat = encodeURIComponent(ingredients) 
  const filters_string = createFiltersURLstring(filters);
  
  let url = (`${ROOT_URL}${urlFormat}${APP_ID}${APP_KEY}${filters_string}`)
  const request = axios.get(url).then(request => console.log(request));
  
  // return {
  //   type: FETCH_RECIPES,
  //   payload: request
  // }
};

const createFiltersURLstring = function(filters_array) {
  let filters_string = '';

  for (let i = 0; i < filters_array.length; i++) {
    filters_string += `&health=${filters_array[i]}` 
  }

  return filters_string
}
