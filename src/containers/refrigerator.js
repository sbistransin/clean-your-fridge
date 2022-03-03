import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { addIngredient } from '../action/refrigerator-actions'

let fridgeSchema = Yup.object({
  'ingredient': Yup.string().required(),
    // .typeError()
    // .required('This is a required field'),
  'expiration': Yup.number()
    .typeError('Expiration must be a number')
    .positive('Expiration must be a positive number')
    .required('This is a required field')
}).required();

const Refrigerator = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(({ ingredients }) => ingredients)

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(fridgeSchema)
  });

  const handleFormSubmit = (ingredient) => {
    dispatch (
      addIngredient(ingredient)
    );
    renderIngredients();
  }

  const renderIngredients = () => {
    if (ingredients.length > 0) {
      return ingredients.map((p) => {
        return (
          <li>{p.ingredient} - Expires in {p.expiration} day(s)</li>
        )
      })
    }
    return <div>No ingredients</div>
  }

  return (
    <div className="row frige-row">
      <Link to='/' className='btn btn-outline-dark fridge-back-button'>Back</Link>
      <h1 className="frige-header display-3">Refrigerator Inventory</h1>
      <div className="ingredients-box col-md-4 offset-md-1">
        <p className="frige-inventory-header display-6">Add Ingredients</p>
        <form onSubmit={handleSubmit(handleFormSubmit)} >
          <div className="row d-flex justify-content-center">
            <input 
              placeholder='Ingredients...'
              className="form-control fridge-inputs border-dark" 
              {... register('ingredient')}>                 
            </input>
            <p className="text-danger mb-5 fridge-inputs">{errors.ingredient?.message}</p>
            <input 
              placeholder="Expiration"
              type='number'
              className="form-control fridge-inputs border-dark"
              {... register('expiration')}>
            </input>
            <p className="text-danger mb-3 fridge-inputs">{errors.expiration?.message}</p>
          </div>
          <input type='submit' className="btn btn-outline-dark" />
        </form>
      </div>
      <div className="frige-box col-md-5 offset-md-1">
        <p className="frige-inventory-header display-6">Refrigerator Contents</p>
        <ul className="fridge-ingredients">
          {renderIngredients()}
        </ul>
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary">Search for Recipes</button>
      </div>
    </div>
  )
};

export default Refrigerator