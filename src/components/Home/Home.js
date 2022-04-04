import React from 'react';
import { Link } from 'react-router-dom';
import HomeReview from '../HomeReview/HomeReview';
import HomeReviews from '../HomeReviews/HomeReviews';
import './Home.css'

const Home = () => {
    return (
        <div className='w-75 m-auto mt-3'>
            <div className='d-flex align-items-center'>
                <div className='product-info'>
                    <h1>NNABI Refrigeration Company</h1>
                    <h1>The New NNABI01C Dubble</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque, ducimus, quidem qui sunt temporibus similique consectetur omnis, accusantium earum officia. Veritatis quaerat eum, assumenda neque, voluptate facere officiis iusto dolorem explicabo magnam iste perferendis atque illo error nemo non?</p>
                    <button className='btn btn-primary'>Live Demo</button>
                </div>
                <div className='product-image'>
                    <img src="https://static3.depositphotos.com/1000749/116/v/600/depositphotos_1161071-stock-illustration-refrigerator.jpg" alt="" />
                </div>
            </div>
            <div>
                <div>
                    <h4>User Reviews</h4>
                </div>
                <div>
                    <HomeReviews></HomeReviews>
                </div>
                <Link to='/reviews' className='btn btn-primary'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;