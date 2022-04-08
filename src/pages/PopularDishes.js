import React from "react";
import useDocumentTitle from "../pages/useDocumentTitle";

const PopularDishes = () => {
  useDocumentTitle("Dook-Popular Dishes");
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Popular Dishes</h1>
    </div>
  );
};

export default PopularDishes;
