import React from "react";
import './Portfolio.css';
import { Modal, Button, Image, Col, Row, Carousel } from 'react-bootstrap';

var tripshare = () => {
  return (
    window.open("https://tripshareapp.herokuapp.com/")
  )
}

var thelist = () => {
  return (
    window.open("https://intense-bayou-67369.herokuapp.com/")
  )
}

var pairit = () => {
  return (
    window.open("https://alexrhee.github.io/Pair-It/")
  )
}



class Portfolio extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.handleShow3 = this.handleShow3.bind(this);
    this.handleShow4 = this.handleShow4.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleShow2() {
    this.setState({ show2: true });
  }

  handleShow3() {
    this.setState({ show3: true });
  }

  handleShow4() {
    this.setState({ show4: true });
  }

  handleHide() {
    this.setState({ show: false, show2: false, show3: false, show4: false });
  }


  render() {

    return (

      <div id="portfolioStart">
        <div className="aboutFiller" />
        <h1 className="aboutHeader">Portfolio</h1>
        <Col sm={0} md={2} />
        <Col sm={12} md={8}>
          <Row>
            <Col sm={12} md={6}>
              <div className="proj-container">
                <img src={require('./thelistlogo.png')} alt="Avatar" class="projectImage" />
                <div className="middle">
                  <div className="text" onClick={this.handleShow}>
                    The List
        <p className="descrip">Product List Blog Using MySQL and RESTful API Principles</p>
                    <h4>Click to learn more!</h4>
                  </div>

                  <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal"
                    className="portModal"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-lg">
                        The List
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This application allows user to create shareable lists of items using the Amazon Product Search API.</p>
                      <p>Aside from using the Amazon Product Search API, the application also utilizes MySQL create a database that stores user lists.</p>

                      <Carousel>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./thelistlogo.png')} />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./thelistsearch.png')} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./thelistfront.png')} />
                        </Carousel.Item>
                      </Carousel>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </Col>


            <Col sm={12} md={6}>
              <div class="proj-container">
                <img src={require('./tripsharefront.png')} alt="Avatar" class="projectImage" />
                <div class="middle">
                  <div class="text" onClick={this.handleShow2}>
                    TripShare
        <p className="descrip">Vacation Application/Blog Utilizing React and MongoDB</p>
                    <h4>Click to learn more!</h4>
                  </div>

                  <Modal
                    {...this.props}
                    show={this.state.show2}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal"
                    className="portModal"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-lg">
                        TripShare
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>TripShare allows the users to sign up and create and share a blog that saves the cities they have visited as well as individual places/venues within those cities and any pictures they would like to include.</p>
                      <p>The application was made using React.js and react-materialize as the UI framework. MongoDB and Mongoose were used to store all of blog information that the user adds. Mapbox GL JS API was used to implement the world map and city search function of the application.</p>
                      
                      <Carousel>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./tripsharefront.png')} />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./tripsharesearch.png')} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./tripshare2.png')} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./tripshareview.png')} />
                        </Carousel.Item>
                      </Carousel>
                  
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <div class="proj-container">
                <img src={require('./Pairit.jpg')} alt="Avatar" class="projectImage" />
                <div class="middle">
                  <div class="text" onClick={this.handleShow3}>
                    Pair-It
        <p className="descrip">Fun Web App Utilizing Third Party APIs</p>
                    <h4>Click to learn more!</h4>
                  </div>

                  <Modal
                    {...this.props}
                    show={this.state.show3}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal"
                    className="portModal"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-lg">
                        Pair-It
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This was a very simple an fun application that allows the user to find matching movies, beer or food based on their initial selection.</p>
                      <p>The application utilizes several API's to retrieve the "paired" information.</p>
                      <Carousel>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./Pairit.jpg')} />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./pairitnew.png')} />
                        </Carousel.Item>                       
                      </Carousel>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </Col>

            <Col sm={12} md={6}>
              <div class="proj-container">
                <img src={require('./portfoliohead.png')} alt="Avatar" class="projectImage" />
                <div class="middle">
                  <div class="text" onClick={this.handleShow4}>
                    Portfolio
        <p className="descrip">Responsive Portfolio made with React.js and Particle.js</p>
                    <h4>Click to learn more!</h4>
                  </div>

                  <Modal
                    {...this.props}
                    show={this.state.show4}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal"
                    className="portModal"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-lg">
                        My Portfolio
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>I created this site using React to create a fully responsive and interactive portfolio.</p>
                      <p>Particle.js was used for the header to create a theme for the page and to add some flavor.</p>
                      <Carousel>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./portfoliohead.png')} />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./portfolioabout.png')} />
                        </Carousel.Item>    
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./portfolioskills.png')} />
                        </Carousel.Item>                      
                      </Carousel>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={0} md={2} />
      </div>


    )
  }
};

export default Portfolio;
