import React from "react";
import data from "./Data";

function Product() {
  return (
    <div>
      <h2>aju</h2>
      {data.map((item) => (
        <div className="products"></div>
      ))}
    </div>
  );
}

export default Product;
