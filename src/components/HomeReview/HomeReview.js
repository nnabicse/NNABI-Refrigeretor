import React from 'react';
import { Card } from 'react-bootstrap';

const HomeReview = (props) => {
    const { name, review, rating } = props.review;
    return (
        <div className='d-flex'>
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

export default HomeReview;