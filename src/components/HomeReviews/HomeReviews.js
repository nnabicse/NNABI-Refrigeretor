import React from 'react';
import useReview from '../../hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';
import './HomeReviews.css'

const HomeReviews = () => {
    const [review, setReview] = useReview()
    return (
        <div className='home-review-container'>
            {
                review.slice(0, 3).map(review => <HomeReview
                    key={review.id}
                    review={review}
                ></HomeReview>)
            }
        </div>
    );
};

export default HomeReviews;