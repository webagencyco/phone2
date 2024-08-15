import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2 mt-4 overflow-auto">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 border rounded ${
                currentPage === number
                  ? "bg-[#e50471] text-white"
                  : "bg-white text-[#e50471]"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
