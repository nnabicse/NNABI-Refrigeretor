import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useReview()
    return (
        <div className='mt-4'>
            <h1 className='text-center fw-bolder review-heading'>All Consumer Reviews on NNABI01C Double</h1>
            <div className='review-container m-auto'>
                {
                    review.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;