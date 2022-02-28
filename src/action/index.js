import axios from "axios"

export const FETCH_DATA = 'FETCH_DATA'

const ROOT_URL = 'https://api.edamam.com/api/recipes/v2?type=public&q='
const APP_ID = '&app_id=0cb3cf7c'
const APP_KEY = '&app_key=7819c867dd753d7ee590c47aecdd4002'

export function getData(data) {
  const urlFormat = encodeURIComponent(data.ingredients) 
  const testing = (`${ROOT_URL}${urlFormat}${APP_ID}${APP_KEY}`)
  debugger
  // const request = axios.post(`${ROOT_URL}${format}${APP_ID}${APP_KEY}`)
};

// https://api.edamam.com/api/recipes/v2?type=public&q=flour%2C%20milk%2C%20eggs&app_id=0cb3cf7c&app_key=7819c867dd753d7ee590c47aecdd4002
// https://api.edamam.com/api/recipes/v2?type=public&q=flour%2C%20milk%2C%20eggs&app_id=0cb3cf7c&app_key=7819c867dd753d7ee590c47aecdd4002

