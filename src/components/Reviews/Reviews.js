import React from "react";
import Review from "../Review/Review";
import useProducts from "../../hooks/useProducts";

const Reviews = () => {
  const [reviews, setReviews] = useProducts();
  return (
    <div>
      <h1 className="text-center mt-3" >All Reviews</h1>
      <div className="row g-3 mt-2 m-0 p-0">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
