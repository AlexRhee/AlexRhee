import React from "react";
import './Skills.css';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import ChartistGraph from 'react-chartist';

class Skills extends React.Component {


  render() {

    var ChartData = {
      labels: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node.js', 'React.js', 'Python', 'Java'],
      series: [
        [],
        [],
        [90, 85, 95, 70, 85, 90, 65, 45]
      ]
    }

    var ChartOptions = {
      high: 100,
      low: 0,
      onlyInteger: true
    }

    var ChartData2 = {
      labels: ['MySQL', 'MongoDB', 'UX Wireframes', 'RESTful', 'API Implementation', 'NPM', 'Bootstrap', 'MERN Stack'],
      series: [
        [],
        [],
        [80, 85, 70, 65, 75, 80, 80, 75]
      ]
    }

    var ChartOptions2 = {
      high: 100,
      low: 0,
      onlyInteger: true
    }

    var ChartData3 = {
      labels: ['Wordpress', 'Git', 'Heroku', 'Visual Studio', 'Photoshop', 'Illustrator', 'Balsamiq','Excel'],
      series: [
        [],
        [],
        [75, 90, 70, 95, 85, 75, 75, 90]
      ]
    }

    var ChartOptions3 = {
      high: 100,
      low: 0,
      onlyInteger: true
    }



    return (
      <div id="skillsStart">
        <div className="aboutFiller" />
        <h1 className="aboutHeader wow fadeInLeft animated">Skills</h1>

        <div className="chartDiv chartSpace zoomIn wow">
          <ChartistGraph data={ChartData} options={ChartOptions} type={'Bar'} />
        </div>
        <div className="chartDiv chartSpace zoomIn wow">
          <ChartistGraph data={ChartData2} options={ChartOptions2} type={'Bar'} />
        </div>
        <div className="chartDiv zoomIn wow">
          <ChartistGraph data={ChartData3} options={ChartOptions3} type={'Bar'} />
        </div>


        {/* <Col sm={0} md={1} />
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
        <Col sm={0} md={1} /> */}
      </div>

    )
  }
};

export default Skills;
