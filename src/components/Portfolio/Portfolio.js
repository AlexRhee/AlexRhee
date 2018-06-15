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

      <div id="portfolioStart" >
        <div className="aboutFiller" />
        <h1 className="aboutHeader wow fadeInLeft animated">Portfolio</h1>
        <Col sm={0} md={3} />
        <Col sm={12} md={6}>
          <div className="projRow">
            <Col sm={12} md={8}>
              <div className="proj-container wow lightSpeedIn animated">
                <img src={require('./thelistlogo.png')} alt="Avatar" class="projectImage" />
                <div className="middle">
                  <div className="text" onClick={this.handleShow}>
                    The List
                    <h3>Click to learn more!</h3>
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
            <Col sm={12} md={4}>
              <h2 className="aboutLabel">The List</h2>
              <h4>Web application that allows you to create personalized shopping lists from the Amazon search API that you can share with others. Lists are saved into a database using MySQL.</h4>
            </Col>
          </div>

          <div className="projRow projRow2">
            <Col sm={12} md={4}>
              <h2 className="aboutLabel">TripShare</h2>
              <h4>An alternative to sharing your vacations on Facebook and Instagram, Tripshare allows you to log and share what cities you have traveled to, talk about places you visited within those cities and share pictures. Created with React.js, Mapbox GL JS, MongoDB.</h4>
            </Col>


            <Col sm={12} md={8}>
              <div className="proj-container proj-container2 wow lightSpeedIn animated">
                <img src={require('./tripsharelogo.png')} alt="Avatar" className="projectImage" />
                <div className="middle">
                  <div className="text" onClick={this.handleShow2}>
                    TripShare
                    <h3>Click to learn more!</h3>
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
          </div>

          <div className="projRow projRow2">
            <Col sm={12} md={8}>
              <div class="proj-container wow lightSpeedIn animated">
                <img src={require('./Pairit.jpg')} alt="Avatar" class="projectImage" />
                <div class="middle">
                  <div class="text" onClick={this.handleShow3}>
                    Pair-It
                    <h3>Click to learn more!</h3>
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
            <Col sm={12} md={4}>
              <h2 className="aboutLabel">Pair-It</h2>
              <h4>Fun and simple web app that pulls from several APIs to help you pair your movie with a matching beer and food. Allows for you to search by beer, movie or food and will pair the other two for you!</h4>
            </Col>
          </div>

          <div className="projRow projRow2">
          <Col sm={12} md={4}>
              <h2 className="aboutLabel" >Product Wireframes</h2>
              <h4>These wireframes are examples of some of the wireframing I have done in Balsamiq for various projects and websites.</h4>
            </Col>
            <Col sm={12} md={8}>
              <div class="proj-container wow lightSpeedIn animated">
                <img src={require('./Wireframe1.png')} alt="Avatar" class="projectImage" />
                <div class="middle">
                  <div class="text" onClick={this.handleShow4}>
                    Product Wireframes
                    <h3>Click to learn more!</h3>
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
                      <p>This was a product wireframe for a fundrasing website I mocked up in Balsamiq.</p>
                      <p>These are a few of the pages that I created and uploaded to Invision so that the client could click through a workable prototype of the website flow.</p>
                      <Carousel>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./Wireframe1.png')} />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./Wireframe2.png')} />
                        </Carousel.Item>    
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./Wireframe3.png')} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={require('./Wireframe4.png')} />
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
          </div>
        </Col>
        <Col sm={0} md={3} />
      </div>


    )
  }
};

export default Portfolio;
