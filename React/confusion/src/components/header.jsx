import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Jumbotron,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";

function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const _toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <div>
        <Navbar dark expand="md">
          <NavbarToggler onClick={_toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img src="assets/images/logo.png" height="20" />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines,and
                  createaunique fusion experience
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    </React.Fragment>
  );
}

export default Header;
