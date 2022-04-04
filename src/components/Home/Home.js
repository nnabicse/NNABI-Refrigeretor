import React from 'react';
import { Link } from 'react-router-dom';
import HomeReviews from '../HomeReviews/HomeReviews';
import './Home.css'
import mainImage from '../../images/mainImage.png'

const Home = () => {
    return (
        <div className='w-75 m-auto mt-3'>
            <div className='product-container'>
                <div className='product-info'>
                    <h1 className='brand'>NNABI Refrigeration Co.</h1>
                    <h1 className='model'>New <span>NNABI01C Dubble</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque, ducimus, quidem qui sunt temporibus similique consectetur omnis, accusantium earum officia. Veritatis quaerat eum, assumenda neque, voluptate facere officiis iusto dolorem explicabo magnam iste perferendis atque illo error nemo non?</p>
                    <button className='btn btn-primary'>Live Demo</button>
                </div>
                <div className='product-image'>
                    <img src={mainImage} alt="" />
                </div>
            </div>
            <div className='review-home-container'>
                <div className='p-3'>
                    <div className='text-center'>
                        <h4>User Reviews</h4>
                    </div>
                    <div>
                        <HomeReviews></HomeReviews>
                    </div>
                    <div className='w-25 m-auto'>
                        <Link to='/reviews' className='btn btn-primary'>See All Reviews</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;