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
                    <h1 className="aboutHeader wow slideInLeft animated">About</h1>
                    <div>
                        
                            <div className="aboutRow wow slideInLeft animated"  data-wow-delay="0.5s">
                                <Col sm={12} md={4}>

                                    <Image className="profile" src={require('./alex.jpg')} rounded responsive />
                                </Col>
                                <Col sm={12} md={8}>
                                    <div className="aboutMe">
                                        I worked in finance for over 4 years before deciding to change career paths to my true passion: Software Development. 
                                        <br/>
                                        <br/>
                                        My work experience spans from large corporations such as NBC Universal to a mid size insurance carrier, ICW Group, and even a smaller size boutique mortgage lender, Global Equity Finance. Working at these various companies has given me exposure to many different work environments, corporate cultures, and work systems. One of the most important things I learned from my four years in finance was clear and consistent communication, whether it be with clients, co-workers, superiors, etc., which is something that sets me apart from many developers.
                                        <br />
                                        <br/>
                                        My reason for switching careers was simply due to my unbridled passion for software development, which has been validated by my ability to quickly learn new languages and seamlessly understand programming fundamentals.
                                </div>
                                </Col>
                            </div>
                            <div className="aboutIcons">
                                <Col sm={12} md={3}>
                                    <div className="wow fadeInLeftBig animated" data-wow-delay="2.5s">
                                        <img className="aboutImg" src={require('./signal.png')} alt="242x200" />
                                        <h3>Communication</h3>
                                        <p>Clear and consistent communication is one of my strengths and priorities.</p>

                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                    <div className="wow fadeInLeftBig animated" data-wow-delay="2s">
                                        <img className="aboutImg" src={require('./orbit.png')} alt="242x200" />
                                        <h3>Responsive</h3>
                                        <p>Website and applications that work on all devices and screen sizes.</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                    <div className="wow fadeInLeftBig animated" data-wow-delay="1.5s">
                                        <img className="aboutImg" src={require('./telescope.png')} alt="242x200" />
                                        <h3>Detail Oriented</h3>
                                        <p>An attention to detail that boils down to every last pixel.</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                    <div className="wow fadeInLeftBig animated" data-wow-delay="1s">
                                        <img className="aboutImg" src={require('./robot.png')} alt="242x200" />
                                        <h3>Design</h3>
                                        <p>Clean and intuitive designs that are aesthetically pleasing and easy to use.</p>
                                    </div>
                                </Col>
                            </div>
                        
                    </div>
                </ReactCSSTransitionGroup >
            </div>
        )

    }
}




export default About;