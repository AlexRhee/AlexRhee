import React from "react";
import './Footer.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'


var linkedin = () => {
  return (
    window.open("https://www.linkedin.com/in/arhee/")
  )
}

var github = () => {
  return (
    window.open("https://github.com/AlexRhee")
  )
}

var scrollHome = () => (
  document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "start" })
)

const Footer = () => (

  <Grid columns className='aboutC footer' id="portfolioSection">
  <Row>
  <Image className="upArrow" src={require('./up.png')} rounded responsive onClick={scrollHome} />
    </Row>
    <Row>
      <Col xs={12} md={7}>
        <div className="footerSection"><center>
          <h2 className="footerEmail">alexsrhee@gmail.com</h2>
          <p>Alex Rhee ©2018</p>
          
        </center>
        </div>
      </Col>
      <Col xs={12} md={5}>
        <div className="footerSection">
        <span className="iconLinks">
          <Image className="footerIcons" src={require('./linkedin.png')} circle responsive onClick={linkedin}/>
          <Image className="footerIcons" src={require('./github.png')} circle responsive onClick={github}/>
          </span>
        </div>
      </Col>
    </Row>
  </Grid>


);

export default Footer;
