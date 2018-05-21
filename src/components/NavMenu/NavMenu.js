import React from "react";
import ReactDOM from 'react-dom'
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

var n;

class NavMenu extends React.Component {

  componentDidMount() {
    n = ReactDOM.findDOMNode(this);
    console.log(n.offsetTop);

     // When the user scrolls the page, execute myFunction 
     window.onscroll = function () { myFunction() };

     // Get the navbar
     var navi = document.getElementById("navi");
 
     // Get the offset position of the navi
     var sticky = n.offsetTop;
     
 
     // Add the sticky class to the navi when you reach its scroll position. Remove "sticky" when you leave the scroll position
     function myFunction() {
      console.log("sticky", sticky)
      //  console.log("n =", n, "navi =", navi)
       if (window.pageYOffset >= sticky) {
         navi.classList.add("sticky")
       } else {
         navi.classList.remove("sticky");
       }
     }
  }

  render() {

   


    return (
      <Navbar id="navi" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem className="navItem" onClick={scrollHome}>
            Home
  </NavItem>
          <NavItem className="navItem" onClick={scrollAbout}>
            About
  </NavItem>
          <NavItem className="navItem" onClick={scrollSkills}>
            Skills
  </NavItem>
          <NavItem className="navItem" onClick={scrollPortfolio}>
            Portfolio
  </NavItem>
          <NavItem className="navItem" onClick={scrollContact}>
            Contact
  </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default NavMenu;