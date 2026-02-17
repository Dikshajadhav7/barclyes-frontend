import React from 'react';

function Pagination({ currentPage, totalPages, totalItems, itemsPerPage, onPrev, onNext }) {
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination">
      <span className="pagination-info">
        {start}–{end} of {totalItems} incidents
      </span>
      <div className="pagination-controls">
        <button
          className="pagination-btn"
          onClick={onPrev}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        <span className="page-number">{currentPage}</span>
        <button
          className="pagination-btn"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Pagination;