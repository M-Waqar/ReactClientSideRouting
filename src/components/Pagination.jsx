import React from "react";

const Pagination = ({ postperpage, totalPost, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postperpage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumber.map((number) => {
            return (
              <li key={number} className="page-item">
                <button onClick={(e) => paginate(number)} className="page-link">
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
