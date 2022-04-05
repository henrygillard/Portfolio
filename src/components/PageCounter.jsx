import React from "react";
import { backArrow, forwardArrow } from "../shared/Icons";

export default function PageCounter({ currentPage, setCurrentPage }) {
  return (
    <div className="buttons-container">
      {currentPage === 0 && (
        <div className="page-buttons">
          {/* <div onClick={() => setCurrentPage(currentPage - 1)}>{backArrow}</div> */}
          <div onClick={() => setCurrentPage(currentPage + 1)}>
            {forwardArrow}
          </div>
        </div>
      )}
      {currentPage === 2 && (
        <div className="page-buttons">
          <div onClick={() => setCurrentPage(currentPage - 1)}>{backArrow}</div>
          {/* <div onClick={() => setCurrentPage(currentPage + 1)}>
            {forwardArrow}
          </div> */}
        </div>
      )}
      {currentPage === 1 && (
        <div className="page-buttons">
          <div onClick={() => setCurrentPage(currentPage - 1)}>{backArrow}</div>
          <div onClick={() => setCurrentPage(currentPage + 1)}>
            {forwardArrow}
          </div>
        </div>
      )}
    </div>
  );
}
