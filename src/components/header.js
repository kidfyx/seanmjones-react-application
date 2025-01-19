import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
          <Navbar href="#home">
            <Nav className="mr-auto">
              <a class="navbar-brand" href="#home">Portfolio of Sean M Jones</a>
                <Nav.Link href="#home">Resume</Nav.Link>
                <Nav.Link href="#features">Portfolio</Nav.Link>
                <Nav.Link href="#pricing">Links</Nav.Link>
            </Nav>
          </Navbar>
      </Navbar>
    </div>
  );
};

export default Header;

