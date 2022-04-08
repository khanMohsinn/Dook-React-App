import React from "react";
import useDocumentTitle from "../pages/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Dook-Home");
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Home Page</h1>
      </div>
    </div>
  );
};
export default Home;
