import React from 'react';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <nav>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/review">REVIEW</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="dashboard">DASHBOARD</Nav.Link>
                    </Nav.Item>
                    <Nav.Link eventKey="blogs">BLOGS</Nav.Link>
                    <Nav.Link eventKey="/about">ABOUT</Nav.Link>
                </Nav>
            </nav>
        </div>
    );
};

export default Header;