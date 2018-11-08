import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

  import logo from './logo.png';
  import './Navbar.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Navigation">
        <Navbar light expand="md">
          <NavbarBrand href='#home'> <img src={logo} className="NavLogo" alt="logo" /> </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='#Apropos'> <h4 className="links">A PROPOS</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#Projets'> <h4 className="links">PROJETS</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#Contact'> <h4 className="links">CONTACT</h4> </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}