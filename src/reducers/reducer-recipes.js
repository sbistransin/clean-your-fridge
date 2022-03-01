import { FETCH_RECIPES } from '../action';

const RecipeReducer = function(state = [], action) {
  switch(action.type) {
    case FETCH_RECIPES: 
      return action.payload.data;
    default: 
      return state;  
  }
}

export default RecipeReducer



// const dummyData = {
//   "from": 1,
//   "to": 20,
//   "count": 10000,
//   "_links": {
//   "next": {
//     "href": "https://api.edamam.com/api/recipes/v2?q=flour%2C%20milk%2C%20eggs&app_key=7819c867dd753d7ee590c47aecdd4002&_cont=CHcVQBtNNQphDmgVQntAEX4BYl1tAQQDQG1GBWYRZ1B1BAYCUXlSADRCYlclBgYFSmdJBzMaNVUiBgdVQmYSUmYRNgdwUFUVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=0cb3cf7c",
//     "title": "Next page"
//   },
//   "hits": [
//     {
//       "recipe": {
//       "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_661a3ac8e6ba33f7c54068fd0904f22e",
//       "label": "Chestnut Flour Crepes",
//       "image": "https://www.edamam.com/web-img/d49/d49a1380440235abbb2c3a34e5e218aa.jpg",
//       "images": {},
//       "source": "Martha Stewart",
//       "url": "https://www.marthastewart.com/1160010/chestnut-flour-crepes",
//       "shareAs": "http://www.edamam.com/recipe/chestnut-flour-crepes-661a3ac8e6ba33f7c54068fd0904f22e/flour%2C+milk%2C+eggs",
//       "yield": 22,
//       "dietLabels": [],
//       "healthLabels": [],
//       "cautions": [],
//       "ingredientLines": [],
//       "ingredients": []
//     },
//     {
//       "text": "1 1/2 cups chestnut flour Gold Medal Flour All-Purpose $1.99 thru 11/25",
//       "quantity": 1.5,
//       "measure": "cup",
//       "food": "Flour",
//       "weight": 187.5,
//       "foodCategory": "grains",
//       "foodId": "food_ahebfs0a985an4aubqaebbipra58",
//       "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
//     },
//     {
//     "text": "1/8 teaspoon table salt",
//     "quantity": 0.125,
//     "measure": "teaspoon",
//     "food": "table salt",
//     "weight": 0.75,
//     "foodCategory": "Condiments and sauces",
//     "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
//     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//     },
//     {
//     "text": "1 cup milk",
//     "quantity": 1,
//     "measure": "cup",
//     "food": "milk",
//     "weight": 244,
//     "foodCategory": "Milk",
//     "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
//     "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
//     },
//     {
//     "text": "3 large eggs, lightly beaten Eggs Large White 2 for $3.00 thru 11/25",
//     "quantity": 3,
//     "measure": "<unit>",
//     "food": "eggs",
//     "weight": 150,
//     "foodCategory": "Eggs",
//     "foodId": "food_bhpradua77pk16aipcvzeayg732r",
//     "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
//     },
//     {
//     "text": "1/2 cup (1 stick) unsalted butter, melted",
//     "quantity": 0.5,
//     "measure": "cup",
//     "food": "unsalted butter",
//     "weight": 113.5,
//     "foodCategory": "Dairy",
//     "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
//     "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
//     },
//     {
//     "text": "2 tablespoons confectioners' sugar",
//     "quantity": 2,
//     "measure": "tablespoon",
//     "food": "confectioners' sugar",
//     "weight": 16,
//     "foodCategory": "sugars",
//     "foodId": "food_b7rbtshahirxisbtyc77sbv8jdue",
//     "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
//     },
//     {
//     "text": "Chestnut Espresso Caramel-Swirl Ice Cream, for serving",
//     "quantity": 1,
//     "measure": "chestnut",
//     "food": "Ice Cream",
//     "weight": 0,
//     "foodCategory": "frozen treats",
//     "foodId": "food_bsg87una16tr8waipd66na9drm1k",
//     "image": "https://www.edamam.com/food-img/1be/1be43587dc55730fc761aedf4f3df090.jpg"
//     }
//     ],
//     "calories": 1921.8750000000002,
//     "totalWeight": 711.75,
//     "totalTime": 0,
//     "cuisineType": [
//     "american"
//     ],
//     "mealType": [
//     "lunch/dinner"
//     ],
//     "dishType": [],
//     "totalNutrients": {},
//     "totalDaily": {},
//     "digest": []
//   ]
// }
