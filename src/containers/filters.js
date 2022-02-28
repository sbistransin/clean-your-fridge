const Filters = () => {
  
  const onFilterClick = (e) => {

    // toggle box to appear

  }
  return ( 
    <div>
      <button 
        type="button"
        className="btn btn-link"
        onClick={onFilterClick}
        data-toggle="modal" 
        data-target="#exampleModalCenter">Search Criteria
      </button>
      <div className="filters-box">
        <form></form>
      </div>
    </div>
  )
}



export default Filters