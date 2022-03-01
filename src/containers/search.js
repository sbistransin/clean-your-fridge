import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { getRecipes } from '../action';
import * as Yup from 'yup';
import '../temporary.css'

let ingredientsSchema = Yup.object({'ingredients': Yup.string().required()}).required();

const Search = () => {
  
  const filters_array = useSelector(state => {
    return state.filters
  });
  
  const dispatch = useDispatch();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(ingredientsSchema)
  })

  const handleFormSubmit = (data) => {
    dispatch (
      getRecipes(data.ingredients, filters_array)
    )
  }

  return (
    <form className="search-bar row" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="input-group input-group-lg col-md-12" >
        {/* <div class="input-group-prepend">
          <span class="input-group-text">With textarea</span>
        </div>
        <textarea class="form-control" aria-label="With textarea"></textarea> */}
        <input
          className="form-control"
          aria-label="Enter some ingredients"
          {... register('ingredients')}
        />
        <div className="input-group-append">
          <input type='submit' className="btn btn-outline-light height" />
        </div>        
      </div>
      <p className="text-danger background-blur error">{errors.ingredients?.message}</p>
    </form>
  )
}

export default Search;