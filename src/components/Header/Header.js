import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container py-4'>
            {/* <nav>
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
            </nav> */}



            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">NNABI Refrigerator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto justify-content-center' activeKey="/home">
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;