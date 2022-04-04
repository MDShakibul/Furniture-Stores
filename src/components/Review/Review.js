import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const{name, comment, rating} = review;
    return (
        <div className='col-lg-4 d-flex justify-content-center p-0'>
        <div className='review'>
        <h5>Name: {name}</h5>
        <p>Comment: {comment}</p>
        <p>Rating: <span className='text-danger'>{rating}</span></p>
        
        </div>

        </div>
    );
};

export default Review;