const Search = () => {
  return (
    <form className="search-bar row">
            <div className="input-group col-md-12">
              <input
                type="text"
                className="form-control"
                aria-label="Enter some ingredients"
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary input-group-text">
                  Search
                </button>
              </div>
            </div>
          </form>
  )
}

export default Search