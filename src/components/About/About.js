import React from "react";
import './About.css';
import { Grid, Row, Col, Image, Panel, Glyphicon, Thumbnail } from 'react-bootstrap';

class About extends React.Component {




    render() {


        return (
            <div id="aboutStart">
                <div className="aboutFiller" />
                <h1 className="aboutHeader">About</h1>
                <Row>
                    <Col sm={12} md={5}>
                        <Panel className="profileDiv">
                            <Panel.Heading>
                                <Image className="profile" src={require('./alex.jpg')} circle responsive />
                            </Panel.Heading>
                            <Panel.Body className="profileBody">
                                <div className="aboutMe">
                                    I am an up and coming full stack web and software developer. With several varied projects under my belt, I am confident in leading or collaborating on any project from specs to production. I pride myself on my ability to adapt to the situation around me and to learn quicky and on the fly if needed. Software Development is my passion.
                                </div>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col sm={12} md={7}>
                        <Col sm={6} md={6}>

                                <Thumbnail src={require('./rocket.png')} alt="242x200">
                                    <h3> Dynamic</h3>
                                    <p>Fun, Dynamic and Interactive websites that stray from the static sites of old.</p>
                                    
                                </Thumbnail>
                                <Thumbnail src={require('./screen.png')} alt="242x200">
                                    <h3>Responsive</h3>
                                    <p>Website and applications that work on all devices and screen sizes.</p>
                                    
                                </Thumbnail>
                        </Col>
                        <Col sm={6} md={6}>
                                                       
                                <Thumbnail src={require('./ruler.png')} alt="242x200">
                                    <h3>Clean</h3>
                                    <p>Intuitive interfaces and bug free environments are always a priority.</p>
                                    
                                </Thumbnail>
                                <Thumbnail src={require('./plane.png')} alt="242x200">
                                    <h3>Fast</h3>
                                    <p>Quick and lag free sites, by utilizng the most up to date languages.</p>
                                   
                                </Thumbnail>
                            
                        </Col>
                    </Col>
                </Row>

            </div>
        )

    }
}




export default About;