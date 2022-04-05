import "./Header.css";
import React from "react";
import Typed from "react-typed";

export default function Header({ currentPage, setCurrentPage }) {
  const arrowIcon = [
    <svg
      style={{ width: "2rem", height: "2rem" }}
      className="w-2 h-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
  ];
  return (
    <div
      id="home"
      className={
        (currentPage === 0 && "header-container") ||
        (currentPage === 1 && "header-container2") ||
        (currentPage === 2 && "header-container3")
      }
    >
      <div className="header-text">
        <h2 id="header-title">Henry Gillard:</h2>
        <h2>
          <Typed
            strings={["a Software Developer.", "a Drummer", "a Person"]}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </h2>
      </div>
    </div>
  );
}
