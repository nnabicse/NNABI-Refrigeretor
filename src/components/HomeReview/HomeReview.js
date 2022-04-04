import React from 'react';
import { Card } from 'react-bootstrap';

const HomeReview = (props) => {
    const { name, review, rating } = props.review;
    return (
        <div className='w-75 m-auto mb-3'>
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

export default HomeReview;