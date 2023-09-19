import React from "react";
import mens from "./images/jaket.avif";
import women from "./images/women.avif";
import kids from "./images/kids.avif";
import cart from "./images/Black-shoe.avif";
import data from "./Data";
function main_body() {
  return (
    <div>
      <div className="bascatball">
        <div className="off-sale">
          <div className="sale">
            <h2 className="head-text">
              SHOES, CLOTHING & ACCESSORIES SALE: UP TO 60% OFF
            </h2>
            <h6>[5828]</h6>
          </div>

          <div className="main-card">
            <div className="sub-card">
              <img className="men" src={mens} alt="" />
              <span className="card-name">MEN</span>
            </div>
            <div className="sub-card">
              <img className="men" src={women} alt="" />
              <span className="card-name">WOMEN</span>
            </div>
            <div className="sub-card">
              <img className="men" src={kids} alt="" />
              <span className="card-name">KIDS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sale1">
        <h2 className="head-text1">OUTLET</h2>
        <h6>5810</h6>
      </div>

      <div className="cartalign">
        {data.map((item) => (
          <div className="sub-main-cart-a">
            <div>
              <img className="shoe" src={item.img} />

              <div className="rate">
                <span className="fifty">{item.offer}</span>
                <span className="sub-rate">
                  <p style={{ color: "gray" }}>
                    <strike>{item.firstprice}</strike>
                  </p>
                  {item.offerprice}
                </span>
              </div>
            </div>
            <div className="alphaboost">
              <h4 className="shoe-name">{item.name}</h4>
              <span className="type">{item.type}</span>
              <p className="clours">{item.colour}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="next">
        <div className="next1">
          <button className="next-button">NEXT</button>
        </div>
      </div>

      <div className="line">
        <div className="line1"></div>
      </div>
    </div>
  );
}

export default main_body;
