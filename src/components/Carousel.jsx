import React from "react";

export default function Carousel({ children, currentPage, setCurrentPage }) {
  const childrenWithProps = children.map((child) =>
    React.cloneElement(child, { currentPage, setCurrentPage })
  );
  return <div className="carousel">{childrenWithProps}</div>;
}
