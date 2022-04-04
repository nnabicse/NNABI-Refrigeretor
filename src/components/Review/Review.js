import React from 'react';
import { Card } from 'react-bootstrap';
const Review = (props) => {
    const { name, review, rating } = props.review;
    return (
        <div className='w-50 m-auto mt-5'>
            <Card>
                <Card.Header as="h5">{name}</Card.Header>
                <Card.Body>
                    <Card.Title>{review}</Card.Title>
                    <Card.Text>{rating}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;