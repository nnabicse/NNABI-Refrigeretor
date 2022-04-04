import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Review.css'
const Review = (props) => {
    const { name, review, rating, img } = props.review;
    return (
        <div className='my-3 mx-2'>
            <Card>
                <Card.Header className='card-header' as="h4"><img className='card-image' src={img} alt="" />{name}</Card.Header>
                <Card.Body>
                    <Card.Text className='card-text'>{review}</Card.Text>
                    <Card.Text>
                        <span className='fw-bold'>{rating} </span>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;