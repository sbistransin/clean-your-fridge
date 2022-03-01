import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from '../action/filter-actions';
const Filters = () => {

  const [showBox, setShowBox] = useState(false);

  const dispatch = useDispatch();
  
  const onFilterClick = (e) => {
    setShowBox(!showBox);
  }

  const onCheckFilter = (e) => {
    if(e.target.checked) {
      console.log("checked", e.target.value)
      dispatch(addFilter(e.target.value))

    } else {
      console.log("unchecked", e.target.value)
      dispatch(removeFilter(e.target.value))
    }
  }
  return ( 
    <div>
      <button 
        type="button"
        className="btn btn-link"
        onClick={onFilterClick}
        >Search Criteria
      </button>
      {showBox ? <div className="filters-box show">
        <form>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Dairy-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox1">Dairy-Free</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Egg-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Egg-free</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Gluten-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox3">Gluten-free</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Fish-free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox1">Fish-free</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Kosher" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Kosher</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Vegan" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox3">Vegan</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Vegetarian" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Vegetarian</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Peanut-Free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Peanut-Free</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Pescatarian" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Pescatarian</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Pork-Free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Pork-Free</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Red Meat-Free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Red Meat-Free</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Peanut-Free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Peanut-Free</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Shellfish-Free" 
              onChange={onCheckFilter}/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Shellfish-Free</label>
          </div>
        </form>
      </div> : null}
      
    </div>
  )
}



export default Filters