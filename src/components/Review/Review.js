import React from 'react';
import { Card } from 'react-bootstrap';
const Review = (props) => {
    const {name, review, rating} = props.review;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {review} {rating}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;