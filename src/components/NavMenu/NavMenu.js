import React from "react";
import './NavMenu.css';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

var scrollHome = () => (
  document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "start" })
)

var scrollAbout = () => (
  document.getElementById("aboutStart").scrollIntoView({ behavior: "smooth", block: "start" })
)

var scrollSkills = () => (
  document.getElementById("skillsStart").scrollIntoView({ behavior: "smooth", block: "start" })
)

var scrollPortfolio = () => (
  document.getElementById("portfolioStart").scrollIntoView({ behavior: "smooth", block: "start" })
)

var scrollContact = () => (
  document.getElementById("contactStart").scrollIntoView({ behavior: "smooth", block: "start" })
)


const NavMenu = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">Alex Rhee</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav>
      <NavItem onClick={scrollHome}>
        Home
  </NavItem>
      <NavItem onClick={scrollAbout}>
        About
  </NavItem>
      <NavItem onClick={scrollSkills}>
        Skills
  </NavItem>
      <NavItem onClick={scrollPortfolio}>
        Portfolio
  </NavItem>
      <NavItem onClick={scrollContact}>
        Contact
  </NavItem>
    </Nav>
  </Navbar>
);

export default NavMenu;