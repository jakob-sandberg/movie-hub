import React from "react";
import Button from "react-bootstrap/Button";

const Pagination = ({ page, setPage, isPreviousData, total }) => {
  return (
    <div className="pagination d-flex justify-content-between align-items-center m-4">
      <Button
        variant="danger"
        onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
        disabled={page === 1}
      >
        Previous Page
      </Button>
      <span>Page: {page}</span>

      <Button
        variant="danger"
        onClick={() => {
          if (!isPreviousData && page !== total) {
            setPage((currentPage) => currentPage + 1);
          }
        }}
        //disabel if theres no more pages
        disabled={isPreviousData || page === total}
      >
        Next Page
      </Button>
    </div>
  );
};

export default Pagination;
