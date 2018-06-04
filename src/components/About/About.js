import React from "react";
import './About.css';
import { Grid, Row, Col, Image, Panel, Glyphicon, Thumbnail } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class About extends React.Component {




    render() {


        return (
            <div id="aboutStart" >
                <ReactCSSTransitionGroup transitionName="aboutTransition" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                    <div className="aboutFiller" />
                    <h1 className="aboutHeader wow fadeInRight animated">About</h1>
                    <Row>
                        <Col sm={0} md={2} />
                        <Col sm={12} md={8}>
                            <Row className="aboutRow wow fadeInLeft animated">
                                <Col sm={12} md={4}>

                                    <Image className="profile" src={require('./alex.jpg')} rounded responsive />
                                </Col>
                                <Col sm={12} md={8}>
                                    <div className="aboutMe">
                                        I'm an up and coming full stack web and software developer living in the greater Los Angeles area. Although I have always been passionate about coding, I was worked in Finance for about 4 years before deciding to fully commit myself to development .With several varied projects under my belt, I am confident in leading or collaborating on any project from specs to production. I pride myself on my ability to adapt to the situation around me and to learn quicky and on the fly if needed.
                                </div>
                                </Col>
                            </Row>
                            <Row className="aboutIcons wow fadeInRight animated">
                                <Col sm={12} md={3}>
                                    <div>
                                        <img className="aboutImg" src={require('./dyn.png')} alt="242x200" />
                                        <h3> Dynamic</h3>
                                        <p>Fun, Dynamic and Interactive websites that stray from the static sites of old.</p>

                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                    <div>
                                        <img className="aboutImg" src={require('./res.png')} alt="242x200" />
                                        <h3>Responsive</h3>
                                        <p>Website and applications that work on all devices and screen sizes.</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                    <div>
                                        <img className="aboutImg" src={require('./clean.png')} alt="242x200" />
                                        <h3>Clean</h3>
                                        <p>Intuitive interfaces and bug free environments are always a priority.</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                    <div>
                                        <img className="aboutImg" src={require('./fast.png')} alt="242x200" />
                                        <h3>Fast</h3>
                                        <p>Quick and lag free sites, by utilizing the most up to date languages.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={0} md={2} />
                    </Row>
                </ReactCSSTransitionGroup >
            </div>
        )

    }
}




export default About;