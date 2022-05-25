import React from "react";

function Pagination({ totalPages, handleClick }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  console.log("Pages:", pages);
  return (
    <>
      {pages.map((num) => (
        <button key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
    </>
  );
}

export default Pagination;
