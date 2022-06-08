import React from "react";

function Pagination({ totalPages, handleClick }) {
  //NOTE very short and cool function to handle the pagination. Congrats
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
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
