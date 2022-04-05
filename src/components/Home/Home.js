import React from 'react';
import { Link } from 'react-router-dom';
import HomeReviews from '../HomeReviews/HomeReviews';
import './Home.css'
import mainImage from '../../images/mainImage.png'

const Home = () => {
    return (
        <div className='product-and-review-container m-auto mt-3'>
            <div className='product-container'>
                <div className='product-info'>
                    <h1 className='brand'>NNABI Refrigeration Co.</h1>
                    <h1 className='model'>New <span>NNABI01C Dubble</span></h1>
                    <p className='main-text'>NNABI guarantees the durability of its energy efficient Digital Inverter Compressor. Always active, it automatically adjusts its speed to meet cooling demand, ensuring a trouble-free, longer-lasting refrigerator. Based on internal testing compared with Samsung conventional model. Enjoy the peace of mind that comes with a 10-year warranty on the compressor of Samsung refrigerator powered with Digital Inverter Technology. Now, you can connect the refrigerator to your Home Inverter without any worries. Go ahead and enjoy uninterrupted cooling to keep your food fresh even during power cuts. Connect Inverter enables the refrigerator to work even when there is a power cut in the house and the refrigerator has switched to back up power.</p>
                    <button className='demo-button'><span className='demo-button-text'>LIVE DEMO</span></button>
                </div>
                <div className='product-image'>
                    <img src={mainImage} alt="" />
                </div>
            </div>
            <div className='review-home-container'>
                <div className='p-3'>
                    <div>
                        <h3 className='user-review-text'>User Reviews</h3>
                    </div>
                    <div>
                        <HomeReviews></HomeReviews>
                    </div>
                    <div className='text-center'>
                        <button className='see-all-button'>
                            <Link className='link' to='/reviews'><span className='see-all-button-text'>SEE ALL REVIEWS</span></Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;