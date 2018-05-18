import React from "react";
import './Skills.css';
import { ProgressBar, Row } from 'react-bootstrap';

class Skills extends React.Component {


  render() {
    return (
      <div id="skillsStart">
        <div className="aboutFiller" />
        <h1 className="aboutHeader">Skills</h1>
        <Row>
          <h3 className="skillsHeader">Front-End:</h3>
          </Row>
        <Row>
          <span className="progressName">HTML</span><ProgressBar active now={95} />
        </Row>
        <Row>
          <span className="progressName">CSS</span><ProgressBar active now={90} />
        </Row>
        <Row>
          <span className="progressName">React</span><ProgressBar active now={95} />
        </Row>
        <Row>
          <span className="progressName">AJAX</span><ProgressBar active now={80} />
        </Row>
        <Row>
          <h3 className="skillsHeader">Back-End:</h3>
          </Row>
          <Row>
          <span className="progressName">Node.js</span><ProgressBar bsStyle="success" active now={95} />
        </Row>
        <Row>
          <span className="progressName">API Implementation</span><ProgressBar bsStyle="success" active now={90} />
        </Row>
        <Row>
          <span className="progressName">RESTful Principles</span><ProgressBar bsStyle="success" active now={90} />
        </Row>
        <Row>
          <h3 className="skillsHeader">Database:</h3>
          </Row>
          <Row>
          <span className="progressName">MySQL</span><ProgressBar bsStyle="warning" active now={90} />
        </Row>
        <Row>
          <span className="progressName">MongoDB</span><ProgressBar bsStyle="warning" active now={90} />
        </Row>
      </div>

    )
  }
};

export default Skills;
