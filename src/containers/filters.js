import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from '../action/filter-actions';
import '../temporary.css'
const Filters = () => {

  const [showBox, setShowBox] = useState(false);

  const dispatch = useDispatch();
  
  const onFilterClick = (e) => {
    setShowBox(!showBox);
  }

  const onCheckFilter = (e) => {
    if(e.target.checked) {
      dispatch(addFilter(e.target.value))

    } else {
      dispatch(removeFilter(e.target.value))
    }
  }
  return ( 
    <div>
      <button 
        type="button"
        className="btn btn-outline-light height mb-4 fst-italic"
        onClick={onFilterClick}
        >Search Criteria
      </button>
      {showBox ? <div className="filters-box show background-blur mb-4 text-color fst-italic">
        <form>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="dairy-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox1">Dairy-Free</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="egg-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox2">Egg-free</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="gluten-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox3">Gluten-free</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="fish-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox1">Fish-free</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="kosher" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox2">Kosher</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="vegan" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox3">Vegan</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="vegetarian" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox2">Vegetarian</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="peanut-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox2">Peanut-Free</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input " type="checkbox" id="inlineCheckbox2" value="pescatarian" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox2">Pescatarian</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="pork-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox2">Pork-Free</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="red-meat-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox2">Red Meat-Free</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="keto-friendly" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox2">Keto-Friendly</label>
          </div>
          <div className="form-check form-check-inline ">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="shellfish-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label spacing" htmlFor="inlineCheckbox2">Shellfish-Free</label>
          </div>
        </form>
      </div> : null}
      
    </div>
  )
}



export default Filters