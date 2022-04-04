import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useReview()
    return (
        <div className='review-container w-75 m-auto'>
            {
                review.map(review=><Review
                    key={review.id}
                    review = {review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;