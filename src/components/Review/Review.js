import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'
const Review = (props) => {
    const { name, review, rating, img } = props.review;
    return (
        <div className='my-5 mx-2'>
            <Card>
                <Card.Header as="h5"><img className='card-image' src={img} alt="" />{name}</Card.Header>
                <Card.Body>
                    <Card.Title>{review}</Card.Title>
                    <Card.Text>{rating}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;