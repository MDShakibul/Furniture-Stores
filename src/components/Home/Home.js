import React from "react";
import "./Home.css";
import Product from "../../images/bed.jpg";
import useProducts from "../../hooks/useProducts";
import Review from "../Review/Review";
import { useNavigate } from 'react-router';

const Home = () => {
    const [reviews, setReviews] = useProducts();

    let navigate = useNavigate();
  function handleAllReviews() {
    navigate('/reviews')
  }

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
        <div className="col-lg-6 product-img">
          <img src={Product} className="img-fluid" alt="" />
        </div>
      </div>
      <h2 className="text-center mt-5">Customer Reviews (3)</h2>

      <div className="row mt-5 m-0 p-0">

      {reviews.slice(0, 3).map((review) => (
        <Review
          key={review.id}
          review={review}
        ></Review>
      ))}
      
      </div>
<div className="d-flex justify-content-center">
<button className="btn btn-success mt-2 mb-3" onClick={handleAllReviews}>See all Reviews</button>
</div>

    </div>
  );
};

export default Home;
