import React from "react";
import "./Home.css";
import Product from "../../images/bed.jpg";

const Home = () => {
  return (
    <div className="mt-5 ">
      <div className="row m-0 ps-3 pe-3 d-flex align-items-center">
        <div className="col-lg-6">
          <h1 className="">Want to Decorator Your Room</h1>
          <h2>Our Shop Is The Best Place</h2>
          <p>
            Here we sell best quality products and reasonable price. Visit our
            show room and our website. You can order our product by online
          </p>
        </div>
        <div className="col-lg-6">
          <img src={Product} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
