import ReactPaginate from 'react-paginate';
import { useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Items = function ({ currentItems}) {
  
  let history = useHistory();
  const handleRecipeCardClick = (index, e) => {
    history.push(`/recipes/${index}`)
  }

  return (
    <div className="items row card-deck">
      {currentItems && currentItems.map( (item, index) => (
          <div className="col-md-4 d-flex" key={index} onClick={(item) => handleRecipeCardClick(index, item)}>
            <div className="card">
              <img className="card-img-top" src={item.recipe.image} alt=""/>
                <div className="card-body">
                  <h6 className="card-title">{item.recipe.label}</h6>
                  <p className="text-muted recipe-info">{item.recipe.totalTime} min</p>
                </div>
          </div>
        </div>  
      ))}
    </div>
  );
}

const PaginatedRecipes = function({ itemsPerPage }) {

  const recipes = useSelector(({ recipes }) => recipes.hits);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(recipes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(recipes.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % recipes.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedRecipes