import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import aboutUsData from '../../data/aboutUsData.json';

function AboutUs() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h2 className="display-4">{aboutUsData.title}</h2>
          <p className="lead">{aboutUsData.content}</p>
        </Container>
      </Jumbotron>
      
      <Container>
        <div className="row">
          <div className="col-md-4">
            <img src="https://placehold.co/600x400" alt="Placeholder 1" className="img-fluid left-image" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/600x400" alt="Placeholder 2" className="img-fluid middle-image" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/600x400" alt="Placeholder 3" className="img-fluid right-image" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;