import React from "react";
import './Contact.css';
import { Grid, Row, Col, Glyphicon, Image } from 'react-bootstrap';

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

const Contact = () => (
    <div id="contactStart">
        <div className="aboutFiller" />
        <h1 className="aboutHeader">Contact</h1>

        <Grid>
            <Row className="contactRow">
                <Col className="contactInfo" xs={12} md={4}>
                    <h3>Email: </h3>
                </Col>
                <Col className="contactInfo"  xs={12} md={4}>
                   <h4>arheeee@gmail.com</h4>
                </Col>
                <Col className="contactInfo"  xs={12} md={4}>
                </Col>
            </Row>
            <Row className="contactRow">
                <Col xs={12} md={4}>
                    <h3>LinkedIn</h3>
                </Col>
                <Col xs={12} md={4}>
                <h4>https://www.linkedin.com/in/arhee/</h4>
                </Col>
                <Col xs={12} md={4}>
                <Image className="contactIcons" src={require('./linkedin.png')} circle responsive onClick={linkedin}/>
                </Col>
            </Row>
            <Row className="contactRow">
                <Col xs={12} md={4}>
                    <h3>GitHub</h3>
                </Col>
                <Col xs={12} md={4}>
                <h4>https://github.com/AlexRhee</h4>
                </Col>
                <Col xs={12} md={4}>
                <Image className="contactIcons" src={require('./github.png')} circle responsive onClick={github}/>
                </Col>
            </Row>

        </Grid>
    </div>
);

export default Contact;