import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Link to='/home' className='header-items'>HOME</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/reviews' className='header-items'>REVIEWS</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/dashboard' className='header-items'>DASHBOARD</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/blogs' className='header-items'>BLOGS</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/about' className='header-items'>ABOUT</Link>
                    </Nav.Item>
                </Nav>
            </nav>
        </div>
    );
};

export default Header;