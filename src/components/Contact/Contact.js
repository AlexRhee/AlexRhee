import React from "react";
import './Contact.css';
import { Grid, Row, Col, Glyphicon, Image } from 'react-bootstrap';

var gmail = () => {
    return (
        window.location.replace("mailto:alexsrhee@gmail.com")
    )
}

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
        <h1 className="aboutHeader wow slideInLeft animated">Contact</h1>
        <Col sm={0} md={1} />
        <Col sm={12} md={10}>
            <Grid>
                <Row className="contactRow wow slideInLeft animated" data-wow-delay="0.5s">
                    <Col className="contactInfo" xs={12} md={4}>
                        <h4 className="contactHead">Email: </h4>
                    </Col>
                    <Col className="contactInfo" xs={12} md={4}>
                        <h4>alexsrhee@gmail.com</h4>
                    </Col>
                    <Col className="contactInfo" xs={12} md={4}>
                        <Image className="contactIcons" src={require('./gmail.png')} circle responsive onClick={gmail} />
                    </Col>
                </Row>
                <Row className="contactRow wow slideInLeft animated" data-wow-delay="1s">
                    <Col xs={12} md={4}>
                        <h4 className="contactHead">LinkedIn:</h4>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4>https://www.linkedin.com/in/arhee/</h4>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image className="contactIcons" src={require('./linkedin.png')} circle responsive onClick={linkedin} />
                    </Col>
                </Row>
                <Row className="contactRow wow slideInLeft animated" data-wow-delay="1.5s">
                    <Col xs={12} md={4}>
                        <h4 className="contactHead">GitHub:</h4>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4>https://github.com/AlexRhee</h4>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image className="contactIcons" src={require('./github.png')} circle responsive onClick={github} />
                    </Col>
                </Row>
            </Grid>
        </Col>
        <Col sm={0} md={1} />
    </div>
);

export default Contact;