import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Navbar inverse>
            <Nav>
                <NavItem componentClass={Link} href="/" to="/">Requests</NavItem>
                <NavItem componentClass={Link} href="/search" to="/search">Search</NavItem>
                <NavItem componentClass={Link} href="/order" to="/order">Order</NavItem>
            </Nav>
        </Navbar>
    );
};
export default NavBar;