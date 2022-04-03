import React from 'react';
import useReview from '../../hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';

const HomeReviews = () => {
    const [review, setReview] = useReview()
    return (
        <div>
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