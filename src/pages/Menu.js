import React from "react";
import useDocumentTitle from "./useDocumentTitle";
import MyNavbar from "../Components/MyNavbar";

const Menu = () => {
  useDocumentTitle("Dook-Menu");
  return (
    <div>
      <MyNavbar />
      <h1 style={{ textAlign: "center" }}>Menu</h1>
    </div>
  );
};

export default Menu;
