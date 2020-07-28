import React, { Component } from 'react';
import { Container, 
         Navbar, 
         NavbarBrand, 
         NavbarToggler, 
         Collapse, 
         Nav, 
         NavItem, 
         NavLink } from 'reactstrap';
import basketLogo from './supermarket.png';


class FireNavbar extends Component {
    // Initial state object
    state = {
        isOpen:false
    }
    // toggler Function
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    // Render navBar 
    render () {
        return (
            <Navbar dark expand="sm" color="dark" className="mb-5">
                <Container>
                    <NavbarBrand href=""><img src={basketLogo} className="basket-logo"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse navbar isOpen={this.state.isOpen}>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink>List</NavLink>
                                </NavItem>
                        </Nav>
                    </Collapse>

                </Container>
            </Navbar>
        );
    }
};

export default FireNavbar
