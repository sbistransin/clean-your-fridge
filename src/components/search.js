import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { getRecipes } from '../action';
import * as Yup from 'yup';

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
      <div className="input-group col-md-12" >
        <input
          className="form-control"
          aria-label="Enter some ingredients"
          {... register('ingredients')}
        />
        <div className="input-group-append">
          <input type='submit' className="btn btn-outline-dark" />
        </div>
        <p className="text-danger">{errors.ingredients?.message}</p>
      </div>
    </form>
  )
}

export default Search;