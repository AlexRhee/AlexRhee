import React from "react";
import './Skills.css';
import { ProgressBar, Row, Col } from 'react-bootstrap';

class Skills extends React.Component {


  render() {
    return (
      <div id="skillsStart">
        <div className="aboutFiller" />
        <h1 className="aboutHeader">Skills</h1>
        <Col sm={0} md={1} />
        <Col sm={12} md={10}>
          <Col sm={0} md={2} />
          <Col sm={12} md={8}>
            <Row>
              <h3 className="skillsHeader">Front-End:</h3>
            </Row>
            <Row>
              <span className="progressName">HTML</span><ProgressBar bsStyle="info" active now={95} />
            </Row>
            <Row>
              <span className="progressName">CSS</span><ProgressBar bsStyle="info" active now={90} />
            </Row>
            <Row>
              <span className="progressName">React</span><ProgressBar bsStyle="info" active now={95} />
            </Row>
            <Row>
              <span className="progressName">Wordpress</span><ProgressBar bsStyle="info" active now={75} />
            </Row>
            <Row>
              <span className="progressName">UX/UI</span><ProgressBar bsStyle="info" active now={65} />
            </Row>
            <Row>
              <h3 className="skillsHeader">Back-End:</h3>
            </Row>
            <Row>
              <span className="progressName">Node.js</span><ProgressBar bsStyle="info" active now={95} />
            </Row>
            <Row>
              <span className="progressName">API Implementation</span><ProgressBar bsStyle="info" active now={85} />
            </Row>
            <Row>
              <span className="progressName">RESTful Principles</span><ProgressBar bsStyle="info" active now={80} />
            </Row>
            <Row>
              <h3 className="skillsHeader">Database:</h3>
            </Row>
            <Row>
              <span className="progressName">MySQL</span><ProgressBar bsStyle="info" active now={90} />
            </Row>
            <Row>
              <span className="progressName">MongoDB</span><ProgressBar bsStyle="info" active now={95} />
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
