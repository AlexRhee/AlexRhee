import React from "react";
import './Skills.css';
import { ProgressBar, Row, Col } from 'react-bootstrap';

class Skills extends React.Component {


  render() {
    return (
      <div id="skillsStart">
        <div className="aboutFiller" />
        <h1 className="aboutHeader wow fadeInLeft animated">Skills</h1>
        <Col sm={0} md={1} />
        <Col sm={12} md={10}>
          <Col sm={0} md={2} />
          <Col sm={12} md={8}>
            <Row>
              <h3 className="skillsHeader wow fadeInRight animated">Front-End:</h3>
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">HTML</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={95} />
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">CSS</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={90} />
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">React</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={95} />
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">Wordpress</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={75} />
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">UX/UI</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={65} />
            </Row>
            <Row>
              <h3 className="skillsHeader wow fadeInRight animated">Back-End:</h3>
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">Node.js</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={95} />
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">API Implementation</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={85} />
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">RESTful Principles</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={80} />
            </Row>
            <Row>
              <h3 className="skillsHeader wow fadeInRight animated">Database:</h3>
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">MySQL</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={90} />
            </Row>
            <Row>
              <span className="progressName wow slideInLeft animated">MongoDB</span><ProgressBar className="wow lightSpeedIn animated" bsStyle="info" active now={95} />
            </Row>
          </Col>
          <Col sm={0} md={2} />
        </Col>
        <Col sm={0} md={1} />
      </div>

    )
  }
};

export default Skills;
