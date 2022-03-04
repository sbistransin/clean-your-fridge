import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { addIngredient, removeIngredient } from '../action/refrigerator-actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons';

let fridgeSchema = Yup.object({
  'ingredient': Yup.string().required(),
    // .typeError()
    // .required('This is a required field'),
  'expiration': Yup.number()
    .typeError('Expiration must be a date')
    .required('This is a required field')
}).required();

const Refrigerator = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(({ ingredients }) => ingredients)

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(fridgeSchema)
  });

  const handleFormSubmit = (ingredient, e) => {  
    dispatch (
      addIngredient(ingredient)
    );
    renderIngredients();

    e.target.elements.ingredient.value = ''
    e.target.elements.expiration.value = ''
  }

  const remove = (e) => {
    dispatch (
      removeIngredient(e)
    )
  }

  const removeButton = (e) => {
    return (
      <button className="btn btn-outline-dark remove-button"
        onClick={() => remove(e)}>remove</button>
    )
  }


  const renderIngredients = () => {
    if (ingredients.length > 0) {
      return ingredients.map((p) => {
        return (
          <div className="icons">
              
              <li className="ingredient-item">
                <span className="remove-ingredient"><FontAwesomeIcon icon={faXmark} className="remove-ingredient"/></span>{p.ingredient} - Expires in {p.expiration} day(s) - {removeButton(p)}
              </li>         
         </div>
          
        )
      })
    }
    return <div className="lead">No ingredients!</div>
  }

  return (
    <div>
      <div className="row frige-row">
        <h2 className="frige-header">Refrigerator Inventory</h2>
        <div className="column-container col-md-4 offset-md-1">
          <div className="ingredients-box rounded">
            <div className="ingredient-box-inner">
              <h5 className="frige-inventory-header">Add Ingredients</h5>
                <form onSubmit={handleSubmit(handleFormSubmit)} >
                  <div className="row d-flex justify-content-center ingredient-input-box">
                    <input 
                      placeholder='Ingredient'
                      className="form-control fridge-inputs border-dark"
                      {... register('ingredient')}>                 
                    </input>
                    <p className="text-danger mb-3 fridge-inputs">{errors.ingredient?.message}</p>
                    <input 
                      placeholder="Expiration"
                      type='number'
                      className="form-control fridge-inputs border-dark"
                      {... register('expiration')}>
                    </input>
                    <p className="text-danger mb-3 fridge-inputs">{errors.expiration?.message}</p>
                  </div>
                  <input type='submit' className="btn btn-outline-dark ingredient-submit" />
                </form>   
            </div> 
          </div>
        </div>
        <div id="h-color" className="col-md-6 jumbotron rounded">
        <h5 className="display-6 frige-inventory-header">Refrigerator Contents:</h5>
        <div className="d-flex justify-content-center fridge-ingredients">
          <ul className="lead">
            {renderIngredients()}
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
};

export default Refrigerator